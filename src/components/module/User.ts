import { TypeUser, AnswerRecordUser, LogName } from "./types";

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
    console.log(JSON.stringify(user));
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
}
