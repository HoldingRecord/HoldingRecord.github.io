document.addEventListener("contextmenu", function(e){
    e.preventDefault();
  }, false);
  document.addEventListener("keydown", function(e) {
    if (e.key === "F12") {
      console.log("Developer tools detected!");
    }
  });
