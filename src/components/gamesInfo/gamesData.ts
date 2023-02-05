/* eslint-disable prettier/prettier */
import picture1 from "../../assets/game1_picture.png"
import picture2 from "../../assets/game2_picture.png"
import picture3 from "../../assets/game3_picture.png"
import picture4 from "../../assets/game4_picture.png"

export const gamesData = {
  "ru": [
    {
      id: "game1",
      name: "Преобразование типов",
      description:
        "В данной игре Вам предоставляется возможность проверить свои знания в преобразовании типов данных языка JavaScript, а также посоревноваться в этом с другими игроками.",
      rules:
        "Правила игры: Вам необходимио за 60 секунд ответить верно на как можно большее количество вопросов, каждый правильный ответ дает вам 1 балл.",
      pictureUrl: `${picture1}`,
      button: "Играть",
    },
    {
      id: "game2",
      name: "Динозаврик",
      description:
        "В данной игре вам предоставляется возможность проявить ловкость своих пальцев и быстроту реакции. Вам необходимио помочь Дино в его любимом занятии - беге с препятствиями, при подготовке к Мировому чемпионату по этой дисциплине.",
      rules:
        "Правила игры: Вам необходимио избегать столкновений с препятствиями, каждое пройденное препятствие вознаграждается набранными баллами, больше баллов - гарантия отличной подготовки Дино к Мировому первенству, а также меньше травм для нашего претендента на пьедестал.",
      pictureUrl: `${picture2}`,
      button: "Играть",
    },
    {
      id: "game3",
      name: "Игра 3",
      description:
        "В данной игре Вам предоставляется возможность проявить ловкость своих пальцев и быстроту реакции.",
      rules:
        "Правила игры: Вам необходимио играть, чтобы просто играть и наслаждаться игрой.",
      pictureUrl: `${picture3}`,
      button: "Играть",
    },
    {
      id: "game4",
      name: "Игра 4",
      description:
        "В данной игре Вам предоставляется возможность проявить ловкость своих пальцев и быстроту реакции.",
      rules:
        "Правила игры: Вам необходимио играть, чтобы просто играть и наслаждаться игрой.",
      pictureUrl: `${picture4}`,
      button: "Играть",
    },
  ],
  "en": [
    {
      id: "game1",
      name: "Conversion Types",
      description:
        "In this game, you have the opportunity to test your knowledge in converting JavaScript data types, as well as compete with other players in this.",
      rules:
        "Game rules: You need to answer as many questions correctly as possible in 60 seconds, each correct answer gives you 1 point.",
      pictureUrl: `${picture1}`,
      button: "Play",
    },
    {
      id: "game2",
      name: "Dino",
      description:
        "In this game, you are given the opportunity to show the dexterity of your fingers and quick reaction. You need to help Dino in his favorite pastime - steeplechase, in preparation for the World Championship in this discipline.",
      rules:
        "Game rules: You need to avoid collisions with obstacles, each obstacle passed is rewarded with points scored, more points guarantee Dino's excellent preparation for the World Championship, as well as fewer injuries for our podium contender.",
      pictureUrl: `${picture2}`,
      button: "Play",
    },
    {
      id: "game3",
      name: "Game 3",
      description:
        "In this game you are given the opportunity to show the dexterity of your fingers and quick reaction.",
      rules: "Game rules: You need to play just to play and enjoy the game.",
      pictureUrl: `${picture3}`,
      button: "Play",
    },
    {
      id: "game4",
      name: "Game 4",
      description:
        "In this game you are given the opportunity to show the dexterity of your fingers and quick reaction.",
      rules: "Game rules: You need to play just to play and enjoy the game.",
      pictureUrl: `${picture4}`,
      button: "Play",
    },
  ],
};
