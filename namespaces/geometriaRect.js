"use strict";
//NAMESPACE
var Geometria;
(function (Geometria) {
    let Area;
    (function (Area) {
        function retangulo(base, altura) {
            return base * altura; //Área do retângulo
        }
        Area.retangulo = retangulo;
    })(Area = Geometria.Area || (Geometria.Area = {}));
})(Geometria || (Geometria = {}));
//# sourceMappingURL=geometriaRect.js.map