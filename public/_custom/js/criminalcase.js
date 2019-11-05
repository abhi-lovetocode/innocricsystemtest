$('.datepicker').datepicker({
    format: 'd M yyyy'

});



function addCase() {
    $("label.error").hide();
    $("#case_name").removeAttr("style");
    $('#case_name_error').hide();
    $("#case_number").removeAttr("style");
    $('#case_number_error').hide();
    $("#case_date").removeAttr("style");
    $('#case_date_error').hide();
    $("#case_description").removeAttr("style");
    $('#case_description_error').hide();
    $("#ipc_section").removeAttr("style");
    $('#ipc_section_error').hide();
    $("#case_meter").removeAttr("style");
    $('#case_meter_error').hide();


    jQuery.validator.setDefaults({
        debug: true,
        success: "valid"
    });

    var form = $("#addCaseForm");
    $("#addCaseForm").validate({

        rules: {
            case_name: "required",
            case_number: "required",
            case_date: "required",
            case_description: "required",
            ipc_section: "required",
            case_meter: "required",


        },

        messages: {
            case_name: "** Please Enter Case Name",
            case_number: "** Please Enter Case Number",
            case_date: "** Please Enter Case Date",
            case_description: "** Please Enter Case Description",
            ipc_section: "* Please Enter IPC Section",
            case_meter: "** Please Enter Case Meter",

        },

    }).form();
    if (form.valid() === true) {
        addNow();
    }
}

function addNow() {
    var formData = new FormData($("#addCaseForm")[0]);
    $.ajax({
        async: true,
        type: "POST",
        dataType: "json",
        contentType: false,
        url: "/candidate/storeCriminalCase",
        data: formData,
        processData: false,
        success: function(response) {

            var code = response.code;
            if (code == 201) {
                var message = response.message;
                $('#modal').modal('show');
                $('#modelbody').html(message);


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



function CaseUpdate() {
    $("label.error").hide();
    $("#case_name").removeAttr("style");
    $('#case_name_error').hide();
    $("#case_number").removeAttr("style");
    $('#case_number_error').hide();
    $("#case_date").removeAttr("style");
    $('#case_date_error').hide();
    $("#case_description").removeAttr("style");
    $('#case_description_error').hide();
    $("#ipc_section").removeAttr("style");
    $('#ipc_section_error').hide();
    $("#case_meter").removeAttr("style");
    $('#case_meter_error').hide();


    jQuery.validator.setDefaults({
        debug: true,
        success: "valid"
    });

    var form = $("#addCaseForm");
    $("#addCaseForm").validate({

        rules: {
            case_name: "required",
            case_number: "required",
            case_date: "required",
            case_description: "required",
            ipc_section: "required",
            case_meter: "required",


        },

        messages: {
            case_name: "** Please Enter Case Name",
            case_number: "** Please Enter Case Number",
            case_date: "** Please Enter Case Date",
            case_description: "** Please Enter Case Description",
            ipc_section: "* Please Enter IPC Section",
            case_meter: "** Please Enter Case Meter",

        },

    }).form();
    if (form.valid() === true) {
        updateNow();
    }
}

function updateNow() {
    var formData = new FormData($("#addCaseForm")[0]);
    $.ajax({
        async: true,
        type: "POST",
        dataType: "json",
        contentType: false,
        url: "/candidate/updateCriminalCase",
        data: formData,
        processData: false,
        success: function(response) {

            var code = response.code;
            if (code == 201) {
                var message = response.message;
                $('#modal').modal('show');
                $('#modelbody').html(message);


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