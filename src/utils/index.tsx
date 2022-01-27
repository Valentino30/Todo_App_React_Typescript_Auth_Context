// import axios from "axios";
import { nanoid } from "nanoid";

// const baseUrl = process.env.REACT_APP_API;

export const apiCall = {
  post: async (endpoint: string, body: {}) => {
    // const targetUrl = baseUrl + endpoint;
    // const response = await axios.post(targetUrl, body);
    const response = {
      data: {
        id: nanoid(),
        token: nanoid(),
        email: "vale@gmail.com",
      },
    };
    return response;
  },
};

export const sampleTodos = [
  {
    id: nanoid(),
    name: "Todo 1",
    isComplete: false,
  },
  {
    id: nanoid(),
    name: "Todo 2",
    isComplete: false,
  },
  {
    id: nanoid(),
    name: "Todo 3",
    isComplete: false,
  },
];
