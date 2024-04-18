<template>
  <div class="quiz_wrapper">
    <h1>Пройдите викторину</h1>
    <router-link class="button" :to="{ name: 'quiz' }">Начать тест</router-link>
  </div>
</template>

<style>
.quiz_wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 100px;

  h1 {
    color: black;
  }
}

.button {
  border-radius: 8px;
  text-decoration: none;
  color: white;
  cursor: pointer;
  background: black;
  padding: 5px 25px;
}
.button:hover {
    background: rgba(0, 0, 0, 0.715);
  }
</style>
