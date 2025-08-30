import { defineStore } from 'pinia'

export interface Todo {
  id: number
  text: string
  done: boolean
}

export const useTodosStore = defineStore('todos', {
  state: () => ({
    todos: [] as Todo[],
  }),
  actions: {
    addTodo(todo: Todo) {
      this.todos.push(todo)
    },
    removeTodo(id: number) {
      this.todos = this.todos.filter((t) => t.id !== id)
    },
  },
})

