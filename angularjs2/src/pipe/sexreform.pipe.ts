import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'sexReform'})
export class SexReform implements PipeTransform{
	transform(val:string): string{
		switch(val){
			case 'male': return '男';
			case 'female': return '女';
			default: return '未知性别';
		}
	}
}