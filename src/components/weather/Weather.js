import { useEffect, useState } from 'react'
const Weather = () => {
    const [temperature, setTemperature] = useState({
        city: "",
        degrees: 0,
        humidity: 0,
        weatherIcon:''
    });
    useEffect(()=>{
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Kolkata&appid=86d6ab5391472bbdb665c6785ba5769a')
        .then(res=>res.json())
        .then(data=>setTemperature({...temperature,city:data.name,degrees:data.main.temp,humidity:data.main.humidity,weatherIcon:data.weather[0].icon}))
    },[])
    
    return (
        <>
            <div className="weather-sec">
                <div className="w-temp">
                    <img
                        src={`http://openweathermap.org/img/wn/${temperature.weatherIcon}.png`}
                        alt="weatherpic"
                    />
                    {Math.floor(temperature.degrees -273)}°
                </div>
                <div className="humidity">
                    Humidity: {temperature.humidity}
                </div>
            </div>
        </>
    )
}

export default Weather