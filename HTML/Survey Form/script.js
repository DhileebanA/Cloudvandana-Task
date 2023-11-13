// User defined method to handle customer input
function handleSurvey(event){
    // Prevent the Form from reloading
    event.preventDefault();
    // Get values from customer
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var dateOfBirth = document.getElementById("dob").value;
    var country = document.getElementById("country").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var profession = document.getElementById("prof").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mob").value;

    // Dynamically change the data for the popup.
    var insertPopup = `
        <div class="popup">
            <div class="bg-white p-5 fs-4">
                <h2 class="text-center text-decoration-underline">Customer's Details</h2>
                <table>
                    <tr><th>Full Name</th><td> : ${firstName +" "+ lastName}</td></tr>
                    <tr><th>Date Of Birth</th><td> : ${dateOfBirth}</td></tr>
                    <tr><th>Country</th><td> : ${country}</td></tr>
                    <tr><th>Gender</th><td> : ${gender}</td></tr>
                    <tr><th>Profession</th><td> : ${profession}</td></tr>
                    <tr><th>Email</th><td> : ${email}</td></tr>
                    <tr><th>Mobile Number</th><td> : ${mobile}</td></tr>
                </table>
            </div>
        </div>`;
    // Insert the above data by using innerHTML.
    document.getElementById("popup").innerHTML = insertPopup;
}

// If popup is clicked this function will be triggered.
function hideDetails(){
    document.getElementById("popup").style.display = "none";
    window.location.reload();
}