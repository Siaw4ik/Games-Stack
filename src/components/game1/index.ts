/* eslint no-param-reassign: ["error", { "props": false }] */

import { Question } from "./core/types/types";
import { questions } from "./core/data/questions";
import "./index.css";

import { sendScore } from "../results/sendScore";
import { returnLocalStorage } from "../module/localStorage";
import { gamesData } from "../gamesInfo/gamesData";
import correctAudio from "../../assets/sounds/correctAnswer.mp3";
import incorrectAudio from "../../assets/sounds/incorrectAnswer.mp3";
import backAudio from "../../assets/sounds/back-game5-starwars.mp3";
import failAudio from "../../assets/sounds/failAudio-starwars.mp3";
import successAudio from "../../assets/sounds/final-game5-starwars.mp3";

const settingsLoadPage = returnLocalStorage();

const game1BackAudio = new Audio(backAudio);
const game1FinalFailAudio = new Audio(failAudio);
const game1FinalSuccessAudio = new Audio(successAudio);
const game1CorrectAudio = new Audio(correctAudio);
const game1InCorrectAudio = new Audio(incorrectAudio);

export function changeGame1AudioVolume(mode: boolean) {
  if (mode === true) {
    game1CorrectAudio.volume = 0.4;
    game1InCorrectAudio.volume = 0.4;
    game1BackAudio.volume = 0.6;
    game1FinalFailAudio.volume = 0.5;
    game1FinalSuccessAudio.volume = 0.5;
  } else if (mode === false) {
    game1CorrectAudio.volume = 0;
    game1InCorrectAudio.volume = 0;
    game1BackAudio.volume = 0;
    game1FinalFailAudio.volume = 0;
    game1FinalSuccessAudio.volume = 0;
  }
}

if (settingsLoadPage.volume === true) {
  changeGame1AudioVolume(true);
} else if (settingsLoadPage.volume === false) {
  changeGame1AudioVolume(false);
}

questions.sort(
  (a, b) => a.id - a.id + Math.random() - (b.id - b.id + Math.random())
);
questions.forEach((e) => e.answers.sort(() => Math.random() - 0.5));
let questionsForGame = questions;
let answersCount = 0;
let questionsAnsweredCount = 0;
let seconds = 60;
let timer: ReturnType<typeof setInterval>;

function viewFinishMessage() {
  const settings = returnLocalStorage();
  const question = document.getElementById("game1-question") as HTMLElement;
  const answersBlock = document.querySelector(
    ".game1-main__answers-block"
  ) as HTMLElement;
  const nextBtn = document.getElementById("game1-nextBtn") as HTMLButtonElement;
  const messageText = document.getElementById(
    "game1-message-text"
  ) as HTMLElement;

  if (answersCount > 3) {
    game1BackAudio.pause();
    game1FinalSuccessAudio.play();
    game1FinalSuccessAudio.currentTime = 0;
  } else if (answersCount < 3) {
    game1BackAudio.pause();
    game1FinalFailAudio.play();
    game1FinalFailAudio.currentTime = 0;
  }

  messageText.innerText = `${
    settings.lang === "en"
      ? `You are completed with ${answersCount} correct answers.\nTo try again press Start again`
      : `Вы получили ${answersCount} правильных ответов.\n Чтобы повторить попытку, снова нажмите Пуск.`
  }`;
  const completeContainer = document.getElementById(
    "game1-complete"
  ) as HTMLElement;
  question.classList.add("game1-close");
  answersBlock.classList.add("game1-close");
  nextBtn.classList.add("game1-close");
  completeContainer.classList.add("game1-open");
  sendScore("Jedi's Mind", answersCount);
}

function startTimer() {
  const mainContainer = document.querySelector(
    ".game1-main__container"
  ) as HTMLElement;
  if (mainContainer) {
    const second = document.getElementById("game1-second") as HTMLElement;
    seconds -= 1;
    if (seconds < 9) {
      second.innerText = `0${seconds}`;
    }
    if (seconds > 9) {
      second.innerText = seconds.toString();
    }
    if (second.innerText === "00") {
      const answersAll = Array.from(
        document.querySelectorAll(".game1-main__answer")
      );
      const question = document.getElementById("game1-question") as HTMLElement;
      const questionAtNow: Question = questionsForGame.filter(
        (el) => el.question === question.innerHTML
      )[0];
      const { correct } = questionAtNow;
      const nextBtn = document.getElementById(
        "game1-nextBtn"
      ) as HTMLButtonElement;
      answersAll
        .filter((el) => el.innerHTML !== correct)
        .forEach((el) => el.classList.add("game1-incorrect"));
      answersAll
        .filter((el) => el.innerHTML === correct)[0]
        .classList.add("game1-correct");
      clearInterval(timer);
      nextBtn.disabled = true;
      viewFinishMessage();
    }
  }
}

