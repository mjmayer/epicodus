$(document).ready(function() {
    $(#formSubmit).submit(function () {
        var givenName = $("input#inputGivenName").val();
        alert(givenName);
    })
}
