'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useGetAdminProfileQuery } from '../../../../redux/features/adminAuth/adminAuthApi'
import Sidebar from '@/component/Sidebar'
import AdminNavbar from '@/component/AdminNavbar'




export default function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const router = useRouter()

  const { data, error, isLoading } = useGetAdminProfileQuery()

//   useEffect(() => {
//     if (error) {
//       router.push('/admin/login')
//     }
//   }, [error, router])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 text-lg">Checking authentication...</p>
      </div>
    )
  }

  const admin = data?.user

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
       <Sidebar closeSidebar={() => setSidebarOpen(false)} />
      {/* <div
        className={`fixed md:static z-50 md:z-0 top-0 left-0 h-full min-h-screen w-64 transition-transform transform bg-blue-900 text-white p-4 shadow-lg ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
       
      </div> */}

      {/* Main Area */}
      <div className="flex flex-col flex-1 min-h-screen">
        <AdminNavbar onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-grow p-4">{children}</main>
        
      </div>
    </div>
  )
}