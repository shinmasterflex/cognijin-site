
import { GoogleGenAI } from "@google/genai";

const API_KEY = import.meta.env.VITE_API_KEY;

if (!API_KEY) {
  // In a real app, you'd want to handle this more gracefully.
  // For this context, we will proceed assuming the key is set in the environment.
  console.warn("API key not found. Please set the API_KEY environment variable.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

export const generateText = async (prompt: string): Promise<string> => {
  if (!API_KEY) {
    return "API Key not configured. Please contact support.";
  }
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are a helpful assistant for a company called Cognijin. Keep your response concise and helpful. User prompt: "${prompt}"`,
      config: {
        thinkingConfig: { thinkingBudget: 0 } // For faster response
      }
    });
  return response.text ?? "";
  } catch (error) {
    console.error("Error generating text:", error);
    if (error instanceof Error) {
        return `An error occurred: ${error.message}`;
    }
    return "An unknown error occurred while generating text.";
  }
};