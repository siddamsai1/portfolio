// script.js

//  nav toggle for small screens
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const open = navLinks.style.display === 'flex';
  navLinks.style.display = open ? '' : 'flex';
  // animations
  navToggle.classList.toggle('open');
});

// Smooth scrolling 
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const href = link.getAttribute('href');
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({behavior: 'smooth', block: 'start'});
    }

    // set active state
    document.querySelectorAll('.nav-link').forEach(n => n.classList.remove('active'));
    link.classList.add('active');

    // close mobile nav
    if(window.innerWidth < 900) navLinks.style.display = '';
  });
});


// tiny typewriter for role
const role = document.querySelector('.role .accent');
if(role){
  const phrases = ['Frontend Developer','UI Enthusiast','React Learner'];
  let i=0,j=0,back=false;
  setInterval(()=> {
    const current = phrases[i];
    if(!back) {
      j++;
      role.textContent = current.slice(0,j);
      if(j===current.length){ back=true; setTimeout(()=>{},700);}
    } else {
      j--;
      role.textContent = current.slice(0,j);
      if(j===0){ back=false; i=(i+1)%phrases.length; }
    }
  },90);
}