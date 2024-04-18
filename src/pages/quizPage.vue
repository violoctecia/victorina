<script setup>
import { ref, watch } from "vue";
import { quizData } from "@/quizData.js";

quizData.value = shuffleArray(quizData.value);
const currentQuestionIndex = ref(0);
const selectedAnswer = ref(null);
let transitionTimer = null;
let remainingTime = ref(0);
const maxQuestions = quizData.value.length;
let correctAnswersCount = ref(0);
let showResult = ref(false);

const nextQuestion = (selectedOptionIndex) => {
  const correctAnswerIndex =
    quizData.value[currentQuestionIndex.value].correctAnswerIndex;

  if (selectedOptionIndex === correctAnswerIndex) {
    selectedAnswer.value = selectedOptionIndex;
    correctAnswersCount.value++;
  } else {
    selectedAnswer.value = selectedOptionIndex + 8;
  }

  clearTimeout(transitionTimer);

  if (currentQuestionIndex.value !== maxQuestions - 1) {
    transitionTimer = setTimeout(() => {
      selectedAnswer.value = null;
      currentQuestionIndex.value++;
      remainingTime.value = 0;
    }, 7000);
    remainingTime.value = 7;
  }
};

const handleNextClick = () => {
  if (remainingTime.value > 0) {
    clearTimeout(transitionTimer);
    remainingTime.value = 0;
    selectedAnswer.value = null;
  } else {
    if (currentQuestionIndex.value < maxQuestions - 1) {
      currentQuestionIndex.value++;
    } else {
      showResult.value = true;
    }
  }
};

watch(remainingTime, (newVal) => {
  if (newVal === 0) {
    clearTimeout(transitionTimer);
    currentQuestionIndex.value++;
    selectedAnswer.value = null;
  }
});

setInterval(() => {
  remainingTime.value--;
}, 1000);

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
</script>

<template>
  <div class="card" v-if="!showResult">
    <span>{{ currentQuestionIndex + 1 }} из {{ maxQuestions }}</span>
    <h1 class="word">{{ quizData[currentQuestionIndex].question }}</h1>
    <div class="answer_wrapper">
      <div class="answer" v-if="selectedAnswer !== null">
        <p
          v-if="
            selectedAnswer === quizData[currentQuestionIndex].correctAnswerIndex
          "
          class="true"
        >
          Верно!
        </p>
        <p v-else class="false">Не верно</p>
        <p>{{ quizData[currentQuestionIndex].description }}</p>
        <span v-if="currentQuestionIndex !== maxQuestions - 1"
          >Следующий вопрос через: {{ remainingTime }} сек</span
        >
      </div>
    </div>

    <div class="buttons">
      <button
        v-for="(option, index) in quizData[currentQuestionIndex].options"
        :key="index"
        :class="{
          selected: selectedAnswer === index,
          wrong: selectedAnswer === index + 8,
          disabled: selectedAnswer !== null,
          correct:
            selectedAnswer !== null &&
            index === quizData[currentQuestionIndex].correctAnswerIndex,
        }"
        @click="nextQuestion(index)"
      >
        {{ option }}
      </button>
    </div>

    <button
      v-if="
        selectedAnswer !== null && currentQuestionIndex !== maxQuestions - 1
      "
      @click="handleNextClick"
      class="next"
    >
      Следующий вопрос
    </button>
    <button
      v-if="
        showResult ||
        (selectedAnswer !== null && currentQuestionIndex === maxQuestions - 1)
      "
      @click="handleNextClick"
      class="next"
    >
      Перейти к результатам
    </button>
  </div>
  <p class="result" v-else>
    У вас {{ correctAnswersCount }} правильных ответов из {{ maxQuestions }}
  </p>
</template>

<style>
.result {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;
  padding: 0 15px;
  color: black;
}
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 15px;

  span {
    opacity: 70%;
    margin-bottom: 20px;
    font-size: 12px;
    color: black;
  }
}

.word {
  font-size: 22px;
  line-height: normal;
  text-align: center;
  color: black;
  width: 100%;
  font-weight: 500;
}
.answer_wrapper {
  padding-bottom: 15px;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 180px;
}
.answer {
  padding-top: 25px;
  font-size: 12px;
  width: 100%;
  text-align: center;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  p {
    font-size: 14px;
    line-height: normal;
    text-align: center;
  }

  span {
    opacity: 70%;
    text-align: center;
    margin-bottom: 25px;
  }
}
.true {
  color: #26eb1c;
}
.false {
  color: red;
}
.buttons button.disabled {
  cursor: not-allowed;
  pointer-events: none;
  opacity: 70%;
  transition: opacity 0.3s ease;
}
.buttons button.selected {
  border: 3px solid #26eb1c;
  opacity: 1;
}
.buttons button.correct {
  border: 3px solid #26eb1c;
}
.buttons button.wrong {
  border: 3px solid red;
  opacity: 1;
}

.buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-bottom: 50px;
  button {
    width: 45%;
    border-radius: 6px;
    border: 3px solid rgba(0, 0, 0, 0);
    text-decoration: none;
    color: white;
    cursor: pointer;
    background: rgba(0, 0, 0, 0.715);
    padding: 5px 25px;
  }
}
.buttons button:hover {
  background: rgba(0, 0, 0, 0.915);
}

.next {
  font-size: 12px;
  border-radius: 6px;
  border: 2px solid rgba(0, 0, 0, 0);
  text-decoration: none;
  color: white;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.767);
  padding: 5px 20px;
}
.next:hover {
  background: rgba(0, 0, 0, 0.915);
}
</style>
