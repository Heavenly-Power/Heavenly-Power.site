// Мобильное меню
const menuBtn = document.getElementById('menuBtn');
const nav = document.querySelector('nav');

if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
        nav.classList.toggle('show');
    });
}

// Плавная прокрутка
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            // Закрываем меню на мобильных
            nav.classList.remove('show');
        }
    });
});

// Добавляем стиль для мобильного меню в CSS динамически
const mobileStyle = document.createElement('style');
mobileStyle.textContent = `
    @media (max-width: 768px) {
        nav {
            display: none;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background-color: #0a0a0f;
            padding: 20px;
            border-top: 1px solid #1a1a2e;
        }
        nav.show {
            display: flex;
        }
        .menu-btn {
            display: block;
        }
        nav a {
            padding: 10px 0;
            border-bottom: 1px solid #1a1a2e;
        }
    }
`;
document.head.appendChild(mobileStyle);