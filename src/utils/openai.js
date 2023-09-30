import OpenAI from "openai";
// import "dotenv/config";
import { GPT_KEY } from "./key";

// console.log(process.env.GPT_KEY);
export const openai = new OpenAI({
  apiKey: GPT_KEY,
  dangerouslyAllowBrowser: true, // defaults to process.env["OPENAI_API_KEY"]
});

// async function main() {
//   const chatCompletion = await openai.chat.completions.create({
//     messages: [{ role: "user", content: "Say this is a test" }],
//     model: "gpt-3.5-turbo",
//   });
// }
