const IPGeoInfo = ({ ipGEO }) => {
  return (
    <>
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
        Currency: {ipGEO.currency.currency_name}- {ipGEO.currency.currency_code}
      </p>
      <img
        src="https://static.abstractapi.com/country-flags/GB_flag.png"
        alt="country flag"
      />
    </>
  );
};

export default IPGeoInfo;
