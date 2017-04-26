// 启用 --strictNullChecks
var Car = (function () {
    //engine: string;
    function Car(engine) {
        //this.engine = engine;
    }
    Car.prototype.drive = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log("A car run " + distanceInMeters + "m power by " + this.engine);
    };
    return Car;
}());
/*var Acar  = new Car('beichi');
console.log(Acar);*/ 
