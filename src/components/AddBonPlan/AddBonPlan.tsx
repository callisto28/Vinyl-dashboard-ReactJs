import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function AddBonPlan() {
  return (
    <div>
        <h1> Ajout de vinyles, meubles ou hifi</h1>
        <nav>
            <Link to="/Bon-plan/vinyle">Ajout de vinyl</Link>
            <Link to="/Bon-plan/meubles">Ajout de meuble</Link>
            <Link to="/Bon-plan/hifi">Ajout d'hifi</Link>
        </nav>
        <Outlet />
    </div>
  )
}
