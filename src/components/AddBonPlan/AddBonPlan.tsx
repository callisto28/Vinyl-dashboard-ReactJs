import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function AddBonPlan() {
  return (
    <div>
      <h1 className='font-bold text-4xl '> Ajout de vinyles, meubles ou hifi</h1>
      <nav>
        <Link className="text-xl px-2 text-blue-500 hover:text-black hover:bg-gray-300 items-center hover:border-b-2 hover:border-purple-400 active:bg-red-400 focus:outline-double focus:ring focus:ring-red-300" to="/Bon-plan/vinyle">Ajout de vinyl</Link>
        <Link className="text-xl px-2 text-blue-500 hover:text-black hover:bg-gray-300 items-center hover:border-b-2 hover:border-purple-400" to="/Bon-plan/meubles">Ajout de meuble</Link>
        <Link className="text-xl px-2 text-blue-500 hover:text-black hover:bg-gray-300 items-center hover:border-b-2 hover:border-purple-400" to="/Bon-plan/hifi">Ajout d'hifi</Link>
      </nav>
      <Outlet />
    </div>
  )
}
