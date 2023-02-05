/* eslint no-param-reassign: ["error", { "props": false }] */

import { Question } from "./core/types/types";
import { questions } from "./core/data/questions";
import "./index.css";

questions.sort(
  (a, b) => a.id - a.id + Math.random() - (b.id - b.id + Math.random())
);
questions.forEach((e) => e.answers.sort(() => Math.random() - 0.5));
let questionsForGame = questions;
let answersCount = 0;
let nextBtnClicksCount = 1;
let minutes = 0;
let seconds = 0;
/* let timer: NodeJS.Timer; */
let timer: ReturnType<typeof setInterval>;

function startTimer() {
  const minute = document.getElementById("game1-minute") as HTMLElement;
  const second = document.getElementById("game1-second") as HTMLElement;
  minute.innerText = `${minutes}:`;
  seconds += 1;
  if (seconds < 9) {
    second.innerText = `0${seconds}`;
  }
  if (seconds > 9) {
    second.innerText = seconds.toString();
  }
  if (seconds > 59) {
    minutes += 1;
    minute.innerText = `${minutes} :`;
    seconds = 0;
    second.innerText = `0${seconds}`;
  }
}
function viewFinishMessage() {
  console.log("winn");
  /* const minute = document.getElementById("game1-minute") as HTMLElement;
  const second = document.getElementById("game1-second") as HTMLElement; */
  const messageText = document.getElementById(
    "game1-message-text"
  ) as HTMLElement;
  messageText.innerText = `You are completed with ${answersCount} correct answers`;
  const completeContainer = document.getElementById(
    "game1-complete"
  ) as HTMLElement;
  completeContainer.classList.add("game1-open");
  function closeCompleteMessage(): void {
    if (completeContainer.classList.contains("game1-open")) {
      document.body.addEventListener("click", (e) => {
        if (
          (<HTMLButtonElement>e.target).closest("#game1-message-close")
          // ||  !(<HTMLButtonElement>e.target).closest("#game1-message")
        ) {
          completeContainer.classList.remove("game1-open");
        }
      });
    }
  }
  closeCompleteMessage();
}

export const startGame = () => {
  /*   const startBtn = document.getElementById(
    "game1-startBtn"
  ) as HTMLButtonElement;
  const resetBtn = document.getElementById(
    "game1-resetBtn"
  ) as HTMLButtonElement;
  const mainGame = document.getElementById("game1-main-game") as HTMLElement;
  const startMessage = document.getElementById(
    "game1-start-message"
  ) as HTMLDivElement;
  const question = document.getElementById("game1-question") as HTMLElement;
  const answersBlocks = document.querySelectorAll(".game1-main__answer"); */

  document.body.addEventListener("click", (e) => {
    const startBtn = document.getElementById(
      "game1-startBtn"
    ) as HTMLButtonElement;
    const resetBtn = document.getElementById(
      "game1-resetBtn"
    ) as HTMLButtonElement;
    const mainGame = document.getElementById("game1-main-game") as HTMLElement;
    const startMessage = document.getElementById(
      "game1-start-message"
    ) as HTMLDivElement;
    const question = document.getElementById("game1-question") as HTMLElement;
    const answersBlocks = document.querySelectorAll(".game1-main__answer");
    if ((<HTMLButtonElement>e.target).id === "game1-startBtn") {
      clearInterval(timer);
      question.innerHTML = questionsForGame[0].question;
      answersBlocks.forEach((element, i) => {
        element.innerHTML = questionsForGame[0].answers[i];
        return element;
      });
      startBtn.disabled = true;
      resetBtn.disabled = false;
      mainGame.style.display = "block";
      startMessage.style.display = "none";
      timer = setInterval(startTimer, 1000);
    }
  });
};

export const clickAnswer = (): void => {
  /* const answersAll = Array.from(
    document.querySelectorAll(".game1-main__answer")
  );
  const question = document.getElementById("game1-question") as HTMLElement;
  const correctAnswers = document.getElementById(
    "game1-answers-count"
  ) as HTMLElement;
  const nextBtn = document.getElementById("game1-nextBtn") as HTMLButtonElement; */
  document.body.addEventListener("click", (e) => {
    const answersAll = Array.from(
      document.querySelectorAll(".game1-main__answer")
    );
    const question = document.getElementById("game1-question") as HTMLElement;
    const correctAnswers = document.getElementById(
      "game1-answers-count"
    ) as HTMLElement;
    const nextBtn = document.getElementById(
      "game1-nextBtn"
    ) as HTMLButtonElement;

    const questionAtNow: Question = questionsForGame.filter(
      (el) => el.question === question.innerHTML
    )[0];
    const { correct } = questionAtNow;
    const answer = e.target as HTMLElement;
    if ((<HTMLDivElement>e.target).className === "game1-main__answer") {
      clearInterval(timer);
      if (
        answer.innerHTML === correct &&
        answersAll.filter((el) => el.classList.contains("game1-correct"))
          .length === 0 &&
        answersAll.filter((el) => el.classList.contains("game1-incorrect"))
          .length === 0
      ) {
        answer.classList.add("game1-correct");
        answersCount += 1;
        correctAnswers.innerHTML = `Correct answers: ${answersCount}`;
        nextBtn.disabled = false;
      } else if (answer.innerHTML !== correct) {
        answersAll
          .filter((el) => el.innerHTML !== correct)
          .forEach((el) => el.classList.add("game1-incorrect"));
        answersAll
          .filter((el) => el.innerHTML === correct)[0]
          .classList.add("game1-correct");
        nextBtn.disabled = false;
      }
      if (
        nextBtnClicksCount === 15 &&
        answersAll.filter((el) => el.classList.contains("game1-correct"))
          .length > 0
      ) {
        nextBtn.disabled = true;
        viewFinishMessage();
      }
    }
  });
};

