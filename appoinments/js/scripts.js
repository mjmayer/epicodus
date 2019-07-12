$(document).ready(function() {
    $("#inputForm form").submit(function () {
        let givenName = $("input#inputGivenName").val();
        alert(givenName);
    })
})
