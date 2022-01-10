import Express from "express";
const router = Express.Router();

import chatwoot from "./chatwoot.js";


router.post("/contacts", async (req, res) => {
    const response = await chatwoot.createContact(req);
    res.json(response);
});

router.post("/conversations", async (req, res) => {
    const response = await chatwoot.createConversation(req);
    res.json(response);
});

router.post("/conversations/:id/messages", async (req, res) => {
    const response = await chatwoot.sendMessage(req);
    res.json(response);
});

export default router;