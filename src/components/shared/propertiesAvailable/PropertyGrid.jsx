import { PropertyCard } from './PropertyCard'

export const PropertyGrid = () => {
  return (
    <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
      <PropertyCard />
      <PropertyCard />
      <PropertyCard />
      <PropertyCard />
      <PropertyCard />
      <PropertyCard />
    </div>
  )
}
