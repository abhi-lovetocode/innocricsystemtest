


function addSpecialization() {
	$("label.error").hide();
	$("#specialization_name").removeAttr("style");
	$('#specialization_name_error').hide(); 


	jQuery.validator.setDefaults({
		debug: true,
		success: "valid"
	});

	var form = $( "#addSpecializationForm" );
	$("#addSpecializationForm").validate({

		rules: {
			specialization_name: "required",
		},

		messages: {
			specialization_name: "** Please Enter Specilization Name",
		},

	}).form();
	if(form.valid() === true ){
		addNow();
	}
}

function addNow(){
	var formData = new FormData($("#addSpecializationForm")[0]);	
	$.ajax({
		async: true,
		type: "POST",
		dataType: "json", 
		contentType: false, 
		url: "/specialization/store", 
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





function updateSpecialization() {
	$("label.error").hide();
	$("#specialization_name").removeAttr("style");
	$('#specialization_name_error').hide(); 


	jQuery.validator.setDefaults({
		debug: true,
		success: "valid"
	});

	var form = $( "#updateSpecializationForm" );
	$("#updateSpecializationForm").validate({

		rules: {
			specialization_name: "required",
		},

		messages: {
			specialization_name: "** Please Enter Specilization Name",
		},

	}).form();
	if(form.valid() === true ){
		addNow();
	}
}

function updateNow(){
	var formData = new FormData($("#updateSpecializationForm")[0]);	
	$.ajax({
		async: true,
		type: "POST",
		dataType: "json", 
		contentType: false, 
		url: "/specialization/"+$("#pid").val(), 
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