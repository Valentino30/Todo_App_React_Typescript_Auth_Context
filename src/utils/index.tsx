// import axios from "axios";
import { v4 as uuid } from "uuid";

// const baseUrl = process.env.REACT_APP_API;

export const apiCall = {
  post: async (endpoint: string, body: {}) => {
    // const targetUrl = baseUrl + endpoint;
    // const response = await axios.post(targetUrl, body);
    const response = {
      data: {
        id: uuid(),
        email: "vale@gmail.com",
      },
    };
    return response;
  },
};
