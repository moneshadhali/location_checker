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
      <h1>IP Geolocation LookUp</h1>
      {ipGEO ? (
        <div>
          <p>IP Address: {ipGEO.ip_address}</p>
          <p>ISP Name: {ipGEO.connection.isp_name}</p>
          <p>City: {ipGEO.city}</p>
          <p>Region: {ipGEO.region}</p>
          <p>Country: {ipGEO.country}</p>
          <p>Continent: {ipGEO.continent}</p>
          <p>
            Time: {ipGEO.timezone.current_time} ({ipGEO.timezone.abbreviation})
          </p>
          <p>
            {" "}
            Currency :{ipGEO.currency.currency_name} -{" "}
            {ipGEO.currency.currency_code}
          </p>
          <img
            src="https://static.abstractapi.com/country-flags/GB_flag.png"
            alt="country flag"
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default LocationContainer;
