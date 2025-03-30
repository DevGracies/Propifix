import { CustomImage } from '@/components/shared/Image'
import { Poppins } from 'next/font/google'
import authImg from '../../../../../public/user_auth2_image.svg'
import authBgImg from '../../../../../public//user_auth_bg.svg'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

export default function AuthLayout({ children }) {
  return (
    <div
      className={`${poppins.className} relative antialiased h-screen overflow-auto`}
    >
      <div className='absolute top-0 bottom-0 left-0 right-0'>
        <CustomImage
          src={authBgImg}
          style={'w-full h-full z-[-1]'}
          imgStyle={'object-cover'}
        />
      </div>
      <main className='md:mx-[2rem] mx-0 my-[2rem] flex md:flex-row flex-col gap-[90px] justify-center'>
        <div className='md:w-[655px] w-full p-4'>{children}</div>
        <CustomImage
          src={authImg}
          style={'w-[455px] h-[280px] md:block hidden md:mt-[17rem] mt-0'}
        />
      </main>
    </div>
  )
}
