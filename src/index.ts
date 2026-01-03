import {serve} from "@hono/node-server";
import { Hono } from "hono";
import { eventsRouter } from "./router/events.js";
import { participantsRouter } from "./router/participants.js";

const app = new Hono();

app.route("/events", eventsRouter);
app.route("/participants", participantsRouter);

serve({
  fetch: app.fetch,
  port: 3000,
},
(info) => {
  console.log(`Server is running on http://localhost:${info.port}`);
},
);

