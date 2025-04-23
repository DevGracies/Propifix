import { CustomImage } from '@/components/shared/Image'
import { Poppins } from 'next/font/google'
import authImg from '../../../../../public/user_auth2_image.svg'
import authBgImg from '../../../../../public/user_regauth_bg.png'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

export default function AuthLayout({ children }) {
  return (
    <div
      className={`${poppins.className} relative antialiased min-h-screen overflow-x-hidden`}
    >
      <div className='absolute inset-0 -z-10'>
        <CustomImage
          src={authBgImg}
          style='w-full h-full'
          imgStyle='object-cover'
          priority={true}
        />
      </div>

      <main className='md:mx-8 mx-0 my-8 flex md:flex-row flex-col gap-[90px] justify-center'>
        <div className='md:w-[655px] max-w-full w-full p-4'>{children}</div>
        <CustomImage
          src={authImg}
          style='w-[455px] h-[280px] md:block hidden md:mt-[11rem]'
        />
      </main>
    </div>
  )
}
