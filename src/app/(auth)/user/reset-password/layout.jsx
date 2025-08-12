import { CustomImage } from '@/components/shared/Image'
import { Poppins } from 'next/font/google'
import authImg from '../../../../../public/backgrounds/auth-password-reset.png'
import authVector from '../../../../../public/backgrounds/auth-vector1.svg'
import authVector2 from '../../../../../public/backgrounds/auth-vector2.svg'
import authVector3 from '../../../../../public/backgrounds/auth-vector3.svg'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

export default function AuthLayout({ children }) {
  return (
   <MaxWidthWrapper>
      <div
      className={`${poppins.className} relative flex min-h-screen overflow-x-hidden antialiased`}
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-30">
        <CustomImage
          src={authImg}
          style="w-full h-full"
          imgStyle="object-contain object-right"
          priority={true}
        />
      </div>

      <div  className="absolute inset-0 -z-20 flex w-full h-full">
        <CustomImage
          src={authVector}
          style="w-2/5 h-full"
          imgStyle="object-cover"
          priority={true}
        />
         <CustomImage
          src={authVector2}
          style="w-1/3 h-full"
          imgStyle="object-cover"
          priority={true}
        />
         <CustomImage
          src={authVector3}
          style="w-1/3 h-full absolute right-80 -z-50"
          imgStyle="object-cover"
          priority={true}
        />   
      </div>

      <main className="relative z-10 md:mx-8 mx-0 my-8 flex md:flex-row flex-col gap-[90px] justify-start w-full">
        <div className="md:w-[655px] max-w-full w-full p-4">{children}</div>
      </main>
    </div>
   </MaxWidthWrapper>
  )
}
