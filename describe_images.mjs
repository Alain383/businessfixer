import { GoogleGenAI } from '@google/genai';
import fs from 'fs';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function describeImage(filePath) {
  try {
    const data = fs.readFileSync(filePath);
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: [
        {
          role: 'user',
          parts: [
            { text: 'Briefly describe this image.' },
            { inlineData: { data: data.toString('base64'), mimeType: 'image/jpeg' } }
          ]
        }
      ]
    });
    console.log(`${filePath}:`, response.text);
  } catch (err) {
    console.error(`Error with ${filePath}:`, err.message);
  }
}

async function main() {
  await describeImage('./img7.jpg');
  await describeImage('./img8.jpg');
  await describeImage('./img9.jpg');
  await describeImage('./img10.jpg');
}

main();
