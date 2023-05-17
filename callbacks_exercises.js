class Clock {
    constructor() {
        // 1. Create a Date object.
        const d = new Date();

        // 2. Store the hours, minutes, and seconds.
        this.hours = d.getHours();
        this.minutes = d.getMinutes();
        this.seconds = d.getSeconds();
        
        // 3. Call printTime.
        this.printTime();
        // 4. Schedule the tick at 1 second intervals.
        setInterval(this._tick.bind(this), 1000);
    }

    printTime() {
        // Format the time in HH:MM:SS

        // Use console.log to print it.
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    }

    _tick() {
        // console.log(this, 'this')
        // 1. Increment the time by one second.
        if (this.seconds === 59) {
            this.seconds = 0;
            if (this.minutes === 59) {
                this.minuetes = 0;
                //hours stuff here
                if (this.hours === 23) {
                    this.hours = 0;
                } else {
                    this.hours++;
                }
            } else {
                this.minutes++;
            };
        } else {
            this.seconds++;
        };
        // 2. Call printTime.
        this.printTime();
    }
}

// const clock = new Clock();


// const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function addNumbers(sum, numsLeft, completionCallback) {
//     if (numsLeft > 0) {
//         this.response = rl.question('Please enter a number: ', response => {
//             let value = parseInt(response);
//             sum += value;
//             console.log(sum);
//             numsLeft -= 1;
//             addNumbers(sum, numsLeft, completionCallback);
//         }) 
//     }
//     if (numsLeft === 0) {
//         completionCallback(sum);
//         rl.close()
//     }
    
// }

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

//myBind
Function.prototype.myBind = function (context) {
    console.log(this)
    return ()=> {
        this.apply(context);
        console.log(this);
    }
}
class Lamp {
    constructor() {
      this.name = "a lamp";
    }
  }
  
const turnOn = function() {
    console.log("Turning on " + this.name);
  };
  
const lamp = new Lamp();
  
turnOn(); // should not work the way we want it to
  
const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);
  
//   boundTurnOn(); // should say "Turning on a lamp"
//   myBoundTurnOn(); // should say "Turning on a lamp"