class Control {
    state: any ;
}
interface SelectableControl extends Control {
    select(): void;
	
}


class Button extends Control {
    select() { }
	
	
}
console.log(new Button())