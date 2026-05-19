import React from 'react'
import { useState } from 'react'

const Toggle = (initialVal = false) => {
    const [state, setState] = useState(initialVal)
    const toggle = () => setState(next => !next);
    return [state, toggle]
}

export default Toggle