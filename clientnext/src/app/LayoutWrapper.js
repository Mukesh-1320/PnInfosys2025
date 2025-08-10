'use client'

import Footer from '@/component/Footer'
import Header from '@/component/Header'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'



export default function LayoutWrapper({ children }) {
  const pathname = usePathname()
  const [isAdminRoute, setIsAdminRoute] = useState(false)

  useEffect(() => {
    setIsAdminRoute(pathname.startsWith('/admin'))
  }, [pathname])

  return (
    <>
      {!isAdminRoute && <Header/>}
      <main className="flex-grow">{children}</main>
      {!isAdminRoute && <Footer/>}
    </>
  )
}