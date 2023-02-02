import { TypeUser, AnswerRecordUser } from "./types";

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
    const data = await response.json();

    return data;
  }
}
