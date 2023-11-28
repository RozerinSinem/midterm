function validateForm() {
   
    var title = document.getElementById('title').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phoneNumber = document.getElementById('phone-number').value;
    var course = document.getElementById('course').value;
    var city = document.getElementById('city').value;
    var locationMethod = document.getElementById('locationMethod').value;
    var byPhone = document.getElementById('byPhone').value;
    var termsCheckbox = document.getElementById('terms');

   
    if (
        title === '' ||
        name === '' ||
        email === '' ||
        phoneNumber === '' ||
        course === '' ||
        city === '' ||
        locationMethod === '' ||
        byPhone === '' ||
        !termsCheckbox.checked
    ) {
        alert('Please fill in all required fields and accept the terms.');
        return false;
    }

    var turkishPhoneNumberRegex = /^(\+?90\s?|0)?[5-9]\d{9}$/;

    if (!turkishPhoneNumberRegex.test(phoneNumber)) {
        alert('Please enter a valid Turkish phone number.Examples:+905551234567 or 05551234567');
       
        return false;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    return true;
}

















document.addEventListener("DOMContentLoaded", function () {
    console.log('DOM content loaded');
      
      fetch('https://run.mocky.io/v3/79a4e5b5-6722-4a2e-b2ac-a7f8e47d9fdc')
        .then(response => response.json())
        .then(data => {
          const companyDropdown = document.getElementById('course');
          data.courses.forEach(course => {
            const option = document.createElement('option');
            option.value = course.name; 
            option.textContent = course.name;
            companyDropdown.appendChild(option);
          });
        })
        .catch(error => console.error('Error fetching course data:', error));
   
        fetch('https://run.mocky.io/v3/6584f176-4f8a-4918-a2c5-65f71bab87b4')
        .then(response => response.json())
        .then(data => {
          const subjectDropdown = document.getElementById('city');
          data.cities.forEach(city => {
            const option = document.createElement('option');
            option.value = city.name; 
            option.textContent = city.name;
            subjectDropdown.appendChild(option);
          });
        })
        .catch(error => console.error('Error fetching city data:', error));


      });