$(document).ready(function() {

    var token = localStorage.getItem("token");
    $.ajaxSetup({
        headers: {
            'x-access-token': token
        }
    });
    var processorList = [];
    var pro_data;
    var l1;
    var j;
    $.getJSON("http://137.117.82.58:8000/api/v0/processors", function(data) {
        //$.each(data.processor.forEach(function(v) {
        console.log(data);
        var a = data.processor;
        l1 = a.length;
        // $("#123").html(`<select class="form-control" id="sell_to_pro1">
        //                     <option>Select Processor to sell</option></select>`);
        for (var j = 0; j < l1; j++) {
            console.log(j);
            pro_data = data.processor[j].processorId;
            processorList.push(pro_data);
            // console.log(processorList);
            // $("#sell_to_pro1").append(`<option value="${pro_data}">${pro_data}</option>`);
        }

        //  }))
    })
    $.LoadingOverlay("show");
    $.getJSON("http://137.117.82.58:8000/api/v0/shrimp/harvest/farm/farm_a", function(data) {
        if(data.harvest.length==0)
        {
            setTimeout(function(){
                alert('Request timed out, please try again');
                $.LoadingOverlay("hide");
            }, 10000);
        }
        console.log(data);
        var globalData = data.harvest;
        console.log(globalData);
        //  $.each(data.harvest.forEach(function(v) {
        var a = data.harvest;
        var l = a.reverse();
        // console.log(l);
        for (var i = 0; i < data.harvest.length; i++) {

            var sbf = data.harvest[i].soldByFarm;
            var containerCount = data.harvest[i].containers.length;
            var phtId = data.harvest[i].phtId ? data.harvest[i].phtId : 'none';
            var date = new Date(data.harvest[i].dateOfCreation);
            var cleanedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
            var status = !data.harvest[i].soldByFarm ? 'available' : data.harvest[i].stateOfSale;
            $("#sell_history").append(`
                  <tr class="odd gradeX">
                      <td class="redirect"><a>${data.harvest[i].qr}</a></td>
                      <td>${cleanedDate}</td>
                      <td>${containerCount}</td>
                      <td>${data.harvest[i].count}</td>
                      <td style="width:9%">${data.harvest[i].weight}</td>
                      <td style="width:7%">${data.harvest[i].pondNumber}</td>
                      <td>${phtId}</td>
                      <td style="width:20%" id="processor_name_dropdown${i}" class="load">${data.harvest[i].proposedProcessorId}</td>
                      <td style="width:6%" id="sell_btn${i}">${status}</td>
                  </tr>
                `)
            $.LoadingOverlay("hide");
            if (sbf == false) {
                // processorList now is an array with all the procesors
                console.log(processorList);
                $("#processor_name_dropdown" + i).html(`<select class="form-control selPro" id="sell_to_pro${i}">
                          <option>Select Processor to sell</option>
                          </select>`);
                for (var j = 0; j < processorList.length; j++) {
                    console.log('list ' + processorList[j]);
                    $(`#sell_to_pro${i}`).append(`<option id="pi" value="${processorList[j]}">${processorList[j]}</option>`);
                };
                $("#sell_btn" + i).html(`<button type="submit" style="margin-top: 0px;" class="btn green" id="sell_harvest${i}">Sell</button>`)

            }
            $("#sell_harvest" + i).click(function() {
                // alert(multipleValues);
                var fData = {
                    "harvestedShrimpQr": globalData[$(this).attr('id').substring(12)].qr,
                    "proposedProcessorId": $('.selPro').val()
                }
                console.log(fData);
                $.ajax({
                    type: 'POST',
                    url: 'http://137.117.82.58:8000/api/v0/shrimp/harvest/sell',
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
                            location.reload();
                        } else {
                            alert(data.error.message);
                        }

                    }
                });
            });
        }
        $(".redirect a").bind("click", function (e) {
            var qrValue = $(e.target).text();
            console.log(qrValue);
            var url = "farm_search_harvest.html?qr=" + encodeURIComponent(qrValue);
            window.location.href = url;
        });
    });
});