import axios from "axios";

class Request {
  constructor() {
    this.baseUrl = "http://jsonplaceholder.typicode.com/users";
  }

  get() {
    return this.send({ method: "GET" });
  }

  send(data) {
    return new Promise(async (resolve, reject) => {
      const { method } = data;
      let response = null;

      if (method === "GET") {
        response = await axios.get(this.baseUrl);
      }
      if (!response || !response.data) {
        reject("API did not response");
      }
      resolve(response.data);
    });
  }
}

export const request = new Request();
