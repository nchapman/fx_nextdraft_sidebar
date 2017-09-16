document.addEventListener('DOMContentLoaded', function () {
  let $content = document.getElementById('content');

  // Show the iframe once it loads
  $content.addEventListener('load', function () {
    $content.style.opacity = 1;
  });
});
