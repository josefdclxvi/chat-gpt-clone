export const _KEY = "9439c338c6msh461dcc659348f9dp1fc1c1jsne7c6481ad9d1";
export const _HOST = "openai80.p.rapidapi.com";
export const _URL = "https://openai80.p.rapidapi.com/chat";
export const _ENDPOINT = "/completions";

export const _MODEL = "gpt-3.5-turbo";

export const headers = {
  "content-type": "application/json",
  "X-RapidAPI-Key": _KEY,
  "X-RapidAPI-Host": _HOST
};

export * from "./api";
