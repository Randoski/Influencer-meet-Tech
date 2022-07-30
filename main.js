// Change color for what-is-imtconf-2 section

let replaceWhatWeAre = document.querySelector('.designers');
let whatWeAre = ['Designers', 'Open-source', 'Developers', 'E-marginative', 'Kreatives', 'Influencers',
'Dynasties', 'Simplified', 'IMT'];
let colors = ['#7b00ea', '#267a96', '#333333', '#bf8260', '#7b00ea', '#267a96', '#333333', '#bf8260', '#db2dbe'];
let borderColor = document.querySelector(".imtconf-1");
let backgroundColor = document.querySelector(".imtconf-2");
let communityFeature = document.querySelector(".community-feature")
 

setInterval(function() {

    replaceWhatWeAre.innerHTML = whatWeAre[0];
    whatWeAre.push(whatWeAre.shift());

    borderColor.style.borderColor = colors[0];
    replaceWhatWeAre.style.color = colors[0];
    backgroundColor.style.backgroundColor = colors[0];
    communityFeature.style.color = colors[0];
    colors.push(colors.shift());
   
}, 1000);  


// Form validation
let name = document.querySelector('#name');
let nameError = document.querySelector('.name-error');
let email = document.querySelector('#email');
let emailError = document.querySelector('.email-error');
let assistance = document.querySelector('#assistance');
let assistanceError = document.querySelector('.assistance-error');
let message = document.querySelector('#message');
let messageError = document.querySelector('.message-error');

form.addEventListener('submit', (e) => {
    let nameValue = name.value.trim().toLowerCase();
    let emailValue = email.value.trim().toLowerCase();
    let assistanceValue = assistance.value;
    let messageValue = message.value.trim().toLowerCase(); 

    if (nameValue === '') {
        e.preventDefault();
        nameError.innerHTML = 'Name is required';
        e.preventDefault();
    } else if(emailValue === '') {
        emailError.innerHTML = 'Email is required';
        e.preventDefault();
    } else if(assistanceValue === '') {
        assistanceError.innerHTML = 'This field is required';
        e.preventDefault();
    } else if(messageValue === '') {
        messageError.innerHTML = 'Please leave a message';
        e.preventDefault();
    } else {
        form.submit();
        alert('Thank you for your message!');
    }
});