export const clickNext = (): void => {
  /* const question = document.getElementById("game1-question") as HTMLElement;
  const answersBlocks = document.querySelectorAll(
    ".game1-main__answer"
  ) as NodeListOf<Element>;
  const nextBtn = document.getElementById("game1-nextBtn") as HTMLButtonElement; */

  document.body.addEventListener("click", (e) => {
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
      question.innerHTML = questionsForGame[nextBtnClicksCount].question;
      answersBlocks.forEach((element, i) => {
        element.innerHTML = questionsForGame[nextBtnClicksCount].answers[i];
        return element;
      });
      console.log(nextBtnClicksCount);
      nextBtnClicksCount += 1;

      nextBtn.disabled = true;
      timer = setInterval(startTimer, 1000);
    }
  });
};

export const startAgain = (): void => {
  document.body.addEventListener("click", (e) => {
    const question = document.getElementById("game1-question") as HTMLElement;
    const answersBlocks = document.querySelectorAll(
      ".game1-main__answer"
    ) as NodeListOf<Element>;
    const correctAnswers = document.getElementById(
      "game1-answers-count"
    ) as HTMLElement;
    if ((<HTMLButtonElement>e.target).id === "game1-resetBtn") {
      questions.sort(
        (a, b) => a.id - a.id + Math.random() - (b.id - b.id + Math.random())
      );
      questions.forEach((el) => el.answers.sort(() => Math.random() - 0.5));
      questionsForGame = questions.slice(0, 15);
      answersCount = 0;
      nextBtnClicksCount = 1;
      question.innerHTML = questionsForGame[0].question;
      answersBlocks.forEach((element, i) => {
        element.classList.remove("game1-correct");
        element.classList.remove("game1-incorrect");
        element.innerHTML = questionsForGame[0].answers[i];
      });
      correctAnswers.innerHTML = `Correct answers: ${answersCount}`;
      clearInterval(timer);
      minutes = 0;
      seconds = 0;
      timer = setInterval(startTimer, 1000);
    }
  });
};

export const gameAllfunc = () => {
  startGame();
  clickAnswer();
  clickNext();
  startAgain();
};

export function game1() {
  const main = document.querySelector(".main") as HTMLElement;
  main.innerHTML = "";
  clearInterval(timer);
  minutes = 0;
  seconds = 0;
  const page = `<div class="game1-main__container _game1-container">
  <h1 class="game1-main__title">Conversion types-game</h1>
  <div class="game1-main__settings">
    <div class="game1-main__timer game1-timer">
      <div class="game1-timer__text">Time:</div>
      <div id="game1-minute" class="game1-timer__minutes"></div>
      <div id="game1-second" class="game1-timer__seconds"></div>
    </div>
    <div class="game1-main__buttons">
      <button id="game1-startBtn" class="game1-main__start-button game1-button">Start</button>
      <button id="game1-resetBtn" class="game1-main__reset-button game1-button" disabled="true">
      Start again
      </button>
    </div>
    <div id="game1-answers-count" class="game1-main__answers-count">Correct answers: 0 </div>
  </div>
  <h2 id="game1-start-message" class="game1-main__start-message">To play the game press Start</h2>
  <div id="game1-main-game" class="game1-main__body">
    <div id="game1-question" class="game1-main__question"></div>
    <div class="game1-main__answers-block">
      <div class="game1-main__answer"></div>
      <div class="game1-main__answer"></div>
      <div class="game1-main__answer"></div>
      <div class="game1-main__answer"></div>
    </div>
    <button id="game1-nextBtn" class="game1-main__next-button game1-button" disabled="true">
      Next
    </button>
    <div id="game1-complete" class="game1-main__complete">
      <div id="game1-message" class="game1-main__complete-message">
        <div id="game1-message-text" class="game1-main__complete-text"></div>
        <div id="game1-message-close" class="game1-main__complete-close">
        <?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg fill="orange" height="30px" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="30px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"/></svg>
        </div>
      </div>
    </div>
  </div>
</div>`;

  const body = document.createElement("div");
  body.classList.add("game1-wrapper");
  body.innerHTML = page;
  main.appendChild(body);
  /* gameAllfunc(); */
  /* setTimeout(() => {
    gameAllfunc();
  }, 100); */
}
