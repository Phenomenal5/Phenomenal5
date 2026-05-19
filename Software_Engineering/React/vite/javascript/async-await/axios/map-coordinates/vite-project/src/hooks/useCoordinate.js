import { useState, useEffect } from "react";


const useCorrodinate = () => {

    const [coords, setCoords] = useState({
        latitude: null,
        longitude: null,
        error: null
    })

    useEffect(() => {

        if(!navigator.geolocation) {
            setCoords((previous) => ({
                ...previous,
                error: 'location is not suppoerted'
            }))
            return
        }

        const successLocation = (position) => {
            setCoords({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                error: null
            })
        }


        const errorLocation = (position) => {
            setCoords((previous) => ({
                ...previous,
                error: 'unable to retreive location'
            }))
        }



        const watch = navigator.geolocation.watchPosition(successLocation, errorLocation)
        return () => navigator.geolocation.clearWatch(watch);

    }, [])

    return coords;

}

export default useCorrodinate;