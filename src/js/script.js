// *** ACCORDEON ***

const accordeon = document.querySelector(".accordeon");

accordeon.querySelectorAll("details").forEach((details) => {
    details.querySelector("summary").addEventListener("click", () => {
        accordeon.querySelectorAll("details").forEach((otherDetails) => {
            if (otherDetails !== details) {
                otherDetails.open = false;
            }
        });
    });
});
