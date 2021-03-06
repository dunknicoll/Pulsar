var pulsar;
(function (pulsar) {
    (function (display) {
        var Bitmap9 = (function () {
            function Bitmap9() { }
            Bitmap9.canvas = document.createElement('canvas');
            Bitmap9.context = Bitmap9.canvas.getContext('2d');
            Bitmap9.render = function render(image, scale9Grid, width, height) {
                if (typeof width === "undefined") { width = 100; }
                if (typeof height === "undefined") { height = 100; }
                Bitmap9.context.clearRect(0, 0, Bitmap9.canvas.width, Bitmap9.canvas.height);
                Bitmap9.canvas.width = width;
                Bitmap9.canvas.height = height;
                var rows = [
                    0, 
                    scale9Grid.top, 
                    scale9Grid.bottom, 
                    image.height
                ];
                var cols = [
                    0, 
                    scale9Grid.left, 
                    scale9Grid.right, 
                    image.width
                ];
                var dRows = [
                    0, 
                    scale9Grid.top, 
                    height - (image.height - scale9Grid.bottom), 
                    height
                ];
                var dCols = [
                    0, 
                    scale9Grid.left, 
                    width - (image.width - scale9Grid.right), 
                    width
                ];
                var origin;
                var draw;
                for(var cx = 0; cx < 3; cx++) {
                    for(var cy = 0; cy < 3; cy++) {
                        origin = new pulsar.geom.Rectangle(cols[cx], rows[cy], cols[cx + 1] - cols[cx], rows[cy + 1] - rows[cy]);
                        draw = new pulsar.geom.Rectangle(dCols[cx], dRows[cy], dCols[cx + 1] - dCols[cx], dRows[cy + 1] - dRows[cy]);
                        Bitmap9.context.drawImage(image, origin.x, origin.y, origin.width, origin.height, draw.x, draw.y, draw.width, draw.height);
                    }
                }
                var resultImage = new Image();
                resultImage.src = Bitmap9.canvas.toDataURL();
                return resultImage;
            };
            return Bitmap9;
        })();
        display.Bitmap9 = Bitmap9;        
    })(pulsar.display || (pulsar.display = {}));
    var display = pulsar.display;
})(pulsar || (pulsar = {}));
