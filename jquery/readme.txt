3.0 版本 

//版本支持
	Internet Explorer: 9+
	Chrome, Edge, Firefox, Safari: Current and Current - 1
	Opera: Current
	Safari Mobile iOS: 7+
	Android 4.0+


add: 

	on() 
	off()
	
	Deferred()
	
	
remove:
	3.0
	delegate()
	undelegate()
	
	bind() 
	unbind()
	
	jQuery.fx.interval
	
	
	1.10
	context()
	
	1.9
	support()
	jQuery.browser
	// 这个属性在jQuery 1.9已经被删除并且只能通过的jQuery.migrate插件使用
	
	1.8
	.unload()
	.toggle()
	.size()
	.load()
	.error()
	.andSelf()
	.deferred.pipe()
	
	1.7
	.selector
	.live
	jQuery.sub()
	.die()
	deferred.isResolved()
	deferred.isRejected()
	
	1.3
	jQuery.boxModel
	
// API--------------------------------------	
	$.ajax("/status")
   .then(
    // success
		function( data, textStatus, jqXHR ) { /* code */ },
		// error
		function( jqXHR, textStatus, errorThrown ) { /* code */ }
	
	)
   .catch(function(arg) {
      // this code executes after the error above
      // arg is an Error object, "whoops is not a function"
   });
   
  $.ajax("/status")
   .done(function(data) {
      whoops();
      // console shows: "whoops is not a function"
      // no further code executes in this function
   })
   .fail(function(arg) {
      // this code does not execute since the exception was not caught
   });
	
	var menuId = $( "ul.nav" ).first().attr( "id" );
	var request = $.ajax({
	  url: "script.php",
	  method: "POST",
	  data: { id : menuId },
	  dataType: "html"
	});
	 
	request.done(function( msg ) {
	  $( "#log" ).html( msg );
	});
	 
	request.fail(function( jqXHR, textStatus ) {
	  alert( "Request failed: " + textStatus );
	});
	
	
	
	
	