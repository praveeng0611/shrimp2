(function() {
    function toJSONString(form) {
        var obj = {};
        var elements = form.querySelectorAll("input, select");
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
        var form = document.getElementById("addsuppliment");
        var output = document.getElementById("output");
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            var json = toJSONString(this);
            //var json = toJSONString($("#form").serialize());
            jsonData = json;
            localStorage.setItem("jsonData", jsonData);
            var token = localStorage.getItem("token");


            var fData = {
                "name": $('#_name').val(),
                "companyName": $('#company_name').val()
            };
            console.log(fData);



            $.LoadingOverlay("show");

            $.ajax({
                type: 'POST',
                url: 'http://137.117.82.58:8000/api/v0/database/supplement',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': token,
                },
                crossDomain: true,
                dataType: 'json',
                data: JSON.stringify(fData),
                success: function(data) {

                    if (data.error == undefined) {
                        alert(data.message);
                        $("#addfeed").trigger("reset");
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

// Search supplement

$(document).ready(function() {
    $('#searchSupplimentData').click(function(e) {
        e.preventDefault();

        var token = localStorage.getItem("token");
        var searchField = $('#search').val();
        var exp = new RegExp(searchField, "i");
        $.ajaxSetup({
            headers: {
                'x-access-token': token
            }
        });
        // $("#result").html('<img src="assets/img/loading.gif">');
        $.LoadingOverlay("show");
        $.getJSON('http://137.117.82.58:8000/api/v0/database/supplement/' + searchField, function(data) {

            if (data.message == 'Internal error') {
                alert('Invalid Id :' + searchField);
                $.LoadingOverlay("hide");
            } else if (data.error == undefined) {
                setTimeout(function() {
                    $.each(data, function() {
                        $('#result').html(`
              <form class="form-horizontal">
                <div class="form-body">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>Feed ID</b></label>
                                <div class="col-md-6">
                                    <p class="form-control-static"> ${data.supplement._id} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>Name</b></label>
                                <div class="col-md-6">
                                    <p class="form-control-static"> ${data.supplement.name} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>Company Name</b></label>
                                <div class="col-md-6">
                                    <p class="form-control-static"> ${data.supplement.companyName} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            `);

                    });
                    $.LoadingOverlay("hide");
                }, 2000);
            } else {
                alert(data.error.message);
                $.LoadingOverlay("hide");
            }
        });
    });
});