/* ==================================================
   ROBOT NOTEBOOK
================================================== */


/* ==================================================
   PROJECT ACCORDION
================================================== */

const projects = document.querySelectorAll(".project");

projects.forEach((project) => {

    const button = project.querySelector(".project-header");

    if (!button) return;

    button.addEventListener("click", () => {

        const wasOpen = project.classList.contains("open");

        // Close all projects first
        projects.forEach((item) => {

            item.classList.remove("open");

            const itemButton =
                item.querySelector(".project-header");

            if (itemButton) {

                itemButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        });

        // Open the clicked project if it wasn't already open
        if (!wasOpen) {

            project.classList.add("open");

            button.setAttribute(
                "aria-expanded",
                "true"
            );

        }

    });

});


/* ==================================================
   SUBTLE HERO SCROLL EFFECT
================================================== */

const heroRobot =
    document.querySelector(".hero-robot");


window.addEventListener("scroll", () => {

    if (!heroRobot) return;

    const scroll =
        window.scrollY;

    /*
       Very subtle movement.
       Keeps the notebook feeling alive
       without turning the page into
       an animation-heavy portfolio.
    */

    if (scroll < window.innerHeight) {

        heroRobot.style.transform =
            `rotate(-2deg) translateY(${scroll * 0.08}px)`;

    }

});
