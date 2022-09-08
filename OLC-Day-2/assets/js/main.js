const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

if(navToggle){
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

if(navClose){
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

const scrollReveal = ScrollReveal({
  distance: '90px',
  duration: 3000,
})

scrollReveal.reveal(`.home-content`, {origin: 'top', delay: 400})
scrollReveal.reveal(`.home-img`, {origin: 'bottom', delay: 600})
scrollReveal.reveal(`.home-footer`, {origin: 'bottom', delay: 800})
