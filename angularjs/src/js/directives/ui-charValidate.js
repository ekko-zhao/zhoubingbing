app.directive('charValidate',[function(){
	return{
		restrict: 'A',
		require: '?ngModel',
		link: function(scope, ele, attrs, ngModel){
			if (!ngModel) return;
			var v = attrs.charValidate.split('|');
			var min = v[0] || 0;
			var max = v[1] || 1000;
			
			var f = Tools.chkstrlen;
			var required = attrs.required;
			scope.$watch(attrs.ngModel, function(v) {
				if(!required && !v) ngModel.$setValidity('charValidate', true);
				if (!v) return;
				if( f(v) >= min && f(v) <= max ){
					ngModel.$setValidity('charValidate', true);
				}else{
					ngModel.$setValidity('charValidate', false);
				}
			})
			
		}
	
	}
}]);