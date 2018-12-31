// Wait for the DOM to be ready
$(function() {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("form[name='addfarm']").validate({
        // Specify validation rules
        rules: {

            phtRegistrationId: {
                required: true
            }

        }

    });
});