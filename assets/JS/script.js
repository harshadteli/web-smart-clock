  let alarmTime = null;
    let alarmSet = false;

    function updateClock() {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, '0');
      const m = String(now.getMinutes()).padStart(2, '0');
      const s = String(now.getSeconds()).padStart(2, '0');
      const currentTime = `${h}:${m}:${s}`;
      document.getElementById("clock").textContent = currentTime;

      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      document.getElementById("date").textContent = now.toLocaleDateString('en-US', options);

      // Alarm check
      if (alarmSet && alarmTime === `${h}:${m}` && s === "00") {
        document.getElementById("alarmAudio").play();
        setTimeout(() => alert("⏰ Alarm: Time's up!"), 200);
        alarmSet = false;
      }
    }

    setInterval(updateClock, 1000);
    updateClock();

    function playGreeting() {
      const audio = document.getElementById("aiGreeting");
      audio.play();
      document.getElementById("gifContainer").style.display = "block";
      document.getElementById("voiceAnimation").style.display = "block";
    }

    function hideVisuals() {
      document.getElementById("gifContainer").style.display = "none";
      document.getElementById("voiceAnimation").style.display = "none";
    }

    function toggleTheme() {
        const theme = document.getElementById("theme");
     theme.play();
      document.body.classList.toggle("theme-light");
    }

    function setAlarm() {
      const input = document.getElementById("alarmTime").value;
      if (input) {
        alarmTime = input;
        alarmSet = true;
        alert(`✅ Alarm set for ${input}`);
      } else {
        alert("⚠️ Please select a time first.");
      }
    }

    // Auto Greeting on Page Load
    window.onload = () => {
      setTimeout(() => {
        playGreeting();
      }, 1000);
    };