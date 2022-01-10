import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();

const BASE_URL = `https://app.chatwoot.com/api/v1/accounts/${process.env.ACCOUNT_ID}`;

const createContact = async (req) => {
    const response = await fetch(`${BASE_URL}/contacts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "api-access-token": process.env.API_KEY,
        },
        body: JSON.stringify(req.body)
    });
    const data = await response.json();
    return data;
}


const createConversation = async (req) => {
    const response = await fetch(`${BASE_URL}/conversations`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "api-access-token": process.env.API_KEY,
        },
        body: JSON.stringify(req.body)
    });
    const data = await response.json();
    return data;
}

const sendMessage = async (req) => {
    const response = await fetch(`${BASE_URL}/conversations/${req.params.id}/messages`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "api-access-token": process.env.API_KEY,
        },
        body: JSON.stringify(req.body)
    });
    const data = await response.json();
    return data;
}


const chatwoot = {
    createContact,
    createConversation,
    sendMessage
}

export default chatwoot;