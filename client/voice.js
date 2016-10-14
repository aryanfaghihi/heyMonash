var final_transcript = '';
var recognizing = false;
var ignore_onend;
var start_timestamp;
conversation = {
    history: [],
    addQuestion: function (question) {
        this.history.push({
            question: question,
            response: ''
        });
        var index = this.history.length;
        this.createQuestionBubble(question, index);
    },
    createQuestionBubble: function(question, index) {
        question = capitalize(question);
        var conversationDiv = document.getElementById('conversation');
        var newQuestionDiv = document.createElement("div");
        document.getElementById("ongoingQuestionDiv").remove();
        newQuestionDiv.className="question";
        newQuestionDiv.innerHTML = "<div class='bubble-question'><span id='final_span" + index + "'>" + question + "</span></div>";
        conversationDiv.appendChild(newQuestionDiv);
    },
    addResponse: function (response) {
        var latestIndex = this.history.length - 1;
        this.history[latestIndex].response = response;

        this.createResponseBubble(response, latestIndex);
    },
    createResponseBubble: function (response, index) {
        var conversationDiv = document.getElementById('conversation');
        var newResponseDiv = document.createElement("div");
        newResponseDiv.className="response";
        newResponseDiv.innerHTML = "<div class='bubble-response'><span id='final" + index + "'>" + response + "</span></div>";
        conversationDiv.appendChild(newResponseDiv);
    }
};
// Just for us to know.
var conversationTemplate = {
    question: '',
    response: ''
};

if (!('webkitSpeechRecognition' in window)) {
    console.log('USE CHROME!');
} else {
    // start_button.style.display = 'inline-block';
    var recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onstart = function() {
        recognizing = true;
        // start_img.src = 'https://www.google.com/intl/en/chrome/assets/common/images/content/mic-animate.gif';
        var conversationDiv = document.getElementById('conversation');
        var ongoingQuestionDiv = document.createElement("div");
        ongoingQuestionDiv.id = "ongoingQuestionDiv";
        ongoingQuestionDiv.className="question";
        ongoingQuestionDiv.innerHTML = "<div class='bubble-question'><span id='ongoingQuestion'></span></div>";
        conversationDiv.appendChild(ongoingQuestionDiv);
    };

    recognition.onerror = function(event) {
        if (event.error == 'no-speech') {
            ignore_onend = true;
        }
        if (event.error == 'audio-capture') {
            ignore_onend = true;
        }
        if (event.error == 'not-allowed') {
            if (event.timeStamp - start_timestamp < 100) {
            } else {
            }
            ignore_onend = true;
        }
    };

    recognition.onend = function() {
        $("#mic-button").removeClass("pulse-button-anim");
        recognizing = false;
        if (ignore_onend) {
            return;
        }

        if (window.getSelection) {
            window.getSelection().removeAllRanges();
            var range = document.createRange();
            range.selectNode(document.getElementById('ongoingQuestion'));
            window.getSelection().addRange(range);
        }

    };

    recognition.onresult = function(event) {
        $(".response").removeClass("hidden");
        var interim_transcript = '';
        for (var i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
                final_transcript += event.results[i][0].transcript;
                conversation.addQuestion(final_transcript);
                console.log(conversation);
                ask_server(final_transcript);
                recognition.stop();
                console.log(final_transcript);
            } else {
                interim_transcript += event.results[i][0].transcript;
            }
        }
        //final_transcript = capitalize(final_transcript);
        //final_span.innerHTML = linebreak(final_transcript);
        if (document.getElementById("ongoingQuestion")) {
            document.getElementById("ongoingQuestion").innerHTML = linebreak(interim_transcript);
        }
        if (final_transcript || interim_transcript) {
            showButtons('inline-block');
        }
    };
}

var two_line = /\n\n/g;
var one_line = /\n/g;
function linebreak(s) {
    return s.replace(two_line, '<p></p>').replace(one_line, '<br>');
}

var first_char = /\S/;
function capitalize(s) {
    return s.replace(first_char, function(m) { return m.toUpperCase(); });
}



function startButton(event) {
    if (recognizing) {
        $("#mic-button").removeClass("pulse-button-anim");
        recognition.stop();
        return;
    }
    $("#mic-button").addClass("pulse-button-anim");
    $(".question").removeClass("hidden");
    final_transcript = '';
    recognition.lang = 'en-AU';
    recognition.start();
    ignore_onend = false;
    showButtons('none');
    start_timestamp = event.timeStamp;
}


var current_style;
function showButtons(style) {
    if (style == current_style) {
        return;
    }
    current_style = style;
}



var xhttp;
if (window.XMLHttpRequest) {
    xhttp = new XMLHttpRequest();
} else {
    // code for IE6, IE5
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

function ask_server(query) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            handleResponse(this.responseText);
        }
    };
    xhttp.open("GET", "/api/ask/" + query, true);
    xhttp.send();

}

function handleResponse (response) {
    console.log(response);
    conversation.addResponse(response);
    console.log(conversation);
    if (typeof response == "string") {
        console.log('the response is only text');
        speak(response);
        $("#final_span_response").text(response);

    }
    else {
        console.log('the response if a card!');
        // Speak the voice part
        speak(response.voice);
        createCard(response);
    }
}

function createCard (responseData) {
    console.log('creating card now.')
}

// Just another test
// setTimeout(function() {
//     handleResponse({
//         voice: 'hey monash',
//         title: ''
//     });
// }, 1000)


function speak(text) {
    responsiveVoice.speak(text);
}







Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}
