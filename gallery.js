document.addEventListener("DOMContentLoaded", () => {
    const galleryGrid = document.getElementById("gallery-grid");
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-img");
    const captionText = document.getElementById("caption");
    const closeBtn = document.querySelector(".close-modal");

    const galleryImages = [
        {
            src: "images/sweet-rib.jpeg",
            alt: "Signature plated dish"
        },
        {
            src: "images/garlic-lobster.jpeg",
            alt: "Chef preparing a fresh meal"
        },
        {
            src: "images/dinning area.jpeg",
            alt: "Warm restaurant interior"
        },
        {
            src: "images/rib.jpeg",
            alt: "Serving table presentation"
        },
        {
            src: "images/dessert.jpeg",
            alt: "Delicious dessert display"
        },
        {
            src: "images/burger2.jpeg",
            alt: "Elegant kitchen atmosphere"
        }
    ];

    galleryGrid.innerHTML = galleryImages.map((image) => `
        <div class="gallery-item">
            <img src="${image.src}" alt="${image.alt}">
            <div class="overlay"><span>Enlarge</span></div>
        </div>
    `).join("");

    const galleryItems = document.querySelectorAll(".gallery-item img");
    galleryItems.forEach((img) => {
        img.addEventListener("click", () => {
            modal.classList.remove("hidden");
            modalImg.src = img.src;
            captionText.innerHTML = img.alt;
        });
    });

    function closeModal() {
        modal.classList.add("hidden");
    }

    closeBtn.addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
});