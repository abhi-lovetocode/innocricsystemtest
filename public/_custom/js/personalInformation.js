function addSpouse() {
    $(' <input type="text" class="form-control custom-input" id="candidate_spouse_name" name="candidate_spouse_name[]" placeholder="Enter Spouse Name">').appendTo($("#spouse-container"));
}

function addChildren() {
    $('<input type="text" class="form-control custom-input" id="candidate_child_name" name="candidate_child_name[]" placeholder="Enter Child Name">').appendTo($("#children-container"));
}



function addPersonsalInformation() {
    var formData = new FormData($("#CandidatePersonalInformationForm")[0]);

    $.ajax({
        async: true,
        type: "POST",
        dataType: "json",
        contentType: false,
        url: "/candidate/addPersonalInformation",
        data: formData,
        processData: false,
        success: function(response) {

            var code = response.code;
            if (code == 201) {
                var message = response.message;
                $('#modal').modal('show');
                $('#modelbody').html(message);
                $('.modal-footer').html('<button type="button" class="btn btn-primary" onclick="pagereload()">ok</button>');

            } else if (code == 509) {
                var message = response.error;
                $.each(response.error, function(index, value) {
                    var errorDiv = '#' + index + '_error';
                    $(errorDiv).show();
                    $(errorDiv).html(value);
                    $('#' + index).attr('style', "border-radius: 5px; border:#FF0000 1px solid;");
                });


            }
        },




        error: function(request, status, error) {
            var parsedJson = $.parseJSON(request.responseText);
            $('#error').show();
            $('#error').html(parsedJson.error);

        },
        timeout: 10000
    });
}



function pagereload() {
    location.reload();
}