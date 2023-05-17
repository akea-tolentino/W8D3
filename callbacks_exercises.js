class Clock {
    constructor() {
      // 1. Create a Date object.
      const d = new Date();

      // 2. Store the hours, minutes, and seconds.
      const hours = d.getHours();
      const minutes = d.getMinutes();
      const seconds = d.getSeconds();
      
      // 3. Call printTime.
      this.printTime()
      // 4. Schedule the tick at 1 second intervals.
      setInterval(this._tick, 1000);
    }
  
    printTime() {
      // Format the time in HH:MM:SS
      // Use console.log to print it.
    }
  
    _tick() {
      // 1. Increment the time by one second.
      if (this.seconds === 59) {
        this.seconds = 0;
        if (this.minutes === 59) {
          this.minuetes = 0;
          //hours stuff here
        } else {
          this.minutes++;
        };
      } else {
        this.seconds++;
      };
      // 2. Call printTime.
    }
  }
  
  const clock = new Clock();