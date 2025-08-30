<template>
  <div class="container">
    <h1>Todo List</h1>
    <form @submit.prevent="addTodo">
      <input v-model="newTodo" placeholder="Todoを入力" />
      <button type="submit">追加</button>
    </form>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <label>
          <input type="checkbox" v-model="todo.done" />
          <span :class="{ done: todo.done }">{{ todo.text }}</span>
        </label>
        <button @click="removeTodo(todo.id)">削除</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
interface Todo {
  id: number
  text: string
  done: boolean
}

const todos = useState<Todo[]>("todos", () => [])
const newTodo = ref("")

function addTodo() {
  if (!newTodo.value.trim()) return
  todos.value.push({ id: Date.now(), text: newTodo.value, done: false })
  newTodo.value = ""
}

function removeTodo(id: number) {
  todos.value = todos.value.filter((t) => t.id !== id)
}
</script>

<style scoped>
.container {
  max-width: 400px;
  margin: 0 auto;
  padding: 1rem;
}
.done {
  text-decoration: line-through;
}
</style>
