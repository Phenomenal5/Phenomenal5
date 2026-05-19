// Import React Hooks for side effects (useEffect) and state (useState)
import { useEffect, useState } from "react"

// This is a custom React Hook that tracks the user's location
const useCoordinate = () => {
    // Set up state to store latitude, longitude, and any error messages
    const [coords, setCoords] = useState({
        latitude: null,      // will store the user's latitude
        longitude: null,     // will store the user's longitude
        error: null          // will store any error message
    })

    // useEffect runs when the component is mounted (because of the empty dependency array [])
    useEffect(() => {

        // First, check if the browser supports geolocation
        if(!navigator.geolocation) {
            // If not supported, update the state with an error message
            setCoords((previous) => ({
                ...previous,                  // keep any existing values (spread operator)
                error: 'location is not supported'  // set error message
            }))
            return // Exit early since location won't work
        }

        // This function runs when the location is successfully retrieved
        const successLocation = (position) => {
            setCoords({
                latitude: position.coords.latitude,     // update latitude
                longitude: position.coords.longitude,   // update longitude
                error: null                              // clear any errors
            })
        }

        // This function runs if there was an error getting the location
        const errorLocation = (position) => {
            setCoords((previous) => ({
                ...previous,                             // keep previous latitude & longitude
                error: 'unable to retrieve location'     // update error message
            }))
        }

        // Start watching the user's location. This keeps updating as the user moves.
        const watch = navigator.geolocation.watchPosition(successLocation, errorLocation);

        // Cleanup: stop watching the location when the component unmounts
        return () => navigator.geolocation.clearWatch(watch);
        
    }, []) // The empty array means this effect runs only once (when the component mounts)

    // Return the coordinates and error from this custom hook
    return coords
}

// Export the custom hook so other components can use it
export default useCoordinate
