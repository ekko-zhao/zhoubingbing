
// 启用 --strictNullChecks

class Car{
	//engine: string;
	constructor(public engine: string){
		//this.engine = engine;
	}
	drive(distanceInMeters: number=0){
		console.log(`A car run ${distanceInMeters}m power by `+ this.engine)
	}
}

export default Car ;
