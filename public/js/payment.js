document.addEventListener("DOMContentLoaded", function () {
    const paymentForm = document.getElementById("paymentForm");
    const successMessage = document.getElementById("successMessage");

    paymentForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Simulate a successful payment (replace with your actual payment processing logic)
        simulatePayment()
            .then(() => {
                successMessage.classList.remove("hidden");
            })
            .catch((error) => {
                alert("Payment failed: " + error); // Handle payment failure
            });
    });

    // Simulate a successful payment (replace this with your actual payment processing logic)
    function simulatePayment() {
        return new Promise((resolve, reject) => {
            // Add your payment processing logic here
            // For example, you can use AJAX to send payment data to a server and receive a response

            // Simulate a successful payment after a delay (2 seconds)
            setTimeout(() => {
                resolve();
            }, 2000);
        });
    }
});
