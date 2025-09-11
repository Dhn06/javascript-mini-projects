let countdownInterval;

    function startCountdown() {
      // Clear any previous countdown
      clearInterval(countdownInterval);

      const targetInput = document.getElementById("targetDate").value;
      if (!targetInput) {
        alert("Please select a target date and time!");
        return;
      }

      const targetDate = new Date(targetInput).getTime();

      countdownInterval = setInterval(function () {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance <= 0) {
          clearInterval(countdownInterval);
          document.getElementById("days").textContent = 0;
          document.getElementById("hours").textContent = 0;
          document.getElementById("minutes").textContent = 0;
          document.getElementById("seconds").textContent = 0;
          alert("🎉 Countdown Complete!");
          return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (distance % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor(
          (distance % (1000 * 60)) / 1000
        );

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
      }, 1000);
    }