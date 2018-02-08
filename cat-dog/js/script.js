$(document).ready(function() {
  $("button#meow").click(function() {
    $("ul#user").append("<li>Meow!</li>");
    $("ul#webpage").append("<li>Meow, Hiss, Meow!</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });
  $("button#bark").click(function() {
    $("ul#user").append("<li>Bark</li>");
    $("ul#webpage").append("<li>Woof, Bark, Woof!</li>");
  });
});
