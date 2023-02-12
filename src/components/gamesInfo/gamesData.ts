/* eslint-disable prettier/prettier */
import picture1 from "../../assets/game1_picture.png"
import picture2 from "../../assets/game2_picture.png"
import picture3 from "../../assets/game3_picture.png"
import picture4 from "../../assets/game4_picture.png"
import picture5 from "../../assets/game5_picture.png"

export const gamesData = {
  ru_title: "Способности Силы были проявлением возможностей чувствительных к Силе существ, например, джедаев или ситхов. Учёными эти способности были описаны как сверхъестественные явления, невозможные с точки зрения науки. Существовало множество способностей Силы, однако для освоения некоторых требовалась приверженность к светлой или тёмной стороне Силы, а для познания иных был необходим высокий потенциал и постоянные тренировки разума и тела.",
  en_title: "Force abilities were a manifestation of the capabilities of Force-sensitive beings, such as the Jedi or the Sith. Scientists have described these abilities as supernatural phenomena, impossible from the point of view of science. There were many abilities of the Force, however, the development of some required commitment to the light or dark side of the Force, and the knowledge of others required high potential and constant training of the mind and body.",
  ru_quote: "«Джедай использует Силу для познания и защиты, никогда для нападения» — Йода",
  en_quote: "«A Jedi uses the Force to know and protect, never to attack» — Yoda",
  "ru": [
    {
      id: "game1",
      name: "Jedi's Mind",
      description:
        "Для поддержания силы разума джедая и существует данное упражнение-соревнование силы мысли.",
      rules:
        "Правила игры: Вам необходимио за 60 секунд ответить верно на как можно большее количество вопросов, каждый правильный ответ дает вам 1 балл. По завершении времени Джедай может сравнить свои способности с остальными в таблице результатов.",
      pictureUrl: `${picture1}`,
      button: "Играть",
    },
    {
      id: "game2",
      name: "Jedi's Agility",
      description:
        "Каким бы ни был разум Джедая, его тело также нуждается в ежедневных тренировках. В данной игре вам предоставляется возможность проявить ловкость своих пальцев и быстроту реакции. Вам необходимио помочь Люку Скайокеру в его тренировках.",
      rules:
        "Правила игры: Вам необходимио избегать столкновений с врагами, ведь Джедай использует Силу для познания и защиты, никогда для нападения. Чем дольше сможете избегать прямого контакта с врагами - тем больше очков будет получено. По завершении времени Джедай может сравнить свои способности с остальными в таблице результатов.",
      pictureUrl: `${picture2}`,
      button: "Играть",
    },
    {
      id: "game3",
      name: "Jedi's Mobility",
      description:
        "Быть сильным физически и умственно - это замечательно, но ты не сможешь быть соверешенным, если ты не владеешь навыками пилотирования корабля, благодаря которым Джедаю открываются новые горизонты и возможности. В данной игре Вам предоставляется возможность проявить и улучшить свои навыки пилотирования.",
      rules:
        "Правила игры: Вам необходимио, управляя Тысячелетним Соколом, избегать столкновений с космческими объектами, чем больше объектов сможете пролететь, тем больше получите очков. По завершении времени Джедай может сравнить свои способности с остальными в таблице результатов.",
      pictureUrl: `${picture3}`,
      button: "Играть",
    },
    {
      id: "game4",
      name: "Jedi's Strategy",
      description:
        "Каждый Джедай должен обладать одним из обязательных качеств на пути к совершенному контролю Силы - навыками стратегии. Для этого требуется ежедневные тренировки по улучшению стратегических навыков.",
      rules:
        "Правила игры: Вам необходимо проявить все свои лучшие качества, приобретенные во всех тренировках, а также навыки стратега и нанести сокрушительный удар по темной стороне Силы. За каждую победу вы будете вознаграждены одним очком опыта. Удачи в сражении!",
      pictureUrl: `${picture4}`,
      button: "Играть",
    },
    {
      id: "game5",
      name: "Jedi's Memory",
      description:
        "В данной игре Вам предоставляется возможность проявить свою способность запоминанию. Также это отличная возможность Джедаю потренировать свои способности к теликинезу и удивить всех своим результатом.",
      rules:
        "Правила игры: Изначально вам предоставляется 1000 очков и 36 перевернутых рубашкой вверх карт. Ваша задача, открывая по 2 карты, найти пару каждой карте. Если 2 открытых карты не совпадают, то они снова поворачиваются рубашкой вверх. Первые 18 поворотов пар карт не уменьшают количество очков, далее за кждую последующую перевернутую пару отнимается 20 очков, если игра закончена более, чем за 68 ходов - Джедай получает 0 очков.",
      pictureUrl: `${picture5}`,
      button: "Играть",
    }
  ],
  "en": [
    {
      id: "game1",
      name: "Jedi's Mind",
      description:
        "To maintain the power of the mind of the Jedi, there is this exercise-competition of the power of thought.",
      rules:
        "Game rules: You need to answer as many questions correctly as possible in 60 seconds, each correct answer gives you 1 point. At the end of the time, the Jedi can compare his abilities with the rest in the scoreboard.",
      pictureUrl: `${picture1}`,
      button: "Play",
    },
    {
      id: "game2",
      name: "Jedi's Agility",
      description:
        "Whatever the mind of a Jedi, his body also needs daily exercise. In this game, you are given the opportunity to show the dexterity of your fingers and quick reaction. You need to help Luke Skywalker in his training.",
      rules:
        "Game Rules: You need to avoid collisions with enemies, because the Jedi uses the Force for knowledge and defense, never for offense. The longer you can avoid direct contact with enemies, the more points you will get. At the end of the time, the Jedi can compare his abilities with the rest in the scoreboard.",
      pictureUrl: `${picture2}`,
      button: "Play",
    },
    {
      id: "game3",
      name: "Jedi's Mobility",
      description:
        "Being strong physically and mentally is great, but you can't be perfect if you don't have the skills to pilot a ship that open up new horizons and possibilities for a Jedi. In this game you are given the opportunity to show and improve your piloting skills.",
      rules: "Game rules: When you control the Millennium Falcon, you need to avoid collisions with space objects, the more objects you can fly, the more points you get. At the end of the time, the Jedi can compare his abilities with the rest in the scoreboard.",
      pictureUrl: `${picture3}`,
      button: "Play",
    },
    {
      id: "game4",
      name: "Jedi's Strategy",
      description:
        "Every Jedi must possess one of the essential qualities on the path to perfect control of the Force - the skill of strategy. This requires daily training to improve strategic skills.",
      rules: "Game rules: You need to show all your best qualities acquired in all trainings, as well as the skills of a strategist and deal a crushing blow to the dark side of the Force. For each victory you will be rewarded with one experience point. Good luck in battle!",
      pictureUrl: `${picture4}`,
      button: "Play",
    },
    {
      id: "game5",
      name: "Jedi's Memory",
      description:
        "In this game you are given the opportunity to show your ability to memorize. It is also a great opportunity for a Jedi to train his telekinesis abilities and surprise everyone with his result.",
      rules: "Game rules: Initially, you are given 1000 points and 36 cards turned face down. Your task, opening 2 cards, is to find a pair of each card. If the 2 open cards do not match, they are turned face down again. The first 18 turns of pairs of cards do not reduce the number of points, then 20 points are taken away for each subsequent turned pair of cards, if the game is over in more than 68 turns - the Jedi receives 0 points.",
      pictureUrl: `${picture5}`,
      button: "Play",
    }
  ],
};
