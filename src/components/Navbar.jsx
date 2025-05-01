'use client'
import Image from 'next/image'
import { Button } from './ui/button'
import AnimatedLinks from './AnimatedLinks'
import { useEffect, useState } from 'react'
import { MenuIcon, XIcon } from 'lucide-react'
import Link from 'next/link'
import { NAVLINKS } from '@/lib/constants'
import CustomLink from './custom-ui/CustomLink'
import { UseLoggedIn } from '@/hooks/useLoggedIn'

const Navbar = ({ transparent }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { isLoggedIn } = UseLoggedIn()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-[15px] md:py-[23px] px-5 md:px-[50px] ${
        scrolled && transparent ? 'bg-[#7f37de] shadow' : 'bg-transparent'
      }
      ${!transparent && 'bg-white shadow'}`}
    >
      <div>
        <div className='flex items-center justify-between'>
          <Link href={'/'}>
            <Image
              src={!transparent ? '/icons/blue-logo.svg' : '/logo.svg'}
              className='cursor-pointer'
              height={30}
              width={83}
              alt='propifix logo'
            />
          </Link>

          <nav className=' items-center space-x-10 flex'>
            <ul className='gap-8 justify-center items-center w-fit hidden lg:flex'>
              {NAVLINKS.map((link) => (
                <li>
                  <AnimatedLinks
                    className={`${
                      transparent
                        ? 'text-white'
                        : 'text-black hover:text-blue-900'
                    } capitalize font-medium text-[13px]`}
                    iconColor={transparent ? 'white' : 'black'}
                  >
                    <CustomLink url={link.url}>{link.title}</CustomLink>
                  </AnimatedLinks>
                </li>
              ))}
            </ul>
            <div className='hidden lg:flex'>
              <Button
                variant='outline'
                className={`bg-transparent border  capitalize cursor-pointer text-white ${
                  !transparent &&
                  'border-black text-black hover:bg-gradient-to-r hover:from-[#5D14AD] hover:to-[#9747FF] hover:text-white transition-all duration-300'
                }`}
                asChild
              >
                <Link href={'/user/register'}>get started</Link>
              </Button>
            </div>
            <div className='lg:hidden relative z-50'>
              <Button
                variant={'ghost'}
                onClick={() => setIsOpen(!isOpen)}
                className={`${transparent ? 'text-white' : 'text-black'} py-3`}
              >
                {isOpen ? (
                  <XIcon size={24} className='size-[25px]' />
                ) : (
                  <MenuIcon size={24} className='size-[25px]' />
                )}
              </Button>
            </div>
          </nav>

          <div
            className={`fixed inset-0 bg-purple-600 bg-opacity-95 backdrop-blur-sm z-40 lg:hidden transition-all duration-300 ease-in-out ${
              isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <div className='container mx-auto px-4 py-40'>
              <nav className='flex flex-col space-y-3 items-center'>
                {NAVLINKS.map((link) => (
                  <AnimatedLinks
                    className={
                      'text-white capitalize font-medium text-lg hover:text-purple-200'
                    }
                    iconColor={'white'}
                  >
                    <CustomLink url={link.url}>{link.title}</CustomLink>
                  </AnimatedLinks>
                ))}
                <Button
                  variant='outline'
                  className='bg-transparent border text-white capitalize cursor-pointer '
                  asChild
                >
                  <Link href={'/user/register'}>
                    {isLoggedIn ? 'Account' : 'get started'}
                  </Link>
                </Button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
