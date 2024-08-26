import React, { useState } from 'react'
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'

const WeatherApp = () => {

    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelslike: 24.84,
        temp: 25.04,
        tempMin: 20,
        tempMax: 26.6,
        humidity: 47,
        weather: "haze"
    })


    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo)
    }

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>WeatherApp</h1>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    )
}

export default WeatherApp