(function() {
    function toJSONString(form) {
        var obj = {};
        var elements = form.querySelectorAll("input, textarea, select");
        for (var i = 0; i < elements.length; ++i) {
            var element = elements[i];
            var name = element.name;
            var value = element.value;

            if (name) {
                obj[name] = value;
            }
        }

        return JSON.stringify(obj);
    }
    var jsonData;

    document.addEventListener("DOMContentLoaded", function() {
        var isError = false;
        var form = document.getElementById("registration_frm");
        var output = document.getElementById("output");
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            var json = toJSONString(this);
            //var json = toJSONString($("#form").serialize());
            jsonData = json;
            localStorage.setItem("jsonData", jsonData);
            //window.alert(json);
            var token = localStorage.getItem("token");


            var fData = {

                "username": $("#new_user").val(),
                "password": $("#password").val(),
                "confirmPassword": $("#c_password").val(),
                "emailId": $("#email_id1").val(),
                "userType": $('#user_type').val()

            };


            if ($("#new_user").val() === "" || $("#password").val() === "" || $("#c_password").val() === "" || $("#email_id1").val() === "" || $("#user_type").val() === "") {
                $.LoadingOverlay("hide");
                return false;
            } else {
                $.LoadingOverlay("show");
            }


            $.ajax({
                type: 'POST',
                url: 'http://137.117.82.58:8000/api/v0/users',
                headers: {
                    'Content-Type': 'application/json',
                    // 'x-access-token': token,
                },
                crossDomain: true,
                dataType: 'json',
                //data: localStorage.getItem("jsonData"),
                //contentType: 'application/json; charset=utf-8',
                //data: $("form").serializeArray(),
                //data: JSON.stringify($("form").serialize()),
                data: JSON.stringify(fData),
                success: function(data) {

                    if (data.error == undefined) {

                        alert(data.message);
                        document.location = 'index.html';
                        // $("#registration_frm").trigger("reset");
                        $.LoadingOverlay("hide");
                    } else {
                        alert(data.error.message);
                        $.LoadingOverlay("hide");
                    }


                }
            });

        }, false);

    });

})();