import { useState } from "react";

const LocationContainer = () => {
  const [ipAddress, setIpAddress] = useState("");
  const fetchIp = async () => {
    try {
      const response = await fetch("https://api.ipify.org?format=json");
      const data = await response.json();
      setIpAddress(data.ip);
    } catch (error) {
      console.error(error);
    }
  };
  fetchIp();

  return (
    <>
      <h1>Container</h1>
    </>
  );
};

export default LocationContainer;
