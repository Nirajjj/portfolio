let activeLinks = document.querySelectorAll('.about-sections');
let activeContent = document.querySelectorAll('.about-content');

function showTab(para) {
  activeLinks.forEach(Element => {
    Element.classList.remove('active');
  
  })
  activeContent.forEach(Element => {
    Element.classList.remove('active-about-content');
  })
  
  event.currentTarget.classList.add('active');
  document.getElementById(para).classList.add('active-about-content');
  
  console.log(document.getElementById(para));
}

// activeLinks.forEach(activeLink => {
//   activeLink.addEventListener('click', ()=> {
//     activeLinks.forEach(Element => {
//       Element.classList.remove('active');
//       showTab(tab);
//     })
//     activeLink.classList.add('active');

    
//     activeContent.forEach(Element => {
//       Element.classList.remove('active-about-content')
//     })
    
//   })
  
// })

let menuIcon = document.querySelector('.fa-bars');
let menuCloseIcon = document.querySelector('.fa-xmark');

menuIcon.addEventListener('click', ()=> {
  let menu = document.querySelector('nav ul');
  menu.style.right = '0';
  
})

menuCloseIcon.addEventListener('click', ()=> {
  let menu = document.querySelector('nav ul');
  menu.style.right = '-190px';
})


  const scriptURL = 'https://script.google.com/macros/s/AKfycbyyeyHg7ASxRmonO2MtjvAO2UP3vUPVwPT7WtCPtg9Q1JaPVI7P7IegC-9GFJ99cXuA/exec'
  const form = document.forms['submit-to-google-sheet']
  let msg = document.querySelector('#msg');
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
      msg.innerHTML = 'message sent successfully🚀'
      form.reset()
      setTimeout(()=> {
        msg.innerHTML = '';
      }, 5000)
  })