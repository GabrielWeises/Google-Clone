let as = document.querySelectorAll('.menu_link');
        as.forEach(a => {
            a.addEventListener('click', function () {
                as.forEach(menu => menu.classList.remove('active'));
                this.classList.add('active');
            });
        });