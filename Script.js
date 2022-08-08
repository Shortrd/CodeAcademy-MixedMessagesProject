let bot = {
    firstName: 'Chatbot',
    lastName: '2.0',
    introResponses: ['Dude, like, ', 'Bro, ', ''],
    middleResponses: ['that was seriously gnarly '],
    endingResponses: ['bro.'],
    randomResponse() {
        return this.introResponses[0]+this.middleResponses[0]+this.endingResponses[0];
    }
}

console.log(bot.randomResponse());