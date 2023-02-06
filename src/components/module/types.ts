export type Settings = {
  lang: string;
  style: string;
  volume: boolean;
};

export type TypeUser = {
  username: string;
  password: string;
};

export type AnswerRecordUser = {
  success: boolean;
  message: string;
};

export type LogName = {
  username: string;
};

export type AnswerLoginUser = {
  success: boolean;
  user: {
    _id: string;
    username: string;
    __v: number;
    password: string;
  };
};

export type ScoreGameUser = {
  username: string;
  gamename: string;
  score: number;
};

export type ScoreGamesUserSort = {
  username: string;
  option: string;
};

/* export type ScoreGamesUser = {
  username: string,
  option: string
} */
