import React from 'react'

function AdminNavbar() {
  return (
   <>
    <div className="w-full bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold text-gray-800">Admin Dashboard</h1>
        <div className="space-x-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Profile</button>
          <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Logout</button>
        </div>
      </div>
   </>
  )
}

export default AdminNavbar
