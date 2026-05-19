import React, { useState } from 'react'

const Robohash = () => {
    const [robo, setRobo] = useState('')
    const [img, setImg] = useState('')

    const generateImage = async () => {
        try {
            const response = await fetch(`https://robohash.org/${robo}`)
            setImg(response.url)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h1>Eobohash Image Generator</h1>
            <input type="text" placeholder='Enter a random text' onChange={(e) => setRobo(e.target.value)} value={robo}/>
            <button onClick={generateImage}>Generate</button>
            <img src={img} alt="" />
        </div>
    )
}

export default Robohash