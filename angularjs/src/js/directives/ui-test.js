app.directive('uiTest',[function(){
	return {
		template:'<div>uiTest</div>',
		link :function(scope,element,attrs){
			console.log(attrs);
			
		}
	}
}])