/* =====================================================
   KARTHEEK PORTFOLIO
   JAVASCRIPT
===================================================== */


/* ================= PRELOADER ================= */

window.addEventListener("load", () => {

    const preloader =
        document.querySelector(".preloader");

    setTimeout(() => {

        preloader.classList.add("hide");

    }, 500);

});


/* ================= NAVBAR ================= */

const navbar =
    document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* ================= MOBILE MENU ================= */

const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.querySelector(".nav-menu");

const navLinks =
    document.querySelectorAll(".nav-link");


menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("open");

    const icon =
        menuToggle.querySelector("i");

    if (navMenu.classList.contains("open")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");

        const icon =
            menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});


/* ================= ACTIVE NAV LINK ================= */

const sections =
    document.querySelectorAll("section[id]");


function updateActiveLink() {

    const scrollPosition =
        window.scrollY + 150;


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop;

        const sectionHeight =
            section.offsetHeight;

        const sectionId =
            section.getAttribute("id");


        if (
            scrollPosition >= sectionTop &&
            scrollPosition <
            sectionTop + sectionHeight
        ) {

            navLinks.forEach(link => {

                link.classList.remove("active");

            });


            const activeLink =
                document.querySelector(
                    `.nav-link[href="#${sectionId}"]`
                );


            if (activeLink) {

                activeLink.classList.add("active");

            }

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveLink
);


/* ================= THEME ================= */

const themeToggle =
    document.getElementById("themeToggle");


const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark");

}


function updateThemeIcon() {

    const icon =
        themeToggle.querySelector("i");


    if (
        document.body.classList.contains("dark")
    ) {

        icon.classList.remove("fa-moon");

        icon.classList.add("fa-sun");

    } else {

        icon.classList.remove("fa-sun");

        icon.classList.add("fa-moon");

    }

}


updateThemeIcon();


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");


    const theme =
        document.body.classList.contains("dark")
            ? "dark"
            : "light";


    localStorage.setItem(
        "theme",
        theme
    );


    updateThemeIcon();

});


/* ================= PROJECT FILTER ================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");


const projectCards =
    document.querySelectorAll(".project-card");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        const filter =
            button.dataset.filter;


        projectCards.forEach(card => {

            const category =
                card.dataset.category || "";


            if (
                filter === "all" ||
                category.includes(filter)
            ) {

                card.classList.remove("hidden");

            } else {

                card.classList.add("hidden");

            }

        });

    });

});


/* ================= SCROLL REVEAL ================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* ================= BACK TO TOP ================= */

const backToTop =
    document.getElementById("backToTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 600) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ================= CURRENT YEAR ================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* ================= PROJECT CARD HOVER ================= */

const projectImages =
    document.querySelectorAll(".project-image");


projectImages.forEach(image => {

    image.addEventListener("mousemove", event => {

        const rect =
            image.getBoundingClientRect();


        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;


        const moveX =
            (x / rect.width - 0.5) * 8;

        const moveY =
            (y / rect.height - 0.5) * 8;


        image.style.transform =
            `perspective(700px)
             rotateX(${-moveY}deg)
             rotateY(${moveX}deg)`;

    });


    image.addEventListener("mouseleave", () => {

        image.style.transform =
            "perspective(700px) rotateX(0) rotateY(0)";

    });

});


/* ================= SMOOTH ANCHORS ================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(anchor => {

    anchor.addEventListener("click", function(event) {

        const targetId =
            this.getAttribute("href");


        if (
            targetId === "#" ||
            !document.querySelector(targetId)
        ) {

            return;

        }


        event.preventDefault();


        document.querySelector(targetId)
            .scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

    });

});