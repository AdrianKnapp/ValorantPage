function initBannerSystem() {
  const bannerImages = document.querySelectorAll('.js-banner-img');
  const bannerTexts = document.querySelectorAll('.js-banner-text');

  bannerImages.forEach((img, index) => {
    img.addEventListener("touchstart", () => {
      activeTexts(index);
    });
    img.addEventListener("touchend", () => {
      activeTexts(index);
    });
    img.addEventListener("touchcancel", () => {
      activeTexts(index);
    });
    img.addEventListener("touchleave", () => {
      activeTexts(index);
    });
    img.addEventListener("touchmove", () => {
      activeTexts(index);
    });
    img.addEventListener('click', () => {
      activeTexts(index);
    });
    img.addEventListener('mouseover', () => {
      activeTexts(index);
    });
  });

  function activeTexts(imgIndex) {
    bannerTexts.forEach((textBlock) => {
      textBlock.classList.remove('active');
    });
    bannerTexts[imgIndex].classList.add('active');
  }
}
initBannerSystem();

function initAccordion() {
  const accordionTitle = document.querySelectorAll('.js-accordion-text h3');
  const accordionIcon = document.querySelectorAll('.js-accordion-text i');
  const accordionTexts = document.querySelectorAll('.js-accordion-text p');
  const textBlock = document.querySelectorAll('#second-block .text-block');
  accordionTitle[0].classList.add('active');
  accordionIcon[0].style.transform = 'rotate(0)';


  accordionTitle.forEach((title, index) => {
    title.addEventListener('click', () => {
      if (accordionTexts[index].classList.contains('active')) {
        accordionTexts[index].classList.remove('active');
        accordionTitle[index].classList.remove('active');
        accordionIcon[index].style.transform = 'rotate(90deg)';
      } else {
        accordionIcon[index].style.transform = 'rotate(0)';
        accordionTexts[index].classList.add('active');
        accordionTitle[index].classList.add('active');
      }
    });
  });
}
initAccordion();

function menuScrollEvent() {
  const firstSection = document.querySelector('.first-section');
  const secondSection = document.querySelector('.second-section');
  const thirdSection = document.querySelector('.third-section');

  const firstItemMenu = document.querySelector('.first-item-menu');
  const secondItemMenu = document.querySelector('.second-item-menu')
  const thirdItemMenu = document.querySelector('.third-item-menu')


  const firstSectionTop = firstSection.getBoundingClientRect().top;
  const secondSectionTop = secondSection.getBoundingClientRect().top;
  const thirdSectionTop = thirdSection.getBoundingClientRect().top;

  const windowCutSize1 = firstSectionTop - window.innerHeight * 0.2;
  const windowCutSize2 = secondSectionTop - window.innerHeight * 0.2;
  const windowCutSize3 = thirdSectionTop - window.innerHeight * 0.2;

  if (windowCutSize1 < 0 && windowCutSize2 > 0) {
    secondItemMenu.classList.remove('active');
    thirdItemMenu.classList.remove('active');
    firstItemMenu.classList.add('active');
  }
   if (windowCutSize2 < 0 && windowCutSize3 > 0) {
    firstItemMenu.classList.remove('active');
    thirdItemMenu.classList.remove('active');
    secondItemMenu.classList.add('active');

  } 
  if (windowCutSize3 < 0) {
   

    firstItemMenu.classList.remove('active');
    secondItemMenu.classList.remove('active');
    thirdItemMenu.classList.add('active');
  }

}
window.addEventListener('scroll', menuScrollEvent);


function initScrollToSection() {
  const internalLinks = document.querySelectorAll('#header-page a[href^="#"]');

  function scrollToSection() {
    event.preventDefault();
    const href = this.getAttribute('href');
    const sectionToGo = document.querySelector(href);
    const sectionToGoTopDistance = sectionToGo.offsetTop;
    const sectionToScroll = sectionToGoTopDistance - window.innerHeight * 0.15;

    window.scrollTo({
      top: sectionToScroll,
      behavior: 'smooth'
    });
  }

  internalLinks.forEach((link, index) => {
    link.addEventListener('click', scrollToSection);
  });
}
initScrollToSection();


function initScrollSlide() {
  const sectionsToAnime = document.querySelectorAll('.js-section');
  const windowMetade = window.innerHeight * 0.8;
  sectionsToAnime[0].classList.add('active');

  function animaScroll() {
    sectionsToAnime.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - windowMetade) < 0;

      if (isSectionVisible) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    })
  }

  animaScroll();

  window.addEventListener('scroll', animaScroll);
}
initScrollSlide();


function mobileDeviceRemoveHoverEffect() {
  const pageLinks = document.querySelectorAll('#header-page a');
  const isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
  if (isMobile) {
    pageLinks.forEach((link, index) => {
      link.classList.remove('hover-effect');
    });
  }
}
mobileDeviceRemoveHoverEffect();