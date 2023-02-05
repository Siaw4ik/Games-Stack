import { TypeUser, AnswerRecordUser, LogName, AnswerLoginUser } from "./types";

export class User {
  async reсordUser(user: TypeUser): Promise<AnswerRecordUser> {
    const response = await fetch(
      "https://rsclonetestserver-production.up.railway.app/user/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );
    const data: AnswerRecordUser = await response.json();

    return data;
  }

  async checkUser(login: LogName): Promise<AnswerRecordUser> {
    const response = await fetch(
      "https://rsclonetestserver-production.up.railway.app/user/check",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(login),
      }
    );
    const data: AnswerRecordUser = await response.json();

    return data;
  }

  async loginUser(user: TypeUser): Promise<AnswerLoginUser | AnswerRecordUser> {
    const response = await fetch(
      "https://rsclonetestserver-production.up.railway.app/user/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );
    const data: AnswerRecordUser | AnswerLoginUser = await response.json();

    return data;
  }
}
