import { useEffect, useState } from "react";
import SimpleMap from "../component/SimpleMap";
import IPGeoInfo from "../component/IPGeoInfo";

const LocationContainer = () => {
  const [ipAddress, setIpAddress] = useState("");
  const [ipGEO, setIpGEO] = useState("");

  const fetchIp = async () => {
    try {
      const response = await fetch("https://api.ipify.org?format=json");
      const data = await response.json();
      setIpAddress(data.ip);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchGEO = async () => {
    try {
      const response = await fetch(
        `https://ipgeolocation.abstractapi.com/v1/?api_key=${process.env.REACT_APP_API_KEY}&ip_address=${ipAddress}`
      );
      const data = await response.json();
      setIpGEO(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchIp();
    if (ipAddress) {
      fetchGEO();
    }
  }, [ipAddress]);

  return (
    <>
      <h1>IP Geolocation LookUp</h1>
      {ipGEO ? (
        <div>
          <SimpleMap longitude={ipGEO.longitude} latitude={ipGEO.latitude} />
          <IPGeoInfo ipGEO={ipGEO} />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default LocationContainer;
