import React from 'react'
import '../App.css';


export default function Sidebar() {
  return (
    <div className="sidebar col-sm-12 col-lg-12 col-xl-2 ">
    <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/add">Add Scenario</a></li>
    <li><a href="/view">All Scenario</a></li>
    <li><a href="/addVehicle">Add Vehicle</a></li>
    </ul>
  </div>
  )
}
