function addWebLink(){
	$("#Constituency-web-link-container").append(' <div class="col-md-12"><div class="form-group col-md-6"><label for="web_name">Name</label><input type="text" class="form-control" id="web_name" name="web_name" placeholder="Enter  Name"></div><div class="form-group col-md-6"><label for="web_link">Web Link</label><input type="text" class="form-control" id="web_link" name="web_link" placeholder="Enter Web Link"></div></div>');
}

/*** function to get district list of respective state ****/



function getDistrict(id){
	//alert($( "#Constituency_state" ).val());
	if(id.value != ''){
		//alert(id.value);
		
		var val = id.value;

		$.ajaxSetup({
			headers: {
				'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
			}
		});
		$.ajax({

			type: "POST",
			url: "/registration/get/districts", 
			data:  { 'id' : val,},

			success: function(response) {

				if(response.code === 201){
					var districts = response.districts;
					//alert(districts.length);
					$("#Constituency_district").empty();
					$("#Constituency_district").append('<option selected value="">-- Select Constituency District --</option>');
					for(var i = 0; i < districts.length; i++)
					{
						$("#Constituency_district").append("<option value='"+districts[i].id+"'>"+ districts[i].name+"</option>");

					}
				}
			},

			error: function (request, status, error) {

				alert(error);

			},
			timeout: 10000
		});

	}
}



function addConstituency() {
	$("label.error").hide();
	$("#Constituency_name").removeAttr("style");
	$('#Constituency_name_error').hide(); 
	$("#Constituency_state").removeAttr("style");
	$('#Constituency_state_error').hide(); 
	$("#Constituency_district").removeAttr("style");
	$('#Constituency_district_error').hide(); 
	$("#Constituency_description").removeAttr("style");
	$('#Constituency_description_error').hide(); 
	$("#Constituency_image").removeAttr("style");
	$('#Constituency_image_error').hide(); 


	jQuery.validator.setDefaults({
		debug: true,
		success: "valid"
	});

	var form = $( "#addConstituencyForm" );
	$("#addConstituencyForm").validate({

		rules: {
			Constituency_name: "required",
			Constituency_state: "required",
			Constituency_district:"required",
			Constituency_description:"required",
			Constituency_image:"required",
		},

		messages: {
			Constituency_name: "** Please Enter Constituency Name",
			Constituency_state: "** Please Select Constituency State",
			Constituency_district:"** Please Select Constituency District",
			Constituency_description:"** Please Enter Constituency Description",
			Constituency_image:"** Please Upload Constituency Image",
		},

	}).form();
	if(form.valid() === true ){
		addNow();
	}
}

function addNow(){
	var formData = new FormData($("#addConstituencyForm")[0]);	
	$.ajax({
		async: true,
		type: "POST",
		dataType: "json", 
		contentType: false, 
		url: "/registration/addConstituencyInformation", 
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