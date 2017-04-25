
// 启用 --strictNullChecks

/*function css(a: {}){
	
}*/
function add(name : string) :string
function add(age : number) : string 

function add(value : (string | number | boolean)) : string{
    switch (typeof value){
        case "string" :
            return `my name is ${value}.`;    //这里的(`)是键盘esc键下面的那个（`）并非单引号
        case "number" :
            return `my age is ${value}.`;
        case "boolean" :
            return `i am ${value}`;
    }
}