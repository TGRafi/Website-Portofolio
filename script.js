document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href').length > 1) { 
            e.preventDefault(); 
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

const sections = document.querySelectorAll('div[id]'); 
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
const navbarHeight = document.querySelector('.navbar').offsetHeight; 

window.addEventListener('scroll', () => {
    let current = ''; 
    const scrollPosition = window.scrollY + navbarHeight + 1;

    sections.forEach(section => {
        if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    if (current) {
        const activeLink = document.querySelector(`.navbar-nav a[href="#${current}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
});

const viewWorkBtn = document.getElementById('viewWorkBtn');
const getInTouchBtn = document.getElementById('getInTouchBtn');
const scrollDownIcon = document.getElementById('scrollDownIcon');

function scrollToElement(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

viewWorkBtn.addEventListener('click', () => {
    scrollToElement('projects');
});

getInTouchBtn.addEventListener('click', () => {
    scrollToElement('contact');
});

scrollDownIcon.addEventListener('click', () => {
    scrollToElement('aboutMe');
});

document.querySelectorAll('.project-code-btn, .project-demo-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault(); 

        const actionText = this.textContent.trim();
        
        const projectTitle = this.closest('.project-card').querySelector('.project-title').textContent.trim();

        if (projectTitle === 'ToDo List') {
            if (actionText === 'Demo') {
                window.open('https://tgrafi.github.io/CodingCamp-150925-MTakhlisGriskaRafi/', '_blank');
            } else if (actionText === 'Code') {
                window.open('https://github.com/TGRafi/CodingCamp-150925-MTakhlisGriskaRafi', '_blank');
            } else {
                alert(`Aksi '${actionText}' untuk proyek '${projectTitle}' akan segera aktif!`);
            }
        } else if (projectTitle === 'Next Project') {
            alert(`Aksi '${actionText}' untuk proyek '${projectTitle}' masih 'Coming Soon'. Sabar ya! 😉`);
        }
    });
});

