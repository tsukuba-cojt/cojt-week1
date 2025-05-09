function WeatherDisplay({weather, temp, date}){
  return(
    <div>
    <h2>Weather Forecast</h2>
    <ul>
      {weather.map((w, index) => (
        <li key={index}>
          {date[index]} {w} {temp[index]}
        </li>
      ))}
    </ul>
  </div>
  );
}

export default WeatherDisplay;