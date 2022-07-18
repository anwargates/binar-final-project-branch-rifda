import axios from 'axios'
import React, { useEffect, useState } from 'react'

const StoreCities = (props) => {
    const [city, setCity] = useState("Kota")
    const url = "https://finalsecondhand-staging.herokuapp.com/cities"

    useEffect(() => {
        axios.get(url).then(response => {
            console.log(response)
            const res = response.data.cities.find(city => city.id == props.cityID).name;
            setCity(res)
        }).catch()
    }, [url])

    return (
        <>
            {city}
        </>
    )
}

export default StoreCities;
