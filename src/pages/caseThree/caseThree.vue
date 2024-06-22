<template>
  <div class="wrapper">
    <div class="users-list">
      <h1 class="users-list-title">Список пользователей</h1>
      <button
        v-if="!usersData?.length"
        class="load-button"
        @click="getData(), (isLoaderActive = true)"
      >
        Загрузить список
      </button>
      <div v-if="!usersData?.length && isLoaderActive" class="loader">
        <div class="loader__item"></div>
      </div>
      <router-link
        v-for="(item, index) in usersData"
        :key="index"
        :to="{ name: 'user', params: { id: item.id as number } }"
        class="user"
        >{{ `${item.id}. ${item.name}` }}
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

type UserGeo = {
  lat: Number
  lng: Number
}

type UserAdress = {
  street: String
  suite: String
  city: String
  zipcode: String
  geo: UserGeo
}

type UserCompany = {
  name: String
  catchPhrase: String
  bs: String
}

type User = {
  id: Number
  name: String
  username: String
  address: UserAdress
  phone: String
  website: String
  company: UserCompany
}

const usersData = ref<Array<User>>()

const isLoaderActive = ref<boolean>(false)

const getData = () => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((data) =>
      data.json().then((newData) => {
        usersData.value = newData
      })
    )
    .catch((error) => {
      console.error(error)
    })
}
</script>

<style src="./caseThree.css" scoped />
