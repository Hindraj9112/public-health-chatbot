const { GoogleGenerativeAI } = require("@google/generative-ai");

class HealthChatbot {

    async chat(userMessage) {

        try {

            const genAI = new GoogleGenerativeAI(
                process.env.GEMINI_API_KEY
            );

            const model = genAI.getGenerativeModel({
                model: "gemini-2.5-flash"
            });

            const result = await model.generateContent(
                `You are a helpful public health assistant.
                
                User Question:
                ${userMessage}`
            );

            const response = result.response.text();

            return response;

        } catch (error) {

            console.log("FULL GEMINI ERROR:");
            console.log(error);

            throw error;

        }

    }

}

module.exports = { HealthChatbot };