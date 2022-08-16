import React from 'react'
import { Route, Routes } from 'react-router'
import AddScenario from './AddScenario'
import AddVehicle from './AddVehicle'
import Home from './Home'
import ViewScenario from './ViewScenario'

export default function Navigation() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/add' element={<AddScenario/>}/>
            <Route path='/view' element={<ViewScenario/>}/>
            <Route path='/addVehicle' element={<AddVehicle/>}/>
        </Routes>
    </div>
  )
}
