/* eslint-disable prettier/prettier */
import picture1 from "../../assets/game1_picture.png";
import picture2 from "../../assets/game2_picture.png";
import picture3 from "../../assets/game3_picture.png";
import picture4 from "../../assets/game4_picture.png";
import picture5 from "../../assets/game5_picture.png";

export const gamesData = {
  ru_title:
    "Способности Силы были проявлением возможностей чувствительных к Силе существ, например, джедаев или ситхов. Учёными эти способности были описаны как сверхъестественные явления, невозможные с точки зрения науки. Существовало множество способностей Силы, однако для освоения некоторых требовалась приверженность к светлой или тёмной стороне Силы, а для познания иных был необходим высокий потенциал и постоянные тренировки разума и тела.",
  en_title:
    "Force abilities were a manifestation of the capabilities of Force-sensitive beings, such as the Jedi or the Sith. Scientists have described these abilities as supernatural phenomena, impossible from the point of view of science. There were many abilities of the Force, however, the development of some required commitment to the light or dark side of the Force, and the knowledge of others required high potential and constant training of the mind and body.",
  ru_quote:
    "«Джедай использует Силу для познания и защиты, никогда для нападения» — Йода",
  en_quote:
    "«A Jedi uses the Force to know and protect, never to attack» — Yoda",
  ru: [
    {
      id: "game1",
      name: "Jedi's Mind",
      description:
        "Для поддержания силы разума джедая и существует данное упражнение-соревнование силы мысли.",
      manual:
        "В данной игре Вам предлагаются вопросы, для правильного ответа на которые необходимы знания типов данных, приведения типов в JavaScript. За 60 секунд Вам предстоимт ответить на 40 вопросов, при этом на каждый вопрос имеется лишь один правильный вариант ответа из четырех предложенных. За каждый правильный ответ начисляется 1 балл, за неверный - 0 баллов. Если Вы отвечаете неправильно, то правильный ответ подсветится зеленым цветом, неверные - красным, а для перехода к следующему вопросу необходимо нажать кнопку 'Следующий'. В любой момент Вы можете нажать кнопку 'Начать заново', в результате чего игровой процесс начнется сначала, при этом последовательность вопросов и расположение вариантов ответов изменится случайным образом. По истечении времени либо выполнении всех 40 вопросов, в зависимости от того, какое из событий наступит быстрее, Вы увидите сообщение с правильныv количеством отвеченных вопросов.",
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
      manual:
        "В данной игре Вам необходимо бесконечно преодолевать врагов, выставленных в качестве препятствий на Вашем пути, перепрыгивая их. При этом препятствия имеют различные габариты и расставлены на Вашем пути случайным образом. Вы обладаете двумя видами прыжков: выоский - для преодоления массивных препятствий, и низкий - для преодоления незначительных препятствий. Однако чем выше Ваш прыжок, тем дольше Вы будете приземляться, рискуя попасть прямо на соперника. С каждой секундой скорость Вашего передвижения увеличивается. Если Вы с кем-либо столкнетесь либо упадете на голову Вашему врагу, то игра закончится. Чем дольше Вы находитесь в игре, тем больше очков Вам будет начислено. По окончанию игры игровой процесс можно начать сначала, нажав любую клавишу. Запаситесь энергией и терпением, так как игра не предусматривает возможности поставить паузу.",
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
      manual:
        "В данной игре Вам необходимо бесконечно преодолевать препятствия, попадающиеся на Вашем пути, облетая их. При этом препятствия расставлены на Вашем пути случайным образом, и для преодоления каждого из них существует лишь один верный путь. С каждой секундой скорость Вашего полета увеличивается. Если Вы с чем-либо столкнетесь, то игра закончится. Чем дольше Вы находитесь в игре, тем больше очков Вам будет начислено. По окончанию игры игровой процесс можно начать сначала, нажав любую клавишу. Запаситесь энергией и терпением, так как игра не предусматривает возможности поставить паузу.",
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
      manual:
        "Вам предлагается сыграть в крестики-нолики против компьютера. Для начала игры Вам необходимо выбрать персонажа в качестве фишки, которая будет использоваться на игровом поле. Для победы над соперником Вам необходимо изначально сделать правильные ходы, и, увидя Вашу силу, соперник может испугаться и начать совершать ошибки, и тогда Ваша победа будет в Ваших руках, главное не спешите, ведь Вы не ограничены во времени. За победу Вы получаете одно очко, за ничью - 0, а при поражении у Вас снимется один балл. По окончанию игры Вы можете начать ее вновь, нажав на кнопку 'Начать заново' и выбрав персонажа.",
      rules:
        "Правила игры: Вам необходимо проявить все свои лучшие качества, приобретенные во всех тренировках, а также навыки стратега и нанести сокрушительный удар по темной стороне Силы. За каждую победу вы будете вознаграждены одним очком опыта. Удачи в сражении!",
      pictureUrl: `${picture4}`,
      button: "Играть",
    },
    {
      id: "game5",
      name: "Jedi's Memory",
      description:
        "В данной игре Вам предоставляется возможность проявить свою способность к запоминанию. Также это отличная возможность Джедаю потренировать свои способности к теликинезу и удивить всех своим результатом.",
      manual:
        "Игра предлагает Вам 36 перевернутых рубашкой вверх карт, каждая из которых имеет своего 'двойника'. Вашей целью является найти для каждой карты этого 'двойника', собрав на игровом поле 18 пар. Изначально Вы имеете 1 000 очков, имея возможность одновременно видеть две открытых карты, а если данные карты идентичны, то они остаются открытыми до конца игры, и Вы вправе открыть новые две карты. Если при открытии второй карты, она не совпадет с первой, то данные карты закроются. Каждым ходом является открытие двух карт, а с 19 хода Ваши очки начнут уменьшатся на 20 за каждый ход. Будьте внимательны и не спешите, ведь Вы не ограничены во времени, старайтесь запомнить расположение кахдой карты. В любой момент Вы можете нажать кнопку 'Начать заново', в результате чего игровой процесс начнется сначала, при этом карты будут разложены в новом случайном порядке.",
      rules:
        "Правила игры: Изначально вам предоставляется 1000 очков и 36 перевернутых рубашкой вверх карт. Ваша задача, открывая по 2 карты, найти пару каждой карте. Если 2 открытых карты не совпадают, то они снова поворачиваются рубашкой вверх. Первые 18 поворотов пар карт не уменьшают количество очков, далее за кждую последующую перевернутую пару отнимается 20 очков, если игра закончена более, чем за 68 ходов - Джедай получает 0 очков.",
      pictureUrl: `${picture5}`,
      button: "Играть",
    },
  ],
  en: [
    {
      id: "game1",
      name: "Jedi's Mind",
      description:
        "To maintain the power of the mind of the Jedi, there is this exercise-competition of the power of thought.",
      manual:
        "In this game you are offered questions, for the correct answer to which you need knowledge of data types and type conversion in JavaScript. In 60 seconds you have to answer 40 questions, and each question has only one correct answer out of four suggested. You get 1 point for each correct answer, 0 points for an incorrect one. If you answer incorrectly, the correct answer will be highlighted in green, incorrect ones in red, and to move to the next question you need to click the 'Next' button. At any time, you can click the 'Start again' button, as a result of which the game loop will start over, while the sequence of questions and the location of the answer options will change randomly. After the time has elapsed or all 40 questions have been completed, depending on which of the events will occur faster, you get a message with the correct number of questions answered.",
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
      manual:
        "In this game, you need endlessly to overcome the enemies set up as obstacles in your way by jumping over them. At the same time, the obstacles have different dimensions and are placed randomly on your way. You have two types of jumps: high - to overcome massive obstacles, and low - to overcome minor obstacles. However, the higher your jump, the longer it will take you to land with risk of falling directly on the opponent. Also every second your movement speed increases . If you collide with someone or fall on your enemy, the game is over. The longer you stay in the game, the more points you will be awarded. At the end of the game, game loop can be started from the beginning by pressing any key. Stock up on energy and patience, as the game does not provide an opportunity to pause.",
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
      manual:
        "In this game you need to endlessly overcome obstacles, that come in your way, flying around them. At the same time, obstacles are placed on your path randomly, and there is only one right way to overcome each of them. Also every second your flight speed increases. If you collide with something, the game is over. The longer you stay in the game, the more points you will be awarded. At the end of the game, game loop can be started from the beginning by pressing any key. Stock up on energy and patience, as the game does not provide an opportunity to pause",
      rules:
        "Game rules: When you control the Millennium Falcon, you need to avoid collisions with space objects, the more objects you can fly, the more points you get. At the end of the time, the Jedi can compare his abilities with the rest in the scoreboard.",
      pictureUrl: `${picture3}`,
      button: "Play",
    },
    {
      id: "game4",
      name: "Jedi's Strategy",
      description:
        "Every Jedi must possess one of the essential qualities on the path to perfect control of the Force - the skill of strategy. This requires daily training to improve strategic skills.",
      manual:
        "You are invited to play tic-tac-toe against the computer. To start the game, you need to choose a hero: Yoda or Darth Vader, as a chip that will be used on the playing field. To defeat your opponent, you need to initially make the right moves, and seeing your strength, the opponent may get scared and start making mistakes, and then your victory will be in your hands, the main thing is not to hurry, because you are not limited in time. You get one point for a win, 0 for a draw, and one point is deducted from you if you lose. At the end of the game, you can start it again by clicking on the 'Start Again' button and selecting a character.",
      rules:
        "Game rules: You need to show all your best qualities acquired in all trainings, as well as the skills of a strategist and deal a crushing blow to the dark side of the Force. For each victory you will be rewarded with one experience point. Good luck in battle!",
      pictureUrl: `${picture4}`,
      button: "Play",
    },
    {
      id: "game5",
      name: "Jedi's Memory",
      description:
        "In this game you are given the opportunity to show your ability to memorize. It is also a great opportunity for a Jedi to train his telekinesis abilities and surprise everyone with his result.",
      manual:
        "The game offers you 36 face-down cards, each of which has its own 'twin'. Your goal is to find this 'twin' for each card by collecting 18 pairs on the playing field. Initially, you have 1,000 points, having the opportunity to see two open cards at the same time, and if these cards are identical, then they remain open until the end of the game, and you have the right to open two new cards. When opening the second card does not match the first one, theese  two cards will be closed. Each turn is the opening of two cards, and from the 19th turn your points will start to decrease by 20 for each turn. Be careful and take your time, because you are not limited in time, try to remember the location of each card. At any time, you can click the 'Start again' button, as a result of which the gameplay will start over, while the cards will be laid out in a new random order.",
      rules:
        "Game rules: Initially, you are given 1000 points and 36 cards turned face down. Your task, opening 2 cards, is to find a pair of each card. If the 2 open cards do not match, they are turned face down again. The first 18 turns of pairs of cards do not reduce the number of points, then 20 points are taken away for each subsequent turned pair of cards, if the game is over in more than 68 turns - the Jedi receives 0 points.",
      pictureUrl: `${picture5}`,
      button: "Play",
    },
  ],
};
