import { Injectable } from '@angular/core';
@Injectable()
export class SharedService{
	list: string[] = ['3','5'];
	append(str: string){
		this.list.push(str)
	}
}