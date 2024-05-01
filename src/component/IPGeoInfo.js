const IPGeoInfo = ({ ipGEO }) => {
  return (
    <section>
      <p>
        IP Address: <span>{ipGEO.ip_address}</span>
      </p>
      <p>
        ISP Name: <span>{ipGEO.connection.isp_name}</span>
      </p>
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
      <p>
        Country Flag:
        <img
          src="https://static.abstractapi.com/country-flags/GB_flag.png"
          alt="country flag"
        />
      </p>
    </section>
  );
};

export default IPGeoInfo;
