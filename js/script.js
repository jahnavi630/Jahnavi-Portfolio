/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };

    });

    /*==================== sticky navbar ====================*/

    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100)

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/*==================== scroll reveal ====================*/
ScrollReveal({
// reset:true,
distance: '80px',
duration: 2000,
delay: 200
});
ScrollReveal().reveal('.home-content, .heading',{ origin:'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form',{ origin:'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img ',{ origin:'left'});
ScrollReveal().reveal('.home-content p, .about-content ',{ origin:'right'});


/*==================== typed js ====================*/

const typed = new Typed('.multiple-text',{
    strings:['Frontend Developer', "Competitive", "AI Enthusiast...","FullstackDeveloper..."],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


  // Get the LinkedIn and GitHub links
const linkedinLink = document.querySelector('a[href*="linkedin"]');
const githubLink = document.querySelector('a[href*="github"]');
const whatsappLink = document.querySelector('a[href*="whatsapp"]');

// Add event listeners to the links
linkedinLink.addEventListener('click', () => {
  window.location.href = 'https://www.linkedin.com/in/jahnavi-muppidi-b9ba0828b/'; // Replace with your LinkedIn profile URL
});

githubLink.addEventListener('click', () => {
  window.location.href = 'https://github.com/jahnavi630'; // Replace with your GitHub profile URL
});


// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission
  var name = $("#name").val();
  var email = $("#email").val();
  var phone = $("#mobile number").val(); 1 
  var templateParams = {
    to_name: "Recipient Name",
    from_name: name,
    from_email: email,
    from_phone: phone,
    // ... other template parameters
};
  // Send email
  emailjs.sendForm('service_0d6j5o1', 'template_fzck8vb', this)
      .then(function() {
          alert('Email sent successfully!');
          document.getElementById('contact-form').reset(); // Reset the form after submission
      },
       function(error) {
          alert('Failed to send email: ' + JSON.stringify(error));
      });
});
