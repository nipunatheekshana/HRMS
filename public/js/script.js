$(document).ready(function () {
    $('#logo').addClass('animated fadeInDown');
    $("input:text:visible:first").focus();

    $('#login-form').submit(function (event) {
        event.preventDefault(); // Prevent the form from submitting traditionally

        $.ajax({
            type: 'POST',
            url: 'login.php', // Check the path to login.php
            data: $('#login-form').serialize(),
            success: function (response) {
                if (response === 'success') {
                    // Authentication successful, redirect to home.html
                    window.location.href = '../../../home.html';
                } else {
                    // Authentication failed, display error message
                    displayErrorMessage('Login failed. Please check your username and password.');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error('AJAX request error:', textStatus, errorThrown);
                // You can add more specific error handling here if needed
            }
        });
    });

    function displayErrorMessage(message) {
        var errorMessage = $('#error-message');
        errorMessage.text(message);
        errorMessage.addClass('show-error');

        setTimeout(function () {
            errorMessage.text('');
            errorMessage.removeClass('show-error');
        }, 5000); // Hide the error message after 5 seconds (adjust as needed)
    }
});
