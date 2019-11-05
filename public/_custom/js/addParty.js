function addMediaLink(){
	$('<div class="party-media-container"><div class="form-group"><label for="media_title">Media Title</label><input type="text" class="form-control" id="media_title" name="media_title[]" placeholder="Enter Media Title"></div> <div class="row"> <div class="form-group col-md-6"><label for="media_photo">Media Photo</label> <input type="file" id="media_photo" name="media_photo[]"><p class="help-block">Upload Media Link (Format: JPEG, PNG ).</p></div><div class="form-group col-md-6"> <label for="media_link">Web Link</label><input type="text" class="form-control" id="media_link" name="media_link[]" placeholder="Enter Media Link"> </div></div> <div class="form-group"> <label for="media_description">Media Description</label><textarea class="form-control" id="media_description" name="media_description[]" rows="4" placeholder="Enter Media Description..."></textarea> </div></div>').appendTo($("#party-media-link-container"));
}


function addParty() {
	$("label.error").hide();
	$("#party_name").removeAttr("style");
	$('#party_name_error').hide(); 
	$("#party_abbreviation").removeAttr("style");
	$('#party_abbreviation_error').hide(); 
	$("#party_type").removeAttr("style");
	$('#party_type_error').hide(); 
	$("#party_logo").removeAttr("style");
	$('#party_logo_error').hide(); 
	$("#party_description").removeAttr("style");
	$('#party_description_error').hide(); 
	$("#party_website_link").removeAttr("style");
	$('#party_website_link_error').hide(); 

	jQuery.validator.setDefaults({
		debug: true,
		success: "valid"
	});

	var form = $( "#addPartyForm" );
	$("#addPartyForm").validate({

		rules: {
			party_name: "required",
			party_abbreviation: "required",
			party_type:"required",
			party_logo:"required",
			party_description:"required",
			party_website_link:"required",
		},

		messages: {
			party_name: "** Please Enter Party Name",
			party_abbreviation: "** Please Enter Party Abberviation",
			party_type:"** Please Select Party Type",
			party_logo:"** Please Upload Party Logo",
			party_description:"** Please Enter Party Description",
			party_website_link:"** Please Enter Party Website Link",
		},

	}).form();
	if(form.valid() === true ){
		addNow();
	}
}

function addNow(){
	var formData = new FormData($("#addPartyForm")[0]);	
	$.ajax({
		async: true,
		type: "POST",
		dataType: "json", 
		contentType: false, 
		url: "/registration/addPartyInformation", 
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