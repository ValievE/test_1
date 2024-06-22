<template>
  <div class="wrapper">
    <div class="profile">
      <div class="profile-image">
        <img
          class="profile-image__img"
          src="https://img.freepik.com/free-photo/close-up-man-smiling-nature_23-2150771111.jpg?t=st=1719042970~exp=1719046570~hmac=1f3da2be431a80216768cfeaf6cb75c2acaac6d778df39664be563c80f3068eb&w=1380"
          alt=""
        />
      </div>
      <div class="profile-info">
        <h3 class="username">Иванов Иван</h3>
        <div class="main-info">
          <span class="main-info__item">Дата рождения: 22.01.1999г.</span>
          <span class="main-info__item">Город: Барселона</span>
        </div>
        <div class="about-me">
          <span class="about-me-title">О себе</span>
          <p class="about-me__text-area">
            Биогра́фия — описание жизни человека, сделанное другими людьми или им самим
            (автобиография). Биография включает в себя не только основные факты жизни, такие как
            рождение, происхождение, образование, служба, работа, семейные отношения и смерть; она
            также изображает опыт человека во время событий его жизни. В отличие от профиля или
            автобиографии (резюме), биография представляет историю жизни субъекта, выделяя различные
            аспекты его жизни, в том числе интимные подробности, и может включать в себя анализ
            личности субъекта. Биографические произведения обычно не являются художественной
            литературой, но художественная литература также может использоваться для изображения
            жизни человека. Встречается в различных средствах массовой информации и коммуникации, от
            литературы до кино, образуют жанр, известный как биография. Биография является
            источником первичной социологической информации, позволяющей определить психологический
            тип личности в его исторической, национальной и социальной обусловленности.
          </p>
        </div>
        <div class="buttons">
          <a class="user-link" href="tel:89998887766">
            <img class="user-link__img" src="/img/icons/phone_icon.svg" alt="" />
            Позвонить
          </a>
          <a class="user-link" href="mailto:mail@mail.ru">
            <img class="user-link__img" src="/img/icons/mail_icon.svg" alt="" />
            Написать письмо
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style src="./caseOne.css" scoped />
