import { CustomImage } from '@/components/shared/Image'
import { Poppins } from 'next/font/google'
import authBgImg from '../../../../public/auth_bg.jpeg'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

export default function AuthLayout({ children }) {
  return (
    <div
      className={`${poppins.className} antialiased h-screen overflow-auto relative`}
    >
      <div className='absolute top-0 bottom-0 left-0 right-0'>
        <CustomImage
          src={authBgImg}
          style={'w-full h-full z-[-1]'}
          imgStyle={'object-cover'}
        />
      </div>
      <main className='mx-auto my-[3rem] md:w-[580px] w-full p-4'>
        {children}
      </main>
    </div>
  )
}
