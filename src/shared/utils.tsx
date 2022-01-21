import axios from "axios";

const baseUrl = process.env.REACT_APP_API;

export const apiCall = {
  post: async (endpoint: string, body: {}) => {
    const targetUrl = baseUrl + endpoint;
    const response = await axios.post(targetUrl, body);
    return response;
  },
};
