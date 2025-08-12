'use client'

import axios from 'axios'
import React, { useEffect, useState } from "react";
import { useParams } from 'next/navigation'
import { MaxWidth } from '@/components/shared/MaxWidth'
import { BackButton } from './BackButton'
import { ProfileHeader } from './ProfileHeader'
import { VerificationBanner } from './VerificationBanner'
import { ProfileStats } from './ProfileStats'
import { InspectionsTable } from './InspectionsTable'
import { AccountCard } from '../account/AccountCard'
import AnimatedSpinner from '@/components/ui/animated-spinner';

export const UserProfile = () => {
  const {id} = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;

    const fetchUser = async () => {
      try{
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/user/${id}`
        );
        setUser(res.data.data);
        setError("");
      } catch (err) {
        console.error(err);
        setError("Unable to fetch user profile.")
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) {
    return (
      // <MaxWidth className={"py-28"}>
      //   <p className='text-center min-h-screen text-[#5D14AD] italic text-lg'>
      //     Loading user profile...
      //   </p>
      // </MaxWidth>
      <div className='min-h-screen pt-64 flex justify-center text-center'>
        <AnimatedSpinner/>
      </div>
    )
  }

  if (!user) return null;

  return (
    <MaxWidth className='bg-white md:pt-28 pt-23 md:px-[50px] px-4'>
      <BackButton />
      <ProfileHeader />
      <div className='grid lg:grid-cols-2 grid-cols-1 md:gap-[40px] gap-[15px]'>
        <AccountCard account={user} />
        <div className='flex flex-col justify-between lg:gap-0 gap-3'>
          <VerificationBanner />
          <ProfileStats />
        </div>
      </div>
      <InspectionsTable />
    </MaxWidth>
  )
}
