function getMousePosition(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function draw() {
    var canvas = document.getElementById('SimpleCanvas');
    var context = canvas.getContext('2d');

    canvas.addEventListener('mousemove', function (evt) {
        var mousePos = getMousePosition(canvas, evt);
        var width = window.innerWidth;
        var height = window.innerHeight;

        if (mousePos.x < 200 || mousePos.y < 200) {
            canvas.style.backgroundColor = 'rgb(' + 256 + ',' + mousePos.x + ',' + mousePos.y + ')';
        } else {
            canvas.style.backgroundColor = 'rgb(' + 256 + ',' + 256 - mousePos.x + ',' + 256 - mousePos.y + ')';
        }
        console.log(width, height);
    }, false);
}
