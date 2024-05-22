function validateForm(event) {
    console.log("Form submitted");
    var name = document.forms["studentForm"]["name"].value;
    var designation = document.forms["studentForm"]["designation"].value;

    if (name == "" || designation == "") {
        alert("Both name and designation must be filled out");
        return false;
    }

  

    // If validation passes, let the form submit
    return true;
}

    // Function to handle the update request
    function editRecord(id, name, designation) {
        // Create a new FormData object
        var formData = new FormData();
        formData.append('update', 'true');
        formData.append('id', id);
        formData.append('name', name);
        formData.append('designation', designation);

        // Make an AJAX request to update.php
        fetch('update.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            // Handle the response
            if (data.success) {
                console.log(data.message);
                // Perform any additional actions on success
            } else {
                console.error(data.message);
                // Handle errors
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    
