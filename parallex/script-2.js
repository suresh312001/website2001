document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value; // Get the value of the time input

    // Send email using EmailJS
    emailjs.send('service_6yrbmsb', 'template_8jqowyo', {
        from_name: name,
        from_email: email,
        phone_number: phone,
        reservation_date: date,
        reservation_time: time // Pass the time value to EmailJS
    }).then(function(response) {
        console.log('Email sent successfully:', response);
        document.getElementById('verification-message').innerText = 'Verification email sent successfully. Please check your email.';
        document.getElementById('verification-message').style.display = 'block';
        // Clear form fields
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('date').value = '';
        document.getElementById('time').value = ''; // Clear the time input field
    }, function(error) {
        console.error('Failed to send email:', error);
        alert('Failed to send verification email. Please try again later.');
    });
});
