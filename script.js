document.getElementById('verificationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const internName = document.getElementById('internName').value.toLowerCase().replace(/\s/g, '_');
    const internshipDuration = document.getElementById('internshipDuration').value;
    const internRole = document.getElementById('internRole').value;
    
    const internsData = {
        "john_doe": {
            name: "John Doe",
            duration: "June 2023 - August 2023",
            role: "Software Development Intern"
        },
        "creta": {
            name: "Creta",
            duration: "June - August",
            role: "Designer"
        },
        // Add more interns here
    };

    // Verification logic
    const intern = internsData[internName];
    const isValid = intern && 
                    intern.duration === internshipDuration && 
                    intern.role === internRole;

    if (isValid) {
        document.getElementById('result').innerHTML = `
            <h2>Certificate Verified</h2>
            <p><strong>Name:</strong> ${intern.name}</p>
            <p><strong>Duration:</strong> ${intern.duration}</p>
            <p><strong>Role:</strong> ${intern.role}</p>
        `;
    } else {
        document.getElementById('result').innerHTML = `<p>Certificate not found. Please check the details.</p>`;
    }
});
