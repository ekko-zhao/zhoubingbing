

import {default as Car} from'./hello.ts';

class Dazhong extends Car{
	drive(distanceInMeters: number=100){
		console.log(`B car run ${distanceInMeters}m power by `+ this.engine)
	}
}


/*
var Acar  = new Car('beichis');
Acar.drive(100);
*/

var Acar  = new Dazhong('Dazhong');
Acar.drive(100);