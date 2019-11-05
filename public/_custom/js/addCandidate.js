$('.datepicker').datepicker({
	format: 'd M yyyy'

});


function addCandidate() {
	$("label.error").hide();
	$("#candidate_name").removeAttr("style");
	$('#candidate_name_error').hide(); 
	$("#date_of_birth").removeAttr("style");
	$('#date_of_birth_error').hide(); 
	$("#candidate_image").removeAttr("style");
	$('#candidate_image_error').hide(); 
	$("#candidate_phone_number").removeAttr("style");
	$('#candidate_phone_number_error').hide(); 
	$("#candidate_email").removeAttr("style");
	$('#candidate_email_error').hide(); 
	$("#candidate_address").removeAttr("style");
	$('#candidate_address_error').hide(); 
	


	jQuery.validator.setDefaults({
		debug: true,
		success: "valid"
	});

	var form = $( "#addCandidateForm" );
	$("#addCandidateForm").validate({

		rules: {
			candidate_name: "required",
			date_of_birth: "required",
			candidate_image:"required",
			candidate_email:{
				required: true,
				email : true,
			},
			candidate_address:"required",
			candidate_phone_number:{
				required: true,
				number: true,
				maxlength: 10,
				minlength:10,

			},
		},

		messages: {
			candidate_name: "** Please Enter Candidate Name",
			date_of_birth: "** Please Select Candidate Date Of Birth",
			candidate_image:"** Please Upload Candidate Image",
			candidate_phone_number:"** Please Enter Candidate Phone Number",
			candidate_email:"** Please Enter Candidate Email Id",
			candidate_address:"** Please Enter Candidate Address",
		},

	}).form();
	if(form.valid() === true ){
		addNow();
	}
}

function addNow(){
	var formData = new FormData($("#addCandidateForm")[0]);	
	$.ajax({
		async: true,
		type: "POST",
		dataType: "json", 
		contentType: false, 
		url: "/registration/addCandidateInformation", 
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