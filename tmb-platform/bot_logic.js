/* Mock Chatbot Logic for TBZ */
const botResponses = {
    "hello": "Mwbwanji! Welcome to the Tobacco Board of Zambia (TBZ) automated assistant. How can I help you today?\n\n1. Check Prices\n2. Licensing Info\n3. Report Issue",
    "hi": "Mwbwanji! Welcome to TBZ. How can I help?",
    "price": "The current average floor price for Virginia Flue-Cured is **$3.45/kg**. \nVolume traded today: 450,000kg.",
    "license": " Growers registration for the 2025 season is NOW OPEN. \n\nPlease visit the E-Licensing Portal to apply.",
    "register": "You can register right here on the website. Click 'Get Licensed' in the menu.",
    "help": "Our support team is available 08:00 - 17:00. Call +260 211 254 211.",
    "default": "I didn't quite catch that. Try asking about 'prices', 'license', or 'registration'."
};

function getBotResponse(input) {
    input = input.toLowerCase();
    for (const key in botResponses) {
        if (input.includes(key)) return botResponses[key];
    }
    return botResponses["default"];
}
