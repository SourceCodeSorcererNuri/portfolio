// api/send-message.js
export default async function handler(req, res) {
    const { name, email, message } = JSON.parse(req.body);

    // These come from your Hosting Provider's Dashboard settings
    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    const text = `🚀 New Message\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;

    try {
        await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: CHAT_ID, text }),
        });
        return res.status(200).json({ status: 'success' });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}
