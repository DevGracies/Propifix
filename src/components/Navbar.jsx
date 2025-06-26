'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from './ui/button';
import AnimatedLinks from './AnimatedLinks';
import { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import Link from 'next/link';
import { NAVLINKS } from '@/lib/constants';
import CustomLink from './custom-ui/CustomLink';
import { UseLoggedIn } from '@/hooks/useLoggedIn';
import { MaxWidth } from './shared/MaxWidth';

const Navbar = ({ transparent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { isLoggedIn } = UseLoggedIn();
  const router = useRouter();

  // Avoid hydration mismatches
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    router.push(isLoggedIn ? '/user/account' : '/user/register');
  };

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) return null;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled && transparent ? 'bg-[#7f37de]' : 'bg-transparent'
      } ${!transparent && 'bg-white shadow'}`}
    >
      <MaxWidth className="py-[15px] md:py-[23px] px-5 md:px-[50px]">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image
              src={!transparent ? '/icons/blue-logo.svg' : '/logo.svg'}
              height={30}
              width={83}
              alt="propifix logo"
              className="cursor-pointer"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="items-center cursor-pointer space-x-10 hidden lg:flex">
            <ul className="gap-8 cursor-pointer justify-center items-center w-fit flex">
              {NAVLINKS.map((link) => (
                <li key={link.url}>
                  <AnimatedLinks
                    className={` cursor-pointer ${ 
                      transparent ? 'text-white' : 'text-black hover:text-blue-900' 
                    } capitalize font-medium text-[13px]`}
                    iconColor={transparent ? 'white' : 'black'}
                  >
                    <CustomLink url={link.url}>{link.title}</CustomLink>
                  </AnimatedLinks>
                </li>
              ))}
            </ul>
            <div>
              <Button
                variant="outline"
                className={`bg-transparent cursor-pointer border capitalize text-white ${
                  !transparent &&
                  'border-black text-black hover:bg-gradient-to-r hover:from-[#5D14AD] hover:to-[#9747FF] hover:text-white transition-all duration-300'
                }`}
                onClick={handleClick}
              >
                {isLoggedIn ? 'Account' : 'Get Started'}
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden relative z-50">
            <Button
              variant="ghost"
              onClick={() => setIsOpen(!isOpen)}
              className={`cursor-pointer ${transparent ? 'text-white' : 'text-black'} py-3`}
            >
              {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute top-full right-5 w-[90%] max-w-xs bg-white border cursor-pointer border-gray-200 rounded-xl shadow-md z-40 transition-all duration-300 ease-in-out overflow-hidden lg:hidden ${
            isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
          }`}
        >
          <nav className="flex flex-col py-5 cursor-pointer px-6 space-y-4">
            {NAVLINKS.map((link) => (
              <AnimatedLinks
                key={link.url}
                className="text-black capitalize font-medium text-base cursor-pointer hover:text-purple-600"
                iconColor="black"
              >
                <CustomLink url={link.url} onClick={() => setIsOpen(false)}>
                  {link.title}
                </CustomLink>
              </AnimatedLinks>
            ))}
            <div>
              <Button
                variant="outline"
                className="text-black border cursor-pointer capitalize hover:bg-purple-50"
                onClick={handleClick}
              >
                {isLoggedIn ? 'Account' : 'Get Started'}
              </Button>
            </div>
          </nav>
        </div>
      </MaxWidth>
    </header>
  );
};

export default Navbar;
