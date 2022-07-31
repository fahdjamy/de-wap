$(document).ready(function () {
  console.log("setting up!!!");

  $("#start").click(() => {
    lostGameMode = false;
    playingGameMode = true;
    $(".boundary").removeClass("youlose");
    $("#status").text('Click the "S" to begin.');
  });

  $('html *:not(#maze):not(#start):not(#end)').mouseover((event) => {
    if (playingGameMode) {
      const curId = event.target.id;
      if (!["start", "end", "maze"].includes(curId)) {
        // console.log('||||', event.target.id);
        red();
      }
    }
  });
  $(".boundary").mouseover(red);
  $("#end").mouseover(end);
});

let lostGameMode = false; // happens when you hit a wall
let playingGameMode = false;

const red = () => {
  if (playingGameMode) {
    lostGameMode = true;
    $(".boundary").addClass("youlose");
  }
}

const end = () => {
  if (playingGameMode) {
    const displayMsg = !lostGameMode ? "You win! :]" : "You lose!";
    $("#status").text(displayMsg);
    playingGameMode = false;
  }
}
