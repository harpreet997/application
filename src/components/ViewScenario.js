import React from 'react'
import '../App.css';
export default function ViewScenario() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="main-section col-xl-10">
          <label htmlFor="addScenario">All Scenarios</label><br />
          <a href="/add"><button id='newScenario'>New Scenario</button></a>
          <a href="/addVehicle"><button id='addVehicle'>Add Vehicle</button></a>
          <button id='deleteAll'>Delete All</button>
          <table id='scenarioList'>
            <tr>
              <th>Scenario Id</th>
              <th>Scenario Name</th>
              <th>Scenario Time</th>
              <th>Number of Vehicles</th>
              <th>Add Vehicle</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Car</td>
              <td>30</td>
              <td>25</td>
              <td><a href='/addVehicle'><span class="glyphicon glyphicon-plus"></span></a></td>
              <td><i className="glyphicon glyphicon-pencil"></i></td>
              <td><span className="glyphicon glyphicon-trash"></span></td>

            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}
