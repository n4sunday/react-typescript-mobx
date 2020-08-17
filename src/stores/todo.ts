import { observable } from 'mobx'

const todo = observable({
    list: ["test1", "test2", "test3"] as string[],
    add(payload: string) {
        this.list = [...this.list, payload]
    },
    delete(id: number) {
        this.list = this.list.filter((item, index) => index !== id)
    },
    update(id: number, payload: string) {
        this.list = this.list.map((item, index) => {
            if (index === id) {
                return item = payload
            }
            else {
                return item
            }
        })
    }
})
export { todo }