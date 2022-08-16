import React from 'react'

export default function AddVehicle() {
  return (
    <div className="container-fluid">
        <div className="row">
            <div className="main-section col-xl-10">
            <label htmlFor="addScenario">Vehicle / Add</label><br/>
            <h3>Add Vehicle</h3>
            
            <div className="card" style={{width: 1000}}>
                <div className="card-body">
                    <label id='scenarios_list'>Scenarios List</label>
                    <select id='scenarios_lists'>
                        <option>Test 1</option>
                        <option>Test 2</option>
                        <option>Test 3</option>
                    </select>
                    <label id='vehicle_name'>Vehicle Name</label>
                    <input type='text' name='scenarioTime' placeholder='Enter Vehicle Name' />
                    <label id='speed'>Speed</label>
                    <input type='number' name='scenarioTime' placeholder='Enter Speed' /><br/>
                    <label id='position_X'>Position X</label>
                    <input type='number' name='scenarioTime' placeholder='Enter Position X' />
                    <label id='position_Y'>Position Y</label>
                    <input type='number' name='scenarioTime' placeholder='Enter Position Y' />
                    <label id='direction'>Direction</label>
                    <select id='directions'>
                        <option>Test 1</option>
                        <option>Test 2</option>
                        <option>Test 3</option>
                    </select>
                </div>
            </div>
            
            <button id='add'>Add</button>
          <button id='reset'>Reset</button>
          <button id='goback'>Go Back</button>
            </div>
            
        </div>
    </div>
  )
}
