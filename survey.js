const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = {};

rl.question('What\'s your name? Nicknames are also acceptable :)', (answer1) => { 
  questions['name'] = answer1;
  rl.question('What\'s an activity you like doing?', (answer2) => {
    questions['hobby'] = answer2;
    rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (answer3) => {
      questions['meal'] = answer3;
      rl.question('What\'s your favourite thing to eat for that meal?', (answer4) => {
        questions['favoriteFoodMeal'] = answer4;
        rl.question('Which sport is your absolute favourite?', (answer5) => {
          questions['sport'] = answer5;
          rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer6) => {
            questions['superpower'] = answer6;
            console.log(`${questions.name} loves ${questions.hobby}, devouring ${questions.favoriteFoodMeal} for ${questions.meal}, prefers ${questions.sport} over any other sport, and is amazing at ${questions.superpower}`);
            rl.close();
          });
        });
      });
    });
  });
});


