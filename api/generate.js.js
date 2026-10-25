export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Yalnızca POST istekleri kabul edilir.' });
  }

  const { promptText, modelName } = req.body;

  // API anahtarını Vercel Environment Variables'dan güvenle çekiyoruz
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'Sunucuda GEMINI_API_KEY tanımlanmamış!' });
  }

  try {
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`;

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          role: "user",
          parts: [{ text: promptText }]
        }]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json(data);
    }

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}