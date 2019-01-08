$(document).ready(function () {
    $('#login').click(function () {

        let user = $('#user').val();
        let password = $('#password').val();
        let error = true;

        $.ajax({
            type: 'POST',
            url: 'http://137.117.82.58:8000/api/v0/users/login',
            dataType: 'json',
            data: {
                'username': user,
                'password': password
            },
            success: function (data) {

                if (data.error) {
                    alert(data.error.message);
                } else {
                    localStorage.setItem("token", data.authToken);
                    // console.log(data.authToken);
                    // document.location = 'dashboard.php?login=' + user;
                    document.location = 'dashboard.php';
                }
            }
        });

        return false;
    });
});