'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Poppins } from 'next/font/google'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const User = {
  username: 'Mary Johnson',
  profileImage: '/images/agent.jpg',
}

const navLinks = [
  { name: 'Dashboard', path: '/admin/dashboard' },
  { name: 'User Hub', path: '/admin/user-hub' },
  { name: 'Property Hub', path: '/admin/property-hub' },
  { name: 'Inspection Hub', path: '/admin/inspection-hub' },
  { name: 'Service Hub', path: '/admin/service-hub' },
  { name: 'Plans & Payments', path: '/admin/plans-and-payments' },
  { name: 'Reports & Analytics', path: '/admin/reports-and-analytics' },
  { name: 'Messages & Alerts', path: '/admin/messages-and-alerts' },
  { name: 'Disputes', path: '/admin/disputes' },
  { name: 'Admin Panel', path: '/admin/admin-panel' },
  { name: 'Settings', path: '/admin/settings' },
  { name: 'Logout', path: '/admin/login' },
]

export default function AdminDashboardLayout({ children, user = User }) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className={`${poppins.variable} flex h-screen overflow-hidden bg-[#F5F5F5]`}>
      {/* Mobile Top Modal Navigation */}
      {sidebarOpen && (
        <>
          {/* Click outside to close */}
          <div
            className="fixed inset-0 z-30"
            onClick={() => setSidebarOpen(false)}
          />

          {/* Top modal */}
          <div className="fixed top-0 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-sm bg-white border border-gray-200 rounded-b-2xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <Image
                src="/assets/propifix-icon.svg"
                alt="PropFix Logo"
                width={80}
                height={25}
              />
              <button onClick={() => setSidebarOpen(false)}>
                <X className="w-6 h-6 text-gray-800" />
              </button>
            </div>

            <nav className="space-y-4 text-center">
              {navLinks.map(({ name, path }) => {
                const isActive = pathname === path

                return (
                  <Link
                    href={path}
                    key={name}
                    onClick={() => setSidebarOpen(false)}
                    className={`block text-sm font-medium transition-all ${
                      name === 'Logout'
                        ? 'text-[#A363FF]'
                        : isActive
                        ? 'text-[#5D14AD] font-semibold'
                        : 'text-gray-600 hover:text-[#5D14AD]'
                    }`}
                  >
                    {name}

                    {isActive && name !== 'Logout' && (
                      <Image
                        src="/icons/nav-underline.svg"
                        alt="underline"
                        width={60}
                        height={10}
                        className="mx-auto mt-1"
                      />
                    )}
                  </Link>
                )
              })}
            </nav>
          </div>
        </>
      )}

      {/* Desktop Sidebar */}
      <aside
        className={`hidden md:flex flex-col justify-between h-screen w-40 lg:w-64 bg-white border-r border-gray-200 py-10 px-6`}
      >
        <Link href="/" className="flex justify-center mb-12">
          <Image src="/assets/propifix-icon.svg" alt="PropFix Logo" width={100} height={30} />
        </Link>

        <nav className="space-y-6 text-center">
          {navLinks.map(({ name, path }) => {
            const isActive = pathname === path

            return (
              <Link
                href={path}
                key={name}
                className={`relative block text-xs lg:text-sm font-medium transition-all ${
                  name === 'Logout'
                    ? 'text-[#A363FF]'
                    : isActive
                    ? 'text-[#5D14AD] font-semibold'
                    : 'text-gray-600 hover:text-[#5D14AD]'
                }`}
              >
                {name}

                {isActive && name !== 'Logout' && (
                  <Image
                    src="/icons/nav-underline.svg"
                    alt="underline"
                    width={60}
                    height={10}
                    className="mx-auto mt-1"
                  />
                )}
              </Link>
            )
          })}
        </nav>
      </aside>

      {/* Content Area */}
      <div className="flex-1 flex flex-col h-screen">
        {/* Navbar */}
        <header className="w-full bg-white border-b shadow-xl border-gray-200 px-6 py-4 flex justify-between items-center md:justify-end">
          <button onClick={() => setSidebarOpen(true)} className="md:hidden">
            <Menu className="w-6 h-6 text-gray-800" />
          </button>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm lg:text-base font-bold">Hello, {user.username}</p>
              <p className="text-xs lg:text-sm">Admin</p>
            </div>
            <Image
              src={user.profileImage}
              alt="Admin Avatar"
              width={55}
              height={40}
              className="object-cover lg:mr-18 rounded-[16px] rounded-tl-[20px] rounded-br-[20px] border border-[#5D14AD]"
            />
          </div>
        </header>

        <main className="p-6 flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  )
}
