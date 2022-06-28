import { useState, useEffect } from "react";

function Film() {

    const [filmData, setFilmData] = useState([])
    const url = 'https://swapi.dev/api/vehicles/'

    const loadData = async () => {
     try{

        const loader = document.createElement('p');
        const target = document.querySelector(".App-header");
        const newElement = target.appendChild(loader).innerHTML = "loading" ; 
        loader.classList ='loader' 
        const response = await fetch(url);
        const data = await response.json();
        setFilmData(data.results);
         
     }    
    catch (err) {

        console.log(err)

        }

    finally{

          console.log("done")  
          const target = document.querySelector(".loader");
          target.innerHTML = '';
        }


    }


    useEffect(() => {
        loadData()

    }, [])

    return (
        <>
            {filmData.map((vehicle, index) => {
                // console.log(vehicle.name);
                const {name, model, manufacturer,crew, consumables} = vehicle
                return (
                <>
                  <div key={index}>  
                    <p>{name}</p>
                    <p>{model}</p>
                    <p>{manufacturer}</p>
                    <p>{crew}</p>
                    <p>{consumables}</p>
                </div> 
                </>
                )

            })}


            {filmData.map((vehicle, index) => {
                // console.log(vehicle.name);
                const {name, cargo_capacity, max_atmosphering_speed} = vehicle
                return (
                <>
                  <div key={index}>
                    <p>{name}</p>  

                    <p>{max_atmosphering_speed}</p>
                    <p>{cargo_capacity}</p>
                    
                </div> 
                </>
                )

            })} 




        </>)
}


export default Film;