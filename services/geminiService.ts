import { GoogleGenAI } from "@google/genai";

export const getChessAdvice = async (stats: string) => {
  try {
    // Fix: Correct initialization as per @google/genai guidelines using process.env.API_KEY directly
    const ai = new GoogleGenAI({apiKey: process.env.API_KEY});
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are an expert chess coach. Based on these player stats: ${stats}, provide a short (2-3 sentences), motivating advice for improvement. Focus on the difference between their ratings.`,
      config: {
        temperature: 0.7,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Mantenha o foco nos problemas táticos para melhorar seu rating de Blitz!";
  }
};