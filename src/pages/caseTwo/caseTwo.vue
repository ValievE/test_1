<template>
  <div class="wrapper">
    <div class="todo-list">
      <div
        v-for="(todo, index) in fakeDB"
        :key="index"
        class="todo-list__item"
        :class="{ 'todo-list__item_disable': !todo.isActual }"
      >
        <button class="delete-button" @click="deleteTodo(index)">X</button>
        <textarea
          v-model="todo.title"
          class="todo-title"
          name="todo-title"
          :disabled="!todo.isActual"
        >
        </textarea>
        <!-- <span class="todo-title">{{ todo.title }}</span> -->
        <span class="todo-date">{{ new Date(todo.date as number).toLocaleDateString() }}</span>
        <div class="check">
          <input
            :id="`to-do-check-${index}`"
            v-model="todo.isActual"
            class="check-input"
            type="checkbox"
          />
          <label class="check-label" :for="`to-do-check-${index}`">Актуальная задача</label>
        </div>
        <div class="text-area">
          <label class="todo-action-label" :for="`to-do-action-${index}`">Задача</label>
          <textarea
            :id="`to-do-action-${index}`"
            v-model="todo.text"
            class="todo-action"
            name="todo-action"
            :disabled="!todo.isActual"
          >
          </textarea>
        </div>
      </div>
      <div class="todo-list__item todo-list__add-item">
        <button class="add-button" @click="createTodo">+</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

type TodoData = {
  title: String
  date: Number
  isActual: Boolean
  text: String
}

const fakeDB: Array<TodoData> = reactive([
  {
    title: 'Lorem ipsum dolor sit amet',
    date: 1709998252000,
    isActual: true,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper nulla eget diam tincidunt imperdiet. Maecenas non semper ante. Donec maximus ante mauris, lacinia dictum quam vehicula in. Vivamus lobortis eleifend urna vitae porttitor. Praesent nec dapibus lorem. Sed volutpat lacus est, sit amet porttitor erat iaculis non. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus condimentum orci eget nunc tristique ultrices. Aliquam lacinia vestibulum libero, eu luctus tortor tincidunt id. Nullam luctus dapibus pellentesque.'
  },
  {
    title: 'Cras ultricies',
    date: 1714998252000,
    isActual: false,
    text: 'Cras ultricies porttitor lectus et aliquet. Phasellus hendrerit dignissim dui vel porttitor. Proin sodales ligula a arcu porttitor semper et sollicitudin magna. Nulla eu ex quis velit lacinia posuere nec id dolor. Maecenas non gravida tellus. Quisque feugiat mollis metus, vitae convallis neque vestibulum at. Vestibulum commodo interdum scelerisque. Integer maximus, neque at dictum varius, quam nisl mollis urna, nec ullamcorper neque elit egestas eros. Fusce finibus pellentesque enim, vel imperdiet turpis semper sit amet. Pellentesque facilisis est in quam varius, id pulvinar turpis consequat. Phasellus in posuere urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum venenatis nibh vel sodales.'
  },
  {
    title: 'Nam commodo',
    date: 1716998252000,
    isActual: false,
    text: 'Nam commodo viverra aliquam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam non elit maximus, ultrices libero id, gravida justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia, metus eget accumsan suscipit, massa nulla porttitor risus, ac fringilla eros mi sed nibh. Maecenas sagittis ornare urna, sit amet lobortis nisi tincidunt non. Aenean sed nibh at metus tempor cursus. Integer at pulvinar lorem. Phasellus dui elit, porta a mi sit amet, lobortis dapibus nunc. Nam urna massa, venenatis id pharetra sed, facilisis sit amet mauris. Suspendisse risus metus, dignissim vitae aliquam sed, tincidunt id ligula. Nulla efficitur, lacus scelerisque fringilla hendrerit, nunc purus feugiat nisi, sit amet efficitur turpis est at metus. Nunc viverra turpis id nibh suscipit, at pellentesque nisl pellentesque.'
  },
  {
    title: 'Nulla molestie',
    date: 1717998252000,
    isActual: true,
    text: 'Nulla molestie velit et risus congue, eget mattis est vulputate. Quisque vel augue sed odio egestas consequat ac et eros. Aliquam aliquet tellus ac nulla laoreet faucibus. Quisque molestie mi massa, non sodales nisl tristique ac. Pellentesque pharetra eget magna ac commodo. Sed a felis justo. Curabitur aliquam, massa vel tincidunt tempor, ipsum erat sollicitudin quam, nec sagittis nisi mi a quam. Vivamus vitae nunc auctor, maximus nibh tempor, vulputate enim. Donec convallis lacinia erat, et malesuada neque luctus sed. Donec porta tempus erat, in fringilla mauris. Phasellus sodales tellus tristique dui volutpat, a ullamcorper mauris consectetur. Fusce auctor porttitor ipsum sit amet laoreet. Vivamus eleifend, dolor vel rutrum commodo, tellus felis facilisis dui, a varius leo diam in elit. Sed sed elit nec diam tristique cursus.'
  }
])

const createTodo = () => {
  const emptyCard: TodoData = {
    title: 'Без названия',
    date: Date.now(),
    isActual: true,
    text: ''
  }
  fakeDB.push(emptyCard)
}

const deleteTodo = (arg: number) => {
  fakeDB.splice(arg, 1)
}
</script>

<style src="./caseTwo.css" scoped />