function clickAnswer() {
  const game1AnswerBlock = document.querySelector(
    ".game1-main__answers-block"
  ) as HTMLElement;
  game1AnswerBlock.addEventListener("click", (event) => {
    const answersAll = Array.from(
      document.querySelectorAll(".game1-main__answer")
    );
    const question = document.getElementById("game1-question") as HTMLElement;
    const correctAnswers = document.querySelector(
      ".game1-main__answers-count-number"
    ) as HTMLElement;
    const nextBtn = document.getElementById(
      "game1-nextBtn"
    ) as HTMLButtonElement;
    const questionAtNow: Question = questionsForGame.filter(
      (el) => el.question === question.innerHTML
    )[0];
    const { correct } = questionAtNow;
    const answer = event.target as HTMLElement;
    function checkAnswerAllArray() {
      answersAll
        .filter((el) => el.innerHTML !== correct)
        .forEach((el) => el.classList.add("game1-incorrect"));
      answersAll
        .filter((el) => el.innerHTML === correct)[0]
        .classList.add("game1-correct");
    }
    if (answer.className === "game1-main__answer") {
      console.log("click");
      questionsAnsweredCount += 1;
      if (
        answer.innerHTML === correct &&
        answersAll.filter((el) => el.classList.contains("game1-correct"))
          .length === 0 &&
        answersAll.filter((el) => el.classList.contains("game1-incorrect"))
          .length === 0 &&
        questionsAnsweredCount !== questionsForGame.length
      ) {
        answersCount += 1;
        correctAnswers.innerHTML = String(answersCount);
        question.innerHTML = questionsForGame[questionsAnsweredCount].question;
        answersAll.forEach((element, i) => {
          element.innerHTML =
            questionsForGame[questionsAnsweredCount].answers[i];
        });
        game1CorrectAudio.play();
      } else if (
        answer.innerHTML !== correct &&
        questionsAnsweredCount !== questionsForGame.length
      ) {
        checkAnswerAllArray();
        nextBtn.disabled = false;
        game1InCorrectAudio.play();
      }
      if (
        answer.innerHTML === correct &&
        answersAll.filter((el) => el.classList.contains("game1-correct"))
          .length === 0 &&
        answersAll.filter((el) => el.classList.contains("game1-incorrect"))
          .length === 0 &&
        questionsAnsweredCount === questionsForGame.length
      ) {
        answersCount += 1;
        checkAnswerAllArray();
        clearInterval(timer);
        correctAnswers.innerHTML = String(answersCount);
        viewFinishMessage();
      } else if (
        answer.innerHTML !== correct &&
        questionsAnsweredCount === questionsForGame.length
      ) {
        checkAnswerAllArray();
        nextBtn.disabled = true;
        clearInterval(timer);
        viewFinishMessage();
      }
    }
  });
}

export const clickNext = (): void => {
  const main = document.querySelector(".main") as HTMLElement;
  main.addEventListener("click", (e) => {
    const question = document.getElementById("game1-question") as HTMLElement;
    const answersBlocks = document.querySelectorAll(
      ".game1-main__answer"
    ) as NodeListOf<Element>;
    const nextBtn = document.getElementById(
      "game1-nextBtn"
    ) as HTMLButtonElement;
    if ((<HTMLButtonElement>e.target).id === "game1-nextBtn") {
      answersBlocks.forEach((el) => {
        el.classList.remove("game1-correct");
        el.classList.remove("game1-incorrect");
      });
      question.innerHTML = questionsForGame[questionsAnsweredCount].question;
      answersBlocks.forEach((element, i) => {
        element.innerHTML = questionsForGame[questionsAnsweredCount].answers[i];
      });
      nextBtn.disabled = true;
    }
  });
};

