// Handle submit button click
$("#submit-btn").click(function () {
    var value = $('#user-input').val().trim().toLowerCase();
    $('#user-input').val("");
    if (value !== "") {
        // Redirect to seats unavailable page
        window.location.href = "seats_unavailable.html";
    }
});

// Handle Enter key press
$("#user-input").keypress(function (e) {
    if (e.which === 13) {  // 13 is the Enter key code
        var value = $('#user-input').val().trim().toLowerCase();
        $('#user-input').val("");
        if (value !== "") {
            // Redirect to seats unavailable page
            window.location.href = "seats_unavailable.html";
        }
    }
});
