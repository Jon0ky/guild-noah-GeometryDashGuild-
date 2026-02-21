const scroll = document.getElementById('seasonsScroll');
        const leftArrow = document.getElementById('leftArrow');
        const rightArrow = document.getElementById('rightArrow');
        const scrollAmount = 300;

        leftArrow.addEventListener('click', () => {
            scroll.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });

        rightArrow.addEventListener('click', () => {
            scroll.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });

        function updateArrowStates() {
            leftArrow.classList.toggle('disabled', scroll.scrollLeft === 0);
            rightArrow.classList.toggle('disabled', 
                scroll.scrollLeft >= scroll.scrollWidth - scroll.clientWidth - 10
            );
        }

        scroll.addEventListener('scroll', updateArrowStates);
        window.addEventListener('resize', updateArrowStates);
        updateArrowStates();