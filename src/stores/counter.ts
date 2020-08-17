import { observable } from 'mobx'

const counter = observable({
    number: 1,
    increate() {
        this.number++
    },
    decrease() {
        this.number--
    }
})

export { counter }