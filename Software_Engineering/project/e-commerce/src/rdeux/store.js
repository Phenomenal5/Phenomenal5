import { createStore } from 'redux'
import { cartRducer } from './reducer'

const store = createStore(cartRducer)