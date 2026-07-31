document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("reservation-form");
    const dateInput = document.getElementById("date");
    const alertBox = document.getElementById("booking-alert");

    // Automatically set minimum allowed date to TODAY
    const today = new Date().toISOString().split("T")[0];
    dateInput.setAttribute("min", today);

    // Form submission event listener
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent standard page refresh

        if (validateForm()) {
            const name = document.getElementById("full-name").value;
            const date = document.getElementById("date").value;
            const time = document.getElementById("time").value;
            const guests = document.getElementById("guests").value;

            // Show success alert
            alertBox.className = "alert success";
            alertBox.innerHTML = `🎉 Thank you, <strong>${name}</strong>! Your table for <strong>${guests} guest(s)</strong> on <strong>${date} at ${time}</strong> has been booked.`;
            alertBox.classList.remove("hidden");

            // Reset form fields
            form.reset();

            // Smooth scroll up to alert
            alertBox.scrollIntoView({ behavior: 'smooth' });
        }
    });

    function validateForm() {
        let isValid = true;

        const nameInput = document.getElementById("full-name");
        const phoneInput = document.getElementById("phone");
        const timeInput = document.getElementById("time");

        // Validate Full Name
        if (nameInput.value.trim().length < 3) {
            setError(nameInput, "Please enter your full name (at least 3 characters).");
            isValid = false;
        } else {
            clearError(nameInput);
        }

        // Validate Phone Number
        const phonePattern = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
        if (!phonePattern.test(phoneInput.value.trim()) || phoneInput.value.trim().length < 9) {
            setError(phoneInput, "Please enter a valid phone number.");
            isValid = false;
        } else {
            clearError(phoneInput);
        }

        // Validate Date
        if (!dateInput.value) {
            setError(dateInput, "Please select a reservation date.");
            isValid = false;
        } else {
            clearError(dateInput);
        }

        // Validate Time
        if (!timeInput.value) {
            setError(timeInput, "Please select a time slot.");
            isValid = false;
        } else {
            clearError(timeInput);
        }

        return isValid;
    }

    function setError(inputElement, message) {
        const parent = inputElement.parentElement;
        const errorMsg = parent.querySelector(".error-msg");
        parent.classList.add("error");
        errorMsg.textContent = message;
    }

    function clearError(inputElement) {
        const parent = inputElement.parentElement;
        const errorMsg = parent.querySelector(".error-msg");
        parent.classList.remove("error");
        errorMsg.textContent = "";
    }
});