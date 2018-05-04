$(document).ready(function() {
   $("#button").click(function() {
       $("#boo").text("Boo!");
   });
   $('#email-button').click(function() {
      $("#email-link").toggle();
   });
   $('#mail-button').click(function() {
      $('#mail-address').toggle();
   });
});