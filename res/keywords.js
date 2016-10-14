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
    ],

    newLogicArray: [
        {
            keywords: {
                required: [
                    "library"
                ],
                alternatives: [
                    [
                        "working hours",
                        "opening times",
                        "opening time",
                        "working hour"
                    ]
                ]
            },
            response: response.getTime()
        }
    ]
};