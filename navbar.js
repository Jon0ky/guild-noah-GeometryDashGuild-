        const hamburgerBtn = document.getElementById('hamburgerBtn');
        const closeBtn = document.getElementById('closeBtn');
        const navMenu = document.getElementById('navMenu');
        const overlay = document.getElementById('overlay');
        const navbar = document.getElementById('navbar');
        const navLinks = document.querySelectorAll('.nav-links a, .desktop-nav a');

        // Mobile menu functions
        function openMenu() {
            navMenu.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeMenu() {
            navMenu.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }

        hamburgerBtn.addEventListener('click', openMenu);
        closeBtn.addEventListener('click', closeMenu);
        overlay.addEventListener('click', closeMenu);

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                closeMenu();
            });
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                closeMenu();
            }
        });

        // Navbar show/hide on scroll
        let lastScroll = 0;
        const scrollThreshold = 5;

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            // Don't hide navbar at the very top
            if (currentScroll <= 100) {
                navbar.classList.remove('hidden');
                lastScroll = currentScroll;
                return;
            }

            // Scrolling down - hide navbar
            if (currentScroll > lastScroll + scrollThreshold) {
                navbar.classList.add('hidden');
            } 
            // Scrolling up - show navbar
            else if (currentScroll < lastScroll - scrollThreshold) {
                navbar.classList.remove('hidden');
            }

            lastScroll = currentScroll;
        });