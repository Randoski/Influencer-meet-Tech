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
let form = document.querySelector('.form');
let name = document.querySelector('.name');
let email = document.querySelector('.email');
let assistance = document.querySelector('.assistance');
let message = document.querySelector('.message');
let submit = document.querySelector('.submit');
let nameError = document.querySelector('.name-error');
let emailError = document.querySelector('.email-error');
let assistanceError = document.querySelector('.assistance-error');
let messageError = document.querySelector('.message-error');


form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (name.value === '') {
        nameError.innerHTML = 'Please enter your name';
        e.preventDefault();
    } else if (email.value === '') {
        emailError.innerHTML = 'Please enter your email';
        e.preventDefault();
    } else if (assistance.value === '') {
        assistanceError.innerHTML = 'Please enter your assistance';
        e.preventDefault();
    } else if (message.value === '') {
        messageError.innerHTML = 'Please enter your message';
        e.preventDefault();
    } else {
        form.submit();
    }
});

let faq = document.querySelector('.faq').innerHTML;
faq = faq.replace(/\n/g, '<br>');



// Change organizers details after 3seconds or click
// let organizerName = document.querySelector('.organizer-name');
// let organizerJob = document.querySelector('.organizer-job');
// let organizerImage = document.querySelector('.organizer-image');
// let aboutOrganizer = document.querySelector('.about-organizer');

// let organizers = ['Adinkan F. Bassey', 'Parklins', 'Parklins', 'Joshua', 'Elzabeth', 'Elvis', 'Elizabeth']
// let job = ["Product Designer", 'Illustrator', 'Graphics', 'Brand Designer', 'Product Designer', 'Product Designer', 'Brand Designer', 'Illustrator']
// let about = [
//     'Andikan is one of the amazing kreatives of KND. He has over 4 years of design experience and is currently creating design solutions at xxxxxxxxx. Want to know more about Andikan? Follow his socials!',
//     'Parklinks is one of the amazing kreatives of KND. He has over 4 years of design experience and is currently creating design solutions at xxxxxxxxx. Want to know more about Andikan? Follow his socials!',
//     'Parklinks is one of the amazing kreatives of KND. He has over 4 years of design experience and is currently creating design solutions at xxxxxxxxx. Want to know more about Andikan? Follow his socials!',
//     'Joshua is one of the amazing kreatives of KND. He has over 4 years of design experience and is currently creating design solutions at xxxxxxxxx. Want to know more about Andikan? Follow his socials!',
//     'Elizabeth is one of the amazing kreatives of KND. He has over 4 years of design experience and is currently creating design solutions at xxxxxxxxx. Want to know more about Andikan? Follow his socials!',
//     'Elvis is one of the amazing kreatives of KND. He has over 4 years of design experience and is currently creating design solutions at xxxxxxxxx. Want to know more about Andikan? Follow his socials!',
//     'Elizabeth is one of the amazing kreatives of KND. He has over 4 years of design experience and is currently creating design solutions at xxxxxxxxx. Want to know more about Andikan? Follow his socials!',
// ]



// setInterval(function() {
    
//         organizerName.innerHTML = organizers[0];
//         organizers.push(organizers.shift());
    
//         organizerJob.innerHTML = job[0];
//         job.push(job.shift());
    
//         organizerImage.src = 'images/organizers/' + organizers[0] + '.jpg';
//         aboutOrganizer.innerHTML = about[0];
//         about.push(about.shift());
// }, 3000);
