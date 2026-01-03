import { Hono } from "hono";

export const participantsRouter = new Hono()
.get("/", (c) => {
    return c.json ({events: []});
})
.get("/:id", (c) => {
    const id = c.req.param("id");
    return c.json({event: {event: id}});
})
.post("/",  (c) => {
    return c.json({event:"created"});
})
.patch("/:id", (c) => {
    const id = c.req.param("id");
    return c.json({event: {event: id}});
})
.delete("/:id", (c) => {
    const id = c.req.param("id");
    return c.json({event: {event: id}});
});