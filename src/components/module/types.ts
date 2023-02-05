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
