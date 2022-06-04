const scrollTop = document.querySelector(".btn-stt");

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 200) {
        scrollTop.classList.add("active");
    } else {
        scrollTop.classList.remove("active");
    }
})


function validation(){
    const form = document.getElementById("form");
    const email = document.getElementById("email").value;
    const text = document.getElementById("text");
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)){
        form.classList.add('valid');
        form.classList.remove('invalid');
        text.innerHTML = "";
    }else{
        form.classList.remove('valid');
        form.classList.add('invalid');
        text.innerHTML = "Please enter a valid Email Address."
    }
}


const swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });


  const openBtn = document.querySelector('#buy-now');
  const closeBtn = document.querySelector('#close');
  const modal = document.querySelector('#modalContainer');
  
  openBtn.addEventListener('click', openModalContainer);
  function openModalContainer(){
      modal.style.display = 'grid';
  }
  
  closeBtn.addEventListener('click', closeModal);
  function closeModal(){
      modal.style.display = 'none';
  }


/*responsive*/

/*Head Menu*/
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.menu');

  hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
  })

  document.querySelectorAll(".menuItem").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }))

