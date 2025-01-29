import { send, setResponseHeader } from "h3";

export default function defaultNitroErrorHandler(error, event) {
  setResponseHeader(event, "Content-Type", "application/json");
  return send(event, {
    error: error.message,
    stack: error.stack,
  });
}
