import React, { useState } from 'react'

const Robohash = () => {
    const [input, setInput] = useState('')
    const [imgToDisplay, setImgToDisplay] = useState('')

    const generateImage = async () => {
        try {
            const response = await fetch(`https://robohash.org/${input}`)
            setImgToDisplay(response.url)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
            <h1>Robohash Image Generator</h1>
            <input type="text" placeholder='Enter a random text...' value={input} onChange={(e) => setInput(e.target.value)}/>
            <button onClick={generateImage}>Generate</button>
            <img src={imgToDisplay} alt="" />
        </div>
    )
}

export default Robohash