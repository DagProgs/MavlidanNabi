document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
  });
  
  document.addEventListener('mousedown', function(event) {
    if (event.button === 2) {
      event.preventDefault();
    }
  });
  