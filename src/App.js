import "./App.css";
import LocationContainer from "./container/LocationContainer";

function App() {
  return (
    <>
      <header>
        <h1>IP Geolocation LookUp</h1>
      </header>
      <div className="app">
        <LocationContainer />
      </div>
      <footer>
        <p>Copyright © 2024. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;

//Resource Used: https://devdreaming.com/blogs/how-to-get-user-location-in-react-js
