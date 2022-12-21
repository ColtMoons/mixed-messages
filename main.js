 //message Components 
const pronouns = ['You', 'They', 'We', 'I', 'He', 'She'];
const verb = ['are', 'aren\'t', 'is', 'isn\'t', 'am', 'am not'];
const adjetive = ['a good', 'a great', 'a bad', 'the worst', 'the best'];
const final = ['time', 'day', 'weekend', 'month', 'year'];

const messageComponets = [pronouns, verb, adjetive, final];

//You are having good luck.
const messageFactory = () =>{
  return {
    message: '',
    createRandomMessage(messageComponets){
      let pronouns;
      let verb;
      let adjetive;
      let final;
      let invalid = true;
      while(invalid){
        pronouns = messageComponets[0][Math.floor(Math.random() * messageComponets[0].length)];
        verb = messageComponets[1][Math.floor(Math.random() * messageComponets[1].length)];
        adjetive = messageComponets[2][Math.floor(Math.random() * messageComponets[2].length)];
        final = messageComponets[3][Math.floor(Math.random() * messageComponets[3].length)];
        if((pronouns === 'You' || pronouns === 'We' || pronouns === 'They') && (verb === 'are' || verb === "aren't")){
          invalid = false;
        }
        if((pronouns === 'He' || pronouns === 'She') && (verb === 'is' || verb === "isn't")){
          invalid = false;
        }
        if((pronouns === 'I') && (verb === 'am' || verb === "am not")){
          invalid = false;
        }
      }
      this.message = `${pronouns} ${verb} having ${adjetive} ${final}`
    }
  }
}

const message = messageFactory();
message.createRandomMessage(messageComponets);