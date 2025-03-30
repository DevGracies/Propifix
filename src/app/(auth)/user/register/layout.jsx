import { CustomImage } from '@/components/shared/Image'
import { Poppins } from 'next/font/google'
import authImg from '../../../../../public/user_auth2_image.svg'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

export default function AuthLayout({ children }) {
  return (
    <div
      className={`${poppins.className} antialiased user_auth_bg h-screen overflow-auto`}
    >
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
