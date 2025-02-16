document.addEventListener('DOMContentLoaded', function() {
    const heroImage = document.querySelector('.hero-section img');
    heroImage.classList.add('animate__animated', 'animate__fadeIn');
  
    const profileCard = document.querySelector('.profile-card');
    profileCard.classList.add('animate__animated', 'animate__fadeInLeft');
  
    const ventiDetails = document.querySelector('.venti-details');
    ventiDetails.classList.add('animate__animated', 'animate__fadeInRight');
  });  

  $(document).ready(function() {
    function animateSkillBars() {
        $('.skill-percentage').each(function() {
            var $this = $(this);
            var width = $this.data('width');
            if ($(window).scrollTop() + $(window).height() > $this.offset().top) {
                $this.css({
                    'width': width,
                    'transition': 'width 2s ease-in-out'
                });
            }
        });
    }

    // Anima las barras al cargar la página si están en la vista
    animateSkillBars();

    // Anima las barras cuando haces scroll
    $(window).on('scroll', function() {
        animateSkillBars();
    });
});
;