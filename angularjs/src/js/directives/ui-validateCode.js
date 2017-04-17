"use strict";
app.directive('validateText',[function(){
	return {
		scope: {
            conf: '='
        },
		link: function(scope, ele, attrs){
			scope.conf = scope.conf || {};
			if(!scope.conf.codeText){
				scope.conf.codeText = '点击发送';
			}
			ele.click(function(){
				scope.conf.codeFlag = true;
				var time = 60;
				scope.conf.codeText = time+' 秒';
				scope.$apply();
				scope.conf.timer = setInterval(function(){
					time--;
					scope.conf.codeText = time+' 秒';
					
					if(time == 0){
						scope.conf.codeFlag = false;
						scope.conf.codeText = '重新发送';
						time = 60;
						clearInterval(scope.conf.timer);
					}
					scope.$apply();
				},1000)
				
				scope.conf.init = function(){
					scope.conf.codeFlag = false;
					scope.conf.codeText = '重新发送';
					clearInterval(scope.conf.timer);
				}
				
			})
		}	
	}
}])


