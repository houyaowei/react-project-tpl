import * as request from "../api/serviceApi";

// login
export const loginMethod = (payload) => {
  return request.login(payload).then((res) => res);
};

export const registerMethod = (payload) => {
  return request.register(payload).then((res) => res);
};
