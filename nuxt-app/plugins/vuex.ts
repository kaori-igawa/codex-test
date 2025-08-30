import { createStore } from 'vuex'

interface Todo {
  id: number
  text: string
  done: boolean
}

const store = createStore({
  state: () => ({
    todos: [] as Todo[],
  }),
  mutations: {
    addTodo(state, todo: Todo) {
      state.todos.push(todo)
    },
    removeTodo(state, id: number) {
      state.todos = state.todos.filter((t) => t.id !== id)
    },
  },
})

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store)
})
