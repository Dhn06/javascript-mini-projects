  function updateClock() {
      const now = new Date();

      // Time
      let hours = now.getHours();
      let minutes = now.getMinutes();
      let seconds = now.getSeconds();

      // Pad with leading zeros
      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      const timeOfDay = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12; // Convert to 12-hour format
        span = timeOfDay;
        
        

      document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}`;

      // Date
      const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
      document.getElementById("date").textContent = now.toLocaleDateString(undefined, options);
    }

    // Initial call + interval
    updateClock();
    setInterval(updateClock, 1000);