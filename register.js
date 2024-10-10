$(document).ready(function() {
    $('#state').on('change', function() {
        let selectedState = $(this).val();
        let cityOptions = "";

        if (selectedState === 'mdi') {
            cityOptions = "<option value='KV'>Kaala vasal</option><option value='MTU'>Maatuthaavani</option>";
        } else if (selectedState === 'cni') {
            cityOptions = "<option value='EGM'>Egmore</option><option value='TM'>Thambaram</option>";
        }else if (selectedState === 'tvl') {
            cityOptions = "<option value='PLG'>Palayamkottai</option><option value='Tn'>Town</option>";
        }
        $('#city').html(cityOptions);
    });

    // Form validation and password match check
    $('#signupForm').on('submit', function(event) {
        let password = $('#password').val();
        let confirmPassword = $('#confirmPassword').val();

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            event.preventDefault(); 
        }
    });
});
