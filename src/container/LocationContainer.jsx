import { useEffect, useState } from "react";

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
      <h1>Container</h1>
    </>
  );
};

export default LocationContainer;
