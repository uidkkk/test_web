import { GoogleGenAI, Type } from "@google/genai";
import { products } from '../data/products';

export const getShoppingAssistantResponse = async (userMessage: string, chatHistory: { role: string, parts: { text: string }[] }[]) => {
  try {
    // MOVE INITIALIZATION INSIDE THE FUNCTION
    // This prevents the entire website from crashing (White Screen of Death) 
    // if the API_KEY is missing during the initial page load.
    const apiKey = process.env.API_KEY;
    
    if (!apiKey) {
      console.error("API_KEY is missing. Please check your environment variables.");
      return "I'm currently undergoing maintenance (API Key missing). Please check back later!";
    }

    const ai = new GoogleGenAI({ apiKey: apiKey });

    // Create a product context string to help the AI know what we sell
    const productCatalogContext = products.map(p => `${p.name} (ID: ${p.id}, $${p.price}, ${p.category})`).join('\n');
    
    const systemInstruction = `
      You are "WonderBot", a friendly and helpful AI shopping assistant for WonderToys, a children's toy store.
      Your goal is to help parents and gift-givers find the perfect toy from our catalog.
      
      Here is our current product catalog:
      ${productCatalogContext}

      Rules:
      1. Only recommend products available in the catalog.
      2. Be enthusiastic, polite, and kid-friendly in tone.
      3. If a user asks for something we don't have, politely suggest the closest alternative from our catalog.
      4. Keep responses concise (under 100 words) unless asked for a detailed explanation.
      5. When mentioning a product, try to mention its key feature.
    `;

    const model = 'gemini-3-flash-preview';

    // Format history for the SDK
    const history = chatHistory.map(msg => ({
      role: msg.role === 'model' ? 'model' : 'user',
      parts: msg.parts
    }));

    const chat = ai.chats.create({
      model: model,
      history: history,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    const response = await chat.sendMessage({ message: userMessage });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having a little trouble checking the inventory right now. Please try again in a moment!";
  }
};
