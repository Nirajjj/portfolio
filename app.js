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
