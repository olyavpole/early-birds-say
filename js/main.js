$(function(){

    // burger menu
    
    $('.study__item-top').click(function() {
        $(this).next().toggleClass('active');
        $('.study__item-top').toggleClass('active');
        $(this).children().toggleClass('active');
    });
    
    $('.header__burger').on('click', function() {
        $('.header__burger').toggleClass('active');
        $('.menu__list').toggleClass('active');
    });

    // about slider

    $('.about-me__slider').slick({
        dots: true,
        responsive: [
            {
              breakpoint: 650,
              settings: {
                dots: false,
                adaptiveHeight: true,
                autoplay: true
              }
            }
        ]
    });

    // reviews mixitup
    
    if($('div').is('.mix')) {
        var mixer = mixitup('.free-materials__inner');
    };
    
    // scroll animation
    
    const animItems = document.querySelectorAll('.anim-item')
    
    if (animItems.length > 0) {
        window.addEventListener('scroll', animOnScroll);
        function animOnScroll(params) {
            for (let index = 0; index < animItems.length; index++) {
                const animItem = animItems[index];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 4;
    
                let animItemPoint = window.innerHeight - animItemHeight / animStart;
    
                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }
    
                if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                    animItem.classList.add('active');
                }
            }
        }
    
        function offset(el) {
            const rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return {top: rect.top + scrollTop, left: rect.left + scrollLeft}        
        }
    }
    
    // smooth anchor animation

    const anchors = document.querySelectorAll('a[href^="#"]')
    
    for(let anchor of anchors) {
      anchor.addEventListener("click", function(e) {
        e.preventDefault()

        const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'

        document.querySelector(goto).scrollIntoView({
          behavior: "smooth",
          block: "start"
        })
      })
    }; 
});  
