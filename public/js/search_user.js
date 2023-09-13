document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.getElementById("searchForm");
    const userDetails = document.getElementById("userDetails");
    const errorMsg = document.getElementById("errorMsg");

    searchForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Clear previous results and error messages
        userDetails.innerHTML = "";
        errorMsg.textContent = "";

        // Get the search term
        const searchTerm = document.getElementById("searchTerm").value;

        // Perform a search using the searchTerm (replace with your search logic)
        // Example: Fetch data from a server or database
        // Simulated example:
        const searchResult = simulateUserSearch(searchTerm);

        if (searchResult) {
            // Display user details
            const userHTML = `
                <h2>User Details</h2>
                <p>Member ID: ${searchResult.memberID}</p>
                <p>Name: ${searchResult.name}</p>
                <!-- Add more user details as needed -->
            `;
            userDetails.innerHTML = userHTML;
        } else {
            // Display error message if user is not found
            errorMsg.textContent = "User not found.";
        }
    });

    // Simulated user search function (replace with actual search logic)
    function simulateUserSearch(searchTerm) {
        // Simulate user data (replace with your data source)
        const users = [
            { memberID: "001", name: "John Doe" },
            { memberID: "002", name: "Jane Smith" },
            // Add more user data here
        ];

        // Search for a user by Member ID or Name
        return users.find((user) => {
            return (
                user.memberID.toLowerCase() === searchTerm.toLowerCase() ||
                user.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        });
    }
});
