var countDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < countDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",

    function(){

      switch (this.innerHTML) {
        case "w": //innerHTML value between <button></button>, not a class
          var tom1 = new Audio ('sounds/tom-1.mp3');
          tom1.play();
          console.log(this.innerHTML);
        break;
        case "a":
          var tom2 = new Audio ('sounds/tom-2.mp3');
          tom2.play();
          console.log(this.innerHTML);
        break;
        case "s":
          var tom3 = new Audio ('sounds/tom-3.mp3');
          tom3.play();
          console.log(this.innerHTML);
        break;
        case "d":
          var tom4 = new Audio ('sounds/tom-4.mp3');
          tom4.play();
          console.log(this.innerHTML);
        break;
        case "j":
          var tom5 = new Audio ('sounds/crash.mp3');
          tom5.play();
          console.log(this.innerHTML);
        break;
        case "k":
          var tom6 = new Audio ('sounds/kick-bass.mp3');
          tom6.play();
          console.log(this.innerHTML);
        break;
        case "l":
          var tom7 = new Audio ('sounds/snare.mp3');
          tom7.play();
          console.log(this.innerHTML);
        break;
        default:
          console.log("Error!");
      }

});

}

document.addEventListener("keydown", function(event){
  console.log(event.key);


  switch (event.key) {
    case "w":
      var tom1 = new Audio ('sounds/tom-1.mp3');
      tom1.play();
      console.log(this.innerHTML);
    break;
    case "a":
      var tom2 = new Audio ('sounds/tom-2.mp3');
      tom2.play();
      console.log(this.innerHTML);
    break;
    case "s":
      var tom3 = new Audio ('sounds/tom-3.mp3');
      tom3.play();
      console.log(this.innerHTML);
    break;
    case "d":
      var tom4 = new Audio ('sounds/tom-4.mp3');
      tom4.play();
      console.log(this.innerHTML);
    break;
    case "j":
      var tom5 = new Audio ('sounds/crash.mp3');
      tom5.play();
      console.log(this.innerHTML);
    break;
    case "k":
      var tom6 = new Audio ('sounds/kick-bass.mp3');
      tom6.play();
      console.log(this.innerHTML);
    break;
    case "l":
      var tom7 = new Audio ('sounds/snare.mp3');
      tom7.play();
      console.log(this.innerHTML);
    break;
    default:
      console.log("Error!");
}
});
