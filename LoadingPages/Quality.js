function Snow() {
    const numSnowflakes = 50;
    const snowflakes = document.getElementById("snowflakes");
  
    for (let i = 0; i < numSnowflakes; i++) {
      const snowflake = document.createElement("div");
      snowflake.classList.add("snowflake");
      snowflake.style.left = `${Math.random() * 100}%`;
      snowflake.style.animationDuration = `${Math.random() * 3 + 1}s`;
      snowflake.style.animationDelay = `${Math.random()}s`;
      snowflakes.appendChild(snowflake);
    }
  }
  
  Snow();
  
    window.onload = function() {
      playMusic('/MainPage/Audios/AI.mp3');
    };
    
    function playMusic(musicSrc) {
      var audio = new Audio(musicSrc);
      audio.play();
    }