
document.getElementById("bookingForm").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent form submission
    
    // Fetch form data
    var formData = new FormData(this);
    
    // Convert form data to JSON
    var jsonData = {};
    formData.forEach(function(value, key){
      jsonData[key] = value;
    });
    
    // Display JSON data
    alert(JSON.stringify(jsonData));
  });
  