var response = require('./responses');

module.exports = {
    logicArray: [
        {
            "keywords": [
                "what",
                "time"
            ],
            "response": response.getTime()
        },
        {
            "keywords": [
                "library",
                "working hours"
            ]
        }
    ]
};