document.addEventListener('DOMContentLoaded', function () {
    const memberIDField = document.getElementById('memberID');

    // Generate an auto-incrementing Member ID with leading zeros
    const generatedMemberID = getGeneratedMemberID();

    // Display the generated Member ID in the form
    memberIDField.value = generatedMemberID;
});

function getGeneratedMemberID() {
    // Fetch the last used Member ID from localStorage
    const lastMemberID = localStorage.getItem('lastMemberID') || '0001';

    // Convert the lastMemberID to a number, increment it, and pad with leading zeros
    const nextMemberID = String(Number(lastMemberID) + 1).padStart(4, '0');

    // Store the nextMemberID back in localStorage
    localStorage.setItem('lastMemberID', nextMemberID);

    return nextMemberID;
}
