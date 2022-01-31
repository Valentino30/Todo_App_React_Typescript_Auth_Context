import { nanoid } from "nanoid";

export const apiCall = {
  post: async (endpoint: string, body: {}) => {
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
