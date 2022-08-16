import React from 'react'
import {useNavigate} from 'react-router-dom';
import '../App.css';

export default function AddScenario() {
  const navigate = useNavigate();
  
  
  const add = (e) => {
    e.preventDefault();
    var name = document.getElementById('scenarioName').value;
    var time = document.getElementById('scenarioTime').value;
    localStorage.setItem("name",name);
    localStorage.setItem('time', time);
    navigate('/view');
  }
  const reset = ()=> {
      window.location.reload(false);
  }
  return (
    <div className="container-fluid">
        <div className="row">
            <div className="main-section col-xl-10">
            <label htmlFor="addScenario">Scenario / Add</label><br/>
            <h3>Add Scenario</h3>
            <form onSubmit={add}>
            <div className="card" style={{height: 130}}>
                <div className="card-body">
                    <label id='scenario_name'>Scenario Name</label>
                    <input type="text" name='scenario' id='scenarioName' placeholder='Enter Scenario Name'  required/>
                    <label id='scenario_time'>Scenario Time (seconds)</label>
                    <input type='number' name='scenarioTime' id='scenarioTime' placeholder='Enter Scenario Time'  required/>
                </div>
            </div>
            <button type='submit' id='add'>Add</button>
          <button id='reset' onClick={reset}>Reset</button>
          <button id='goback'>Go Back</button>
          </form>
          
          
            </div>
            
        </div>
    </div>
  )
}
