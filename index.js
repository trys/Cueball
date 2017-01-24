'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = "amzn1.ask.skill.4102c716-41b4-49a3-baf5-5b7f0fc87b18";
var SKILL_NAME = "Cue Ball";

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('CueBall');
    },
    'CueBallIntent': function () {
        this.emit('CueBall');
    },
    'CueBall': function () {
        var speechOutput = "Where's the cue ball going!";

        this.emit(':tellWithCard', speechOutput, SKILL_NAME)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "Where's the cue ball going?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};