import './App.css';
import Sidebar from './components/Sidebar';
import Navigation from './components/Navigation';
function App() {
  return (
    <div className="container-fluid">
      <div className='row'>
        <Sidebar/>
        <div className="main-section col-sm-12 col-lg-12 col-xl-10" >
          <Navigation/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
