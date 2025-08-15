"use client";
import React, { useEffect, useState, useCallback } from "react";
import FindAgentForm from "../forms/FindAgentForm";
import Image from "next/image";
import MapComponent from "../MapContainer";
import axios from "axios";

const FindAgent = () => {
  const [location, setLocation] = useState("Detecting location...");
  const [userCoordinates, setUserCoordinates] = useState(null);
  
  const [dataCache, setDataCache] = useState({
    agents: [],
    artisans: [],
    caretakers: [],
    landlords: []
  });
  
  const [fetchedCategories, setFetchedCategories] = useState({
    agents: false,
    artisans: false,
    caretakers: false,
    landlords: false
  });
  
  const [displayedProfessionals, setDisplayedProfessionals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchCenter, setSearchCenter] = useState([6.5244, 3.3792]);
  const [currentCategory, setCurrentCategory] = useState("house agent");

  // Detect user location
  useEffect(() => {
    if (typeof window !== "undefined" && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setUserCoordinates({ lat: latitude, lng: longitude });

          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
            );
            const data = await response.json();

            const city =
              data.address.city ||
              data.address.town ||
              data.address.village ||
              data.address.county ||
              data.address.locality ||
              data.address.suburb ||
              "";

            const state = data.address.state || data.address.region || "";

            setLocation(`${city.toUpperCase()}, ${state.toUpperCase()}`);
          } catch (error) {
            console.error("Reverse geocoding failed:", error);
            setLocation("We couldn't find your location");
          }
        },
        (error) => {
          console.error("Geolocation error:", error);
          setLocation("Location permission denied");
        }
      );
    } else {
      setLocation("Geolocation not supported");
    }
  }, []);

  useEffect(() => {
    fetchCategoryData("house agent");
  }, []);

  const geocodeData = async (data, addressField, type) => {
    const geocoded = await Promise.all(
      data.map(async (item) => {
        try {
          const geoRes = await fetch(
            `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
              item[addressField]
            )}`
          );
          const geoData = await geoRes.json();

          if (geoData && geoData.length > 0) {
            return {
              id: item._id,
              name: item.fullName,
              rating: item.ratings.averageRating,
              type: type,
              skill: item.skill || null,
              user: item.__t
                ?.replace(/_/g, " ")
                ?.replace(/\b\w/g, (char) => char.toUpperCase()) || type,
              lat: parseFloat(geoData[0].lat),
              lng: parseFloat(geoData[0].lon),
            };
          }
          return null;
        } catch (err) {
          console.error(`Failed to geocode ${item[addressField]}:`, err);
          return null;
        }
      })
    );
    return geocoded.filter(Boolean);
  };

  const fetchCategoryData = async (category) => {
    const cacheKey = getCacheKey(category);
    
    if (fetchedCategories[cacheKey] && dataCache[cacheKey].length > 0) {
      setDisplayedProfessionals(dataCache[cacheKey]);
      return;
    }

    setIsLoading(true);
    
    try {
      let apiData = [];
      let geocodedData = [];

      if (category === "house agent") {
        if (!fetchedCategories.agents) {
          const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/agent`);
          apiData = response.data?.data?.data || [];
          geocodedData = await geocodeData(apiData, 'businessLocation', 'agent');
          
          setDataCache(prev => ({ ...prev, agents: geocodedData }));
          setFetchedCategories(prev => ({ ...prev, agents: true }));
        } else {
          geocodedData = dataCache.agents;
        }
      } else if (category === "caretaker") {
        if (!fetchedCategories.caretakers) {
          const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/caretaker`);
          apiData = response.data?.data?.data || [];
          geocodedData = await geocodeData(apiData, 'homeAddress', 'caretaker');
          
          setDataCache(prev => ({ ...prev, caretakers: geocodedData }));
          setFetchedCategories(prev => ({ ...prev, caretakers: true }));
        } else {
          geocodedData = dataCache.caretakers;
        }
      } else if (category === "landlord") {
        if (!fetchedCategories.landlords) {
          const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/landlord`);
          apiData = response.data?.data?.data || [];
          geocodedData = await geocodeData(apiData, 'homeAddress', 'landlord');
          
          setDataCache(prev => ({ ...prev, landlords: geocodedData }));
          setFetchedCategories(prev => ({ ...prev, landlords: true }));
        } else {
          geocodedData = dataCache.landlords;
        }
      } else {
        if (!fetchedCategories.artisans) {
          const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/artisan`);
          apiData = response.data?.data?.data || [];
          const allArtisans = await geocodeData(apiData, 'homeAddress', 'artisan');
          
          setDataCache(prev => ({ ...prev, artisans: allArtisans }));
          setFetchedCategories(prev => ({ ...prev, artisans: true }));
          
          const skillFormatted = category.replace(/\s+/g, '_').toLowerCase();
          geocodedData = allArtisans.filter(artisan => 
            artisan.skill && artisan.skill.toLowerCase().replace(/\s+/g, '_') === skillFormatted
          );
        } else {
          const skillFormatted = category.replace(/\s+/g, '_').toLowerCase();
          geocodedData = dataCache.artisans.filter(artisan => 
            artisan.skill && artisan.skill.toLowerCase().replace(/\s+/g, '_') === skillFormatted
          );
        }
      }

      setDisplayedProfessionals(geocodedData);
      setCurrentCategory(category);
      
    } catch (error) {
      console.error(`Error fetching ${category} data:`, error);
      setDisplayedProfessionals([]);
    } finally {
      setIsLoading(false);
    }
  };

  const getCacheKey = (category) => {
    if (category === "house agent") return "agents";
    if (category === "caretaker") return "caretakers";
    if (category === "landlord") return "landlords";
    return "artisans"; 
  };

  const calculateDistance = (lat1, lng1, lat2, lng2) => {
    const R = 6371; // Earth's radius in kilometers
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLng = ((lng2 - lng1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in kilometers
  };

  const geocodeLocation = async (locationString) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          locationString
        )}`
      );
      const data = await response.json();
      if (data && data.length > 0) {
        return {
          lat: parseFloat(data[0].lat),
          lng: parseFloat(data[0].lon),
        };
      }
      return null;
    } catch (error) {
      console.error("Geocoding failed:", error);
      return null;
    }
  };

  const applyFilters = (professionals, searchCoords, radius) => {
    if (radius <= 0) return professionals;
    
    return professionals.filter(professional => {
      const distance = calculateDistance(
        searchCoords.lat,
        searchCoords.lng,
        professional.lat,
        professional.lng
      );
      return distance <= radius;
    });
  };

  const handleFormChange = useCallback(async (formData) => {
    const { searchLocation, serviceCategory, radius } = formData;
    
    if (serviceCategory !== currentCategory) {
      await fetchCategoryData(serviceCategory);
      return; 
    }
    
    setIsLoading(true);
    
    try {
      // Get coordinates for search location
      let searchCoords = userCoordinates;
      
      if (searchLocation !== location || !userCoordinates) {
        searchCoords = await geocodeLocation(searchLocation);
      }
      
      if (!searchCoords) {
        searchCoords = { lat: 6.5244, lng: 3.3792 }; // Default to Lagos
      }
      
      setSearchCenter([searchCoords.lat, searchCoords.lng]);

      // Get current professionals based on category
      let currentProfessionals = [];
      const cacheKey = getCacheKey(serviceCategory);
      
      if (serviceCategory === "house agent" || serviceCategory === "caretaker" || serviceCategory === "landlord") {
        currentProfessionals = dataCache[cacheKey] || [];
      } else {
        const skillFormatted = serviceCategory.replace(/\s+/g, '_').toLowerCase();
        currentProfessionals = (dataCache.artisans || []).filter(artisan => 
          artisan.skill && artisan.skill.toLowerCase().replace(/\s+/g, '_') === skillFormatted
        );
      }

      // Apply radius filter
      const filteredProfessionals = applyFilters(currentProfessionals, searchCoords, radius);
      setDisplayedProfessionals(filteredProfessionals);
      
    } catch (error) {
      console.error("Error processing form data:", error);
      setDisplayedProfessionals([]);
    } finally {
      setIsLoading(false);
    }
  }, [dataCache, currentCategory, userCoordinates, location]);

  return (
    <section className="lg:flex text-white" id="find-an-agent">
      <div className="w-full lg:w-1/2 px-5 md:px-[72px] lg:pl-[72px] py-[60px] md:py-[40px] bg-gradient-to-l from-[#5D14AD] to-[#9747FF] flex flex-col gap-5 relative z-40">
        <h1 className="font-semibold text-[20px] md:text-[30px] max-w-[530px]">
          Discover house agents, caretakers, landlords and trusted service
          providers near you, from carpenters and cleaners to painters and
          electricians and more.
        </h1>

        <div className="flex gap-[4px] items-center">
          <Image
            src={"/icons/Alert.svg"}
            width={18}
            height={18}
            alt="icon"
            className="size-[12px] md:size-[18px]"
          />
          <p className="text-[13px] md:text-[15px] font-light">
            We&apos;ve detected your location as{" "}
            <span className="font-semibold">{location}</span>
          </p>
        </div>

        <FindAgentForm 
          onFormChange={handleFormChange} 
          detectedLocation={location}
          isLoading={isLoading}
        />
      </div>

      <div className="relative w-1/2">
        <MapComponent 
          professionals={displayedProfessionals}
          center={searchCenter}
          isLoading={isLoading}
          currentCategory={currentCategory}
        />
      </div>
    </section>
  );
};

export default FindAgent;