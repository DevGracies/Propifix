import { WHYPROPIFIX } from '@/lib/constants';
import Image from 'next/image';


const WhyPropifix = () => {
  return (
    <section className="py-5 md:py-[70px] px-5 md:px-[72px] flex flex-col lg:flex-row justify-between items-center gap-10" id='why-propifix max-w-[1200px] mx-auto'>
      <h1 className="text-[30px] font-semibold text-[#9D71C6] capitalize">
        why <span className="text-[#5D14AD]">propifix?</span>
      </h1>
      <div>
        {WHYPROPIFIX.map((how, index) => (
          <div key={index} className="relative py-4  border-b-2 border-[#9747FF] flex gap-2 items-center">
            <Image
              src={how.iconPath}
              height={30}
              width={30}
              alt={how.title}
              className='size-[20px] md:size-[30px]'
            />
            <h1 className="text-[18px] sm:text-[20px] md:text-[25px] font-medium capitalize">{how.title}</h1>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyPropifix