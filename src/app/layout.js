import { Montserrat } from 'next/font/google'
import './globals.css'
import NextTopLoader from 'nextjs-toploader'
// import { Toaster } from '@/components/ui/sonner'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

export const metadata = {
  title: 'PropiFix',
  description:
    'PropiFix – Your go-to platform for real estate solutions and skilled artisans, making property management effortless.',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${montserrat.variable} antialiased`}>
        <NextTopLoader color='#0096FF' showSpinner={false} />
        {/* <Toaster richColors /> */}
        {children}
      </body>
    </html>
  )
}
