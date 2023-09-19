let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
  cursor: "<span style='color: #9b617c;'>|</span>"
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #9b617c;">Ingeniera de software y redes. </span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
