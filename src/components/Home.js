import React from 'react'
import '../App.css';
export default function Home() {

  const test=() => {
    alert('Clicked');
  }
  return (
    <div className="container-fluid">
          <label htmlFor="scenario">Scenario</label><br/>
          <select>
            <option value='test1'>Test 1</option>
            <option value='test2'>Test 2</option>
            <option value='test3'>Test 3</option>   
          </select>
          <table id='scenarioList'>
            <tr>
              <th>Vehicle Id</th>
              <th>Vehicle Name</th>
              <th>Position X</th>
              <th>Position Y</th>
              <th>Speed</th>
              <th>Direction</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Car</td>
              <td>30</td>
              <td>25</td>
              <td>60</td>
              <td>Towards</td>
              <td><i onClick={test} className="glyphicon glyphicon-pencil"></i></td>
              <td><span className="glyphicon glyphicon-trash"></span></td>
            </tr>
          </table>
          <button id='start'>Start Simulation</button>
          <button id='stop'>Stop Simulation</button>
          
          </div>
          
       
  )
}
