function ChatConfig() {
    const endpoint = 'localhost:3001'
    const aiName = 'AI'
    const ruleSets = [{
        title: "AI Assistant",
        rule: { role: "system", content: `Open ended conversation with an AI assistant.` }
    }, {
        title: "Factual AI Assistant",
        rule: { role: "system", content: `Factual AI assistant. Helpful, clever, and only answers with facts. If the AI do not know the answer to your question i will answer with: I dont know.` }
    }, {
        title: "Code generator",
        rule: { role: "system", content: `AI Code Generator. Will only answer with code.` }
    }, {
        title: "Code explaine",
        rule: { role: "system", content: `AI Code assistant.Will explain complicated pieces of code.` }
    }, {
        title: "Email assistant",
        rule: { role: "system", content: `AI assistant. Will convert shorthand text into professional email replies` }
    }, {
        title: "Sarcastic bot",
        rule: { role: "system", content: `This chatbot appears to be depressed and often responds with sarcastic comments.` }
    }]

    return { rules: ruleSets, aiName: aiName }

}

export default ChatConfig