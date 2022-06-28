import { useState, useEffect } from "react";

function Film() {

    const [filmData, setFilmData] = useState([])
    const url = 'https://swapi.dev/api/vehicles/'

    const loadData = async () => {

        const response = await fetch(url)
        const data = await response.json()



        setFilmData(data.results)


    }


    useEffect(() => {
        loadData()

    }, [])

    return (
        <>
            {filmData.map((vehicle) => {
                console.log(vehicle.name);
                return (<>

                    <p>{vehicle.name}</p>
                    <p>{vehicle.model}</p>
                    <p>{vehicle.manufacturer}</p>
                    <p>{vehicle.crew}</p>
                    <p>{vehicle.consumables}</p>

                </>

                )
            })}

        </>)
}


export default Film;