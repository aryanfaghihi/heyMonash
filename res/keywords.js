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
                    ],
                    [
                        // "matheson",
                        // "mathesons",
                        // "matheasons",
                        // "matherson",
                        // "matho",
                        // "law",
                        // "lawl",
                        "hargreaves",
                        "hargraves",
                        "hargrave"
                    ]
                ]
            },
            response: response.getHalTime()
        },
        {
            keywords: {
                required: [
                    "parking",
                    "free"
                ],
                alternatives: [
                    "on campus",
                    "university",
                    "uni",
                    "monash",
                    "today"
                ]
            },
            response: response.getParkLocation()
        },
        {
            keywords: {
                required: [
                    "when"
                ],

                alternatives: [
                    "tutorial",
                    "class",
                    "lab",
                    "lecure",
                    "practical",
                    "prac",
                    "laboratory"
                ]
            },
            response: response.getClassLocation()


        },
        {
            keywords: {
                required: [
                    "how",
                    "fees",
                    "pay"
                ],

                alternatives: [

                ]
            },
            response: response.getFeesPay()


        },


        {
            keywords: {
                required: [
                    "introduce"
                ],

                alternatives: [
                    "yourself"
                ]
            },
            response: response.getIntroRes()


        },
        {
            keywords: {
                required: [
                    "introduce"
                ],

                alternatives: [
                    "yourself"
                ]
            },
            response: response.getIntroRes()


        }








    ]
};
