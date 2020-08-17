import { counter } from './stores/counter'
import { todo } from './stores/todo'

const useStore = () => {
    return { counter, todo }
}

export default useStore