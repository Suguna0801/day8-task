$(document).ready(function() {
    $('#login-form').on('submit', function(e) {
        e.preventDefault();
        var email = $('#email').val().trim();
        var password = $('#password').val().trim();
        
        if (email === "" || password === "") {
            alert("Both fields are required.");
        } else if (!validateEmail(email)) {
            alert("Enter a valid email.");
        } else {
            alert("Form submitted successfully!");
        }
    });

    
    function validateEmail(email) {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});

   
