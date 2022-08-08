let bot = {
    firstName: 'Chatbot',
    lastName: '2.0',
    introResponses: ['Dude, like, ', 'Bro, ', 'Sick, '],
    middleResponses: ['that was seriously gnarly ', 'that was out of this world ', 'I am so stoked for you '],
    endingResponses: ['bro.', 'my dude.'],
    randomResponse() {
        let randInt1 = Math.floor(Math.random() * 3);
        let randInt2 = Math.floor(Math.random() * 3);
        
        return this.introResponses[randInt1]+this.middleResponses[randInt2]+this.endingResponses[0];
    }
}

console.log(bot.randomResponse());