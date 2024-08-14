import './App.css';
import MapComponent from './components/MapComponent';

function App() {
  return (
    <div className="flex flex-col gap-3 items-center justify-center w-full">
      <h1 className='text-3xl mt-5 font-bold' >Vehicle Movement on Map</h1>
      <p>Click on any two point on the map and wait for 7-8 seconds the Route will be generated. You can clear the route as well by clicking on Reset the Route button.</p>
      <MapComponent/>
    </div>
  );
}

export default App;
