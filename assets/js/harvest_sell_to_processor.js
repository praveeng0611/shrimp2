// function getUrlParam(param) {
//     param = param.replace(/([\[\](){}*?+^$.\\|])/g, "\\$1");
//     var regex = new RegExp("[?&]" + param + "=([^&#]*)");
//     var url = decodeURIComponent(window.location.href);
//     var match = regex.exec(url);
//     return match ? match[1] : "";
// }
// var param = getUrlParam("login");

$(document).ready(function() {
    var token = localStorage.getItem("token");
    $.ajaxSetup({
        headers: {
            'x-access-token': token
        }
    });


    $.getJSON("http://137.117.82.58:8000/api/v0/shrimp/harvest/processor/processor_a/completed", function(data) {

        // $.each(data.harvest.forEach(function(v) {

            var a = data.harvest;
            a.reverse();
            var i;
            for (i = 0; i < data.harvest.length; i++) {
                var car1 = data.harvest[i].containers;
                var carl1 = car1.length;
                // console.log(phtcerti);
                $("#view_data_of_harvest_completed").append(`
                <tr class="odd gradeX">
                    <td class="redirect"><a>${data.harvest[i].qr}</a></td>
                    <td>${data.harvest[i].dateOfCreation[8]+data.harvest[i].dateOfCreation[9]+data.harvest[i].dateOfCreation[7]+data.harvest[i].dateOfCreation[5]+data.harvest[i].dateOfCreation[6]+data.harvest[i].dateOfCreation[4]+data.harvest[i].dateOfCreation[0]+data.harvest[i].dateOfCreation[1]+data.harvest[i].dateOfCreation[2]+data.harvest[i].dateOfCreation[3]}</td>
                    <td>${carl1}</td>
                    <td>${data.harvest[i].count}</td>
                    <td style="width:9%">${data.harvest[i].weight}</td>
                    <td style="width:7%">${data.harvest[i].pondNumber}</td>
                    <td>${data.harvest[i].phtId}</td>
                    <td>${data.harvest[i].farmId}</td>
                    <td>${data.harvest[i].stateOfSale}</td>
                </tr>
              `);

            }
            $(".redirect a").bind("click", function (e) {
                var qrValue = $(e.target).text();
                console.log(qrValue);
                var url = "farm_search_harvest.html?qr=" + encodeURIComponent(qrValue);
                window.location.href = url;
            });
        // }));

    });
});

// View Harvest
$(document).ready(function() {
    var token = localStorage.getItem("token");
    $.ajaxSetup({
        headers: {
            'x-access-token': token
        }
    });

    function getUrlParam(param) {
        param = param.replace(/([\[\](){}*?+^$.\\|])/g, "\\$1");
        var regex = new RegExp("[?&]" + param + "=([^&#]*)");
        var url = decodeURIComponent(window.location.href);
        var match = regex.exec(url);
        return match ? match[1] : "";
    }
    var param = getUrlParam("login");


    $.getJSON("http://137.117.82.58:8000/api/v0/shrimp/harvest/processor/processor_a/pending", function(data) {

        // $.each(data.harvest.forEach(function(v) {

            // var a = data.harvest;
            // var b = a.length;
            for (var i = 0; i < data.harvest.length; i++) {
                var car = data.harvest[i].containers;
                var carl = car.length;
                // console.log(phtcerti);
                $("#view_data_of_harvest").append(`
                <tr class="odd gradeX">
                    <td class="redirect"><a>${data.harvest[i].qr}</a></td>
                    <td>${data.harvest[i].dateOfCreation[8]+data.harvest[i].dateOfCreation[9]+data.harvest[i].dateOfCreation[7]+data.harvest[i].dateOfCreation[5]+data.harvest[i].dateOfCreation[6]+data.harvest[i].dateOfCreation[4]+data.harvest[i].dateOfCreation[0]+data.harvest[i].dateOfCreation[1]+data.harvest[i].dateOfCreation[2]+data.harvest[i].dateOfCreation[3]}</td>
                    <td>${carl}</td>
                    <td>${data.harvest[i].count}</td>
                    <td style="width:9%">${data.harvest[i].weight}</td>
                    <td style="width:7%">${data.harvest[i].pondNumber}</td>
                    <td>${data.harvest[i].phtId}</td>
                    <td>${data.harvest[i].farmId}</td>
                    <td><a href="processor_confirm_purchase.html" class="btn green" id="view_harvest_data">VIEW</a></td>
                </tr>
              `);

            }
            $(".redirect a").bind("click", function (e) {
                var qrValue = $(e.target).text();
                console.log(qrValue);
                var url = "farm_search_harvest.html?qr=" + encodeURIComponent(qrValue);
                window.location.href = url;
            });
        // }));

    });

});

// document.getElementById("view_data").onclick = function() {
//     location.href = "processor_confirm_purchase.html";
// };
$('#view_data').click(function(){
    window.location.href = "processor_confirm_purchase.html";
})