import OpenAI from "openai";
import { OPEN_API_KEY } from "./constants";

const client = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_KEY,
  dangerouslyAllowBrowser: true,
});

export default client;
