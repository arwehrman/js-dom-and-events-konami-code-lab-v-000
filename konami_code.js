const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

//keep track of index count
let index = 0;

function init() {
  document.body.addEventListener('keydown', function onKeyDownHandler(e) {
    const key = parseInt(e.detail || e.which);

    if (key === code[index]) {
      index++;

      if (index === code.length) {
        alert('Konami Code!');

        index = 0;
      }
    } else {
      //if key doesn't equal code than set counter back to zero
      index = 0;
    }
  });
}