export const startAgain = (): void => {
  const main = document.querySelector(".main") as HTMLElement;
  main.addEventListener("click", (e) => {
    const question = document.getElementById("game1-question") as HTMLElement;
    const answersBlock = document.querySelector(
      ".game1-main__answers-block"
    ) as HTMLElement;
    const nextBtn = document.getElementById(
      "game1-nextBtn"
    ) as HTMLButtonElement;
    const completeContainer = document.getElementById(
      "game1-complete"
    ) as HTMLElement;
    const answersBlocks = document.querySelectorAll(
      ".game1-main__answer"
    ) as NodeListOf<Element>;
    const correctAnswers = document.querySelector(
      ".game1-main__answers-count-number"
    ) as HTMLElement;
    if ((<HTMLButtonElement>e.target).id === "game1-resetBtn") {
      game1BackAudio.play();
      game1BackAudio.currentTime = 0;
      game1FinalFailAudio.pause();
      game1FinalSuccessAudio.pause();
      questions.sort(
        (a, b) => a.id - a.id + Math.random() - (b.id - b.id + Math.random())
      );
      questions.forEach((el) => el.answers.sort(() => Math.random() - 0.5));
      questionsForGame = questions;
      answersCount = 0;
      questionsAnsweredCount = 0;
      question.classList.remove("game1-close");
      answersBlock.classList.remove("game1-close");
      nextBtn.classList.remove("game1-close");
      completeContainer.classList.remove("game1-open");
      question.innerHTML = questionsForGame[0].question;
      answersBlocks.forEach((element, i) => {
        element.classList.remove("game1-correct");
        element.classList.remove("game1-incorrect");
        element.innerHTML = questionsForGame[0].answers[i];
      });
      correctAnswers.innerHTML = String(answersCount);
      clearInterval(timer);
      seconds = 60;
      timer = setInterval(startTimer, 1000);
    }
  });
};

export const startGame = () => {
  const main = document.querySelector(".main") as HTMLElement;
  main.addEventListener("click", (e) => {
    const startBtn = document.getElementById(
      "game1-startBtn"
    ) as HTMLButtonElement;
    const resetBtn = document.getElementById(
      "game1-resetBtn"
    ) as HTMLButtonElement;
    const mainGame = document.getElementById("game1-main-game") as HTMLElement;
    const question = document.getElementById("game1-question") as HTMLElement;
    const answersBlocks = document.querySelectorAll(".game1-main__answer");
    if ((<HTMLButtonElement>e.target).id === "game1-startBtn") {
      game1BackAudio.loop = true;
      game1BackAudio.play();
      game1BackAudio.currentTime = 0;

      questions.sort(
        (a, b) => a.id - a.id + Math.random() - (b.id - b.id + Math.random())
      );
      questions.forEach((el) => el.answers.sort(() => Math.random() - 0.5));
      questionsForGame = questions;
      answersCount = 0;
      questionsAnsweredCount = 0;
      clearInterval(timer);
      question.innerHTML = questionsForGame[0].question;
      answersBlocks.forEach((element, i) => {
        element.innerHTML = questionsForGame[0].answers[i];
      });
      startBtn.disabled = true;
      resetBtn.disabled = false;
      mainGame.style.display = "block";
      timer = setInterval(startTimer, 1000);
    }
  });
};

function startGameMind() {
  const settings = returnLocalStorage();
  const wrapper = document.querySelector(".game1-wrapper") as HTMLElement;
  wrapper.innerHTML = "";
  wrapper.classList.add("game1-start");
  clearInterval(timer);
  seconds = 60;
  wrapper.innerHTML = `<div class="game1-main__container _game1-container">
  <h2 class="game1-main__title">Jedi's Mind</h2>
  <div class="game1-main__settings">
    <div class="game1-main__timer game1-timer">
      <div class="game1-timer__text">${
        settings.lang === "en" ? "Time:  " : "Время:  "
      }</div>
      <div id="game1-minute" class="game1-timer__minutes"></div>
      <div id="game1-second" class="game1-timer__seconds"> 60</div>
    </div>
    <div class="game1-main__buttons">
      <button id="game1-startBtn" class="game1-main__start-button game1-button">${
        settings.lang === "en" ? "Start" : "Начать"
      }</button>
      <button id="game1-resetBtn" class="game1-main__reset-button game1-button" disabled="true">
      ${settings.lang === "en" ? "Start again" : "Начать заново"}
      </button>
    </div>
    <div id="game1-answers-count" class="game1-main__answers-count"><span class="game1-main__answers-count-title">${
      settings.lang === "en" ? "Correct answers: " : "Правильные ответы: "
    }</span><span class="game1-main__answers-count-number"> 0</span></div>
  </div>
  <div id="game1-main-game" class="game1-main__body">
    <div id="game1-question" class="game1-main__question"></div>
    <div class="game1-main__answers-block">
      <div class="game1-main__answer"></div>
      <div class="game1-main__answer"></div>
      <div class="game1-main__answer"></div>
      <div class="game1-main__answer"></div>
    </div>
    <button id="game1-nextBtn" class="game1-main__next-button game1-button" disabled="true">
    ${settings.lang === "en" ? "Next" : "Следующий"}
    </button>
    <div id="game1-complete" class="game1-main__complete">
      <div id="game1-message" class="game1-main__complete-message">
        <div id="game1-message-text" class="game1-main__complete-text"></div>
      </div>
    </div>
  </div>
</div>`;

  window.addEventListener("hashchange", () => {
    if (window.location.href !== "#game5") {
      game1BackAudio.pause();
      game1FinalFailAudio.pause();
      game1FinalSuccessAudio.pause();
    }
  });

  startGame();
  clickAnswer();
  clickNext();
  startAgain();
}

export function game1() {
  const settings = returnLocalStorage();
  const main = document.querySelector(".main") as HTMLElement;
  main.innerHTML = "";
  const divWrapper = document.createElement("div");
  divWrapper.classList.add("game1-wrapper");
  divWrapper.innerHTML = `
  <h2>Jedi's Mind</h2>
  <p class="game1-wrapper_info">${
    settings.lang === "en"
      ? gamesData.en[0].description
      : gamesData.ru[0].description
  }</p>
  <div class="game1-wrapper_button"><span>${
    settings.lang === "en" ? "Start Game" : "Начать Игру"
  }</span></div>`;
  main.appendChild(divWrapper);

  const startBtn = document.querySelector(
    ".game1-wrapper_button"
  ) as HTMLElement;
  if (startBtn) {
    startBtn.addEventListener("click", () => {
      startGameMind();
    });
  }
}

export function translateGame1(lang: string) {
  const description = document.querySelector(
    ".game1-wrapper_info"
  ) as HTMLElement;
  const startBtn = document.querySelector(
    ".game1-wrapper_button"
  ) as HTMLElement;

  const game1Timer = document.querySelector(
    ".game1-timer__text"
  ) as HTMLElement;
  const startBtnCont = document.querySelector(
    ".game1-main__buttons #game1-startBtn"
  ) as HTMLElement;
  const againBtnCont = document.querySelector(
    ".game1-main__buttons #game1-resetBtn"
  ) as HTMLElement;
  const nextBtn = document.querySelector(
    ".game1-main__next-button.game1-button"
  ) as HTMLElement;
  const messageText = document.getElementById(
    "game1-message-text"
  ) as HTMLElement;
  const titleCorrectAnswer = document.querySelector(
    ".game1-main__answers-count-title"
  ) as HTMLElement;

  if (startBtn && description) {
    startBtn.innerHTML = `${lang === "en" ? "Start Game" : "Начать Игру"}`;
    description.innerHTML = `${
      lang === "en" ? gamesData.en[0].description : gamesData.ru[0].description
    }`;
  }

  if (
    game1Timer &&
    startBtnCont &&
    againBtnCont &&
    nextBtn &&
    messageText &&
    titleCorrectAnswer
  ) {
    game1Timer.innerHTML = `${lang === "en" ? "Time: " : "Время: "}`;
    startBtnCont.innerHTML = `${lang === "en" ? "Start" : "Начать"}`;
    againBtnCont.innerHTML = `${
      lang === "en" ? "Start again" : "Начать заново"
    }`;
    nextBtn.innerHTML = `${lang === "en" ? "Next" : "Следующий"}`;
    messageText.innerText = `${
      lang === "en"
        ? `You are completed with ${answersCount} correct answers.\nTo try again press Start again`
        : `Вы получили ${answersCount} правильных ответов.\n Чтобы повторить попытку, снова нажмите Пуск.`
    }`;
    titleCorrectAnswer.innerText = `${
      lang === "en" ? "Correct answers: " : "Правильные ответы:"
    }`;
  }
}
