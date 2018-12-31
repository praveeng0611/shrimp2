$(document).ready(function() {
    $(function() {
        $('#datetimepicker6').datetimepicker({
            useCurrent: true,
            format: 'YYYY/MM/DD HH:mm'
        });
        // $('#datetimepicker7').datetimepicker({useCurrent: true, format:'YYYY/MM/DD HH:mm'});
        // $('#datetimepicker8').datetimepicker({useCurrent: true, format:'YYYY/MM/DD HH:mm'});
        var dp7 = $('#datetimepicker7').datepicker('getDate');
        $('#datetimepicker8').datepicker({
            // format:'YYYY/MM/DD HH:mm',
            startDate: 'dp7'
        });
        $('#datetimepicker9').datetimepicker({
            useCurrent: true,
            format: 'YYYY/MM/DD HH:mm'
        });
        $('#datetimepicker10').datetimepicker({
            useCurrent: true,
            format: 'YYYY/MM/DD HH:mm'
        });
        $('#datetimepicker13').datetimepicker({
            useCurrent: true,
            format: 'YYYY/MM/DD HH:mm'
        });

    });
});