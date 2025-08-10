import React from 'react' 
import Link from 'next/link'

function Sidebar() {
  return (
   <>
     <aside className="w-64 h-screen bg-gray-900 text-white flex flex-col p-4 space-y-4">
      <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
      <nav className="flex flex-col space-y-2">
        <Link href="/admin" className="hover:bg-gray-700 p-2 rounded">Dashboard</Link>
         <Link href="/admin/sidebar" className="hover:bg-gray-700 p-2 rounded">Slider</Link>
         <Link href="/admin/technology" className="hover:bg-gray-700 p-2 rounded">Technology</Link>
         <Link href="/admin/portfolio" className="hover:bg-gray-700 p-2 rounded">Portfolio</Link>
         <Link href="/admin/events" className="hover:bg-gray-700 p-2 rounded">Events</Link>
        
        <Link href="/admin/users" className="hover:bg-gray-700 p-2 rounded">Users</Link>
        <Link href="/admin/settings" className="hover:bg-gray-700 p-2 rounded">Settings</Link>
      </nav>
    </aside>

   </>
  )
}

export default Sidebar
