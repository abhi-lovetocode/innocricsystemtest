function addWebLink(){
	$(' <div class="col-md-12"><div class="form-group col-md-6"><label for="web_name">Name</label><input type="text" class="form-control" id="web_name" name="web_name[]" placeholder="Enter  Name"></div><div class="form-group col-md-6"><label for="web_link">Web Link</label><input type="text" class="form-control" id="web_link" name="web_link[]" placeholder="Enter Web Link"></div></div>').appendTo($("#state-web-link-container"));
}




function addState() {
	$("label.error").hide();
	$("#state_name").removeAttr("style");
	$('#state_name_error').hide(); 
	$("#state_description").removeAttr("style");
	$('#state_description_error').hide(); 
	$("#offical_language").removeAttr("style");
	$('#offical_language_error').hide(); 
	$("#offical_website").removeAttr("style");
	$('#offical_website_error').hide(); 
	$("#state_image").removeAttr("style");
	$('#state_image_error').hide(); 


	jQuery.validator.setDefaults({
		debug: true,
		success: "valid"
	});

	var form = $( "#addStateForm" );
	$("#addStateForm").validate({

		rules: {
			state_name: "required",
			state_description: "required",
			offical_language:"required",
			offical_website:"required",
			state_image:"required",
		},

		messages: {
			state_name: "** Please Enter State Name",
			state_description: "** Please Enter State Description",
			offical_language:"** Please Enter State Offical Language",
			offical_website:"** Please Enter State Offical Website",
			state_image:"** Please Upload State Image",
		},

	}).form();
	if(form.valid() === true ){
		addNow();
	}
}

function addNow(){
	var formData = new FormData($("#addStateForm")[0]);	
	$.ajax({
		async: true,
		type: "POST",
		dataType: "json", 
		contentType: false, 
		url: "/registration/addStateInformation", 
		data: formData, 
		processData: false, 
		success: function(response) {

			var code = response.code;
			if(code == 201){
				var message = response.message;
				$('#modal').modal('show'); 
				$('#modelbody').html(message);

				
			} 
			else if(code == 509){
				var message = response.error;
				$.each( response.error, function( index, value ) {
					var errorDiv = '#'+index+'_error';
					$(errorDiv).show();
					$(errorDiv).html(value);
					$('#'+index).attr('style', "border-radius: 5px; border:#FF0000 1px solid;");
				});


			}
		},




		error: function (request, status, error) {
			var parsedJson = $.parseJSON(request.responseText);
			$('#error').show();
			$('#error').html(parsedJson.error);

		},
		timeout: 10000
	});
}