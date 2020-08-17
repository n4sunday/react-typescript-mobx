import React, { useState } from 'react'
import { useObserver } from 'mobx-react'
import useStore from '../useStore'

const Todo = () => {
    const { todo } = useStore()

    const [list, setList] = useState('')

    const addList = () => {
        todo.add(list)
        setList('')
    }

    const deleteList = (id: number) => () => {
        todo.delete(id)
    }

    const updateList = (id: number) => () => {
        todo.update(id, list)
        setList('')
    }


    return useObserver(() => (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Input List: {list}</label>
                    <input type="text" value={list} onChange={(e) => setList(e.target.value)} />
                </div>
                <button className="ui primary button" onClick={addList}>Add</button>
            </div>
            <h3>List</h3>
            {todo.list.map((item: string, index: number) => (
                <div key={index}>{item}
                    <button className="ui red button" onClick={deleteList(index)}>delete</button>
                    <button className="ui button" onClick={updateList(index)}>update</button>
                </div>
            ))}
        </div>
    ))
}

export default Todo