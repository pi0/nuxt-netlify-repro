import { send, setResponseHeader } from "h3";

export default function defaultNitroErrorHandler(error, event) {
  setResponseHeader(event, "Content-Type", "application/json");
  console.error(error);
  return send(event, JSON.stringify({
    error: error.message,
    stack: error.stack.split("\n").map((line) => line.trim()),
  }, null, 2));
}
