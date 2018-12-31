$(function() {

    $("form[name='addphtCertificate']").validate({
        // Specify validation rules
        rules: {

            phtCertificateId: {
                required: true
            },
            sampleId: {
                required: true
            },
            farmerName: {
                required: true
            }
            // address:
            // {
            //   id:{
            //   required : true }
            // }
            // dateOfIssue:
            // {
            //   required : true
            //   date : true
            // }
            // dateOfAnalysis:
            // {
            //   required : true
            // }
            // dateOfCollection:
            // {
            //   required : true
            // }
            // validUpto:
            // {
            //   required : true
            // }

            // farm:
            // {
            //   required : true
            // }
            // pondId:
            // {
            //   required : true
            // }
            // expectedProduction:
            // {
            //   required : true
            // }
            // sampleCollector:
            // {
            //   required : true
            // }
            // phtRequestId:
            // {
            //   required : true
            // }
            // phtRequest:
            // {
            //   required : true
            // }

        }
    });
});