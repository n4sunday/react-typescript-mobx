import React from 'react'
import { useObserver } from 'mobx-react'
import useStore from '../useStore'

const Counter = () => {
    const { counter } = useStore()

    const increase = () => {
        counter.increate()
    }

    const decrease = () => {
        counter.decrease()
    }

    return useObserver(() => (
        <div>
            <h3>Couter: {counter.number}</h3>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
        </div>
    ))
}

export default Counter