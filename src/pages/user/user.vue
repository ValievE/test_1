<template>
  <div class="wrapper">
    <div class="profile">
      <h2 class="profile-title">Профиль пользователя: {{ userData.username }}</h2>
      <div class="text-line">
        <span class="title">Имя пользователя:</span>
        <div class="line"></div>
        <span class="value" :class="{ value_loading: !userData.name }">{{ userData.name }}</span>
      </div>
      <div class="text-line">
        <span class="title">Телефон:</span>
        <div class="line"></div>
        <span class="value" :class="{ value_loading: !userData.name }">{{ userData.phone }}</span>
      </div>
      <div class="text-line">
        <span class="title">Сайт:</span>
        <div class="line"></div>
        <span class="value" :class="{ value_loading: !userData.name }">{{ userData.website }}</span>
      </div>
      <p class="subtitle">Адрес</p>
      <div class="text-line">
        <span class="title">Город:</span>
        <div class="line"></div>
        <span class="value" :class="{ value_loading: !userData.name }">{{
          userData.address.city
        }}</span>
      </div>
      <div class="text-line">
        <span class="title">Улица:</span>
        <div class="line"></div>
        <span class="value" :class="{ value_loading: !userData.name }">{{
          userData.address.street
        }}</span>
      </div>
      <div class="text-line">
        <span class="title">Апартаменты:</span>
        <div class="line"></div>
        <span class="value" :class="{ value_loading: !userData.name }">{{
          userData.address.suite
        }}</span>
      </div>
      <div class="text-line">
        <span class="title">Индекс:</span>
        <div class="line"></div>
        <span class="value" :class="{ value_loading: !userData.name }">{{
          userData.address.zipcode
        }}</span>
      </div>
      <div class="text-line">
        <span class="title">Координаты:</span>
        <div class="line"></div>
        <span class="value" :class="{ value_loading: !userData.name }">{{
          userData.name ? `${userData.address.geo.lat}, ${userData.address.geo.lng}` : ''
        }}</span>
      </div>
      <p class="subtitle">Работа</p>
      <div class="text-line">
        <span class="title">Компания:</span>
        <div class="line"></div>
        <span class="value" :class="{ value_loading: !userData.name }">{{
          userData.company.name
        }}</span>
      </div>
      <div class="text-line">
        <span class="title">Деятельность:</span>
        <div class="line"></div>
        <span class="value" :class="{ value_loading: !userData.name }">{{
          userData.company.catchPhrase
        }}</span>
      </div>
      <div class="text-line">
        <span class="title">Подразделение:</span>
        <div class="line"></div>
        <span class="value" :class="{ value_loading: !userData.name }">{{
          userData.company.bs
        }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

type UserGeo = {
  lat: Number | null
  lng: Number | null
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
  id: Number | null
  name: String
  username: String
  address: UserAdress
  phone: String
  website: String
  company: UserCompany
}

const userData = ref<User>({
  id: null,
  name: '',
  username: '',
  address: {
    street: '',
    suite: '',
    city: '',
    zipcode: '',
    geo: {
      lat: null,
      lng: null
    }
  },
  phone: '',
  website: '',
  company: {
    name: '',
    catchPhrase: '',
    bs: ''
  }
})

onMounted(() => {
  const userId = route.params.id

  const getData = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((data) =>
        data.json().then((newData) => {
          userData.value = newData
        })
      )
      .catch((error) => {
        console.error(error)
      })
  }

  getData()
})
</script>

<style src="./user.css" scoped />
