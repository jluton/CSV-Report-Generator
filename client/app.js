const server = 'localhost:3000';

// Initialize page. Create event handler.
const init = function () {
  $('#inputForm').submit(handleSubmit);
};

// Handle form submit. Get form value and prepares to send request
const handleSubmit = function (event) {
  const text = $("#inputBox").val();
    $("#inputBox").val('');
    send(text)
    event.preventDefault();
};

// Sends GET request to server with JSON jata
const send = function (text) {
  $.ajax({
    method: 'GET',
    url: '/report',
    data: text,
    contentType: 'application/json',
    success: handleResponse,
    error: (err) => { throw err; }
  });
}

// Handles csv response from server
const handleResponse = function (res) {
  const rows = res.split('\n');
  // Clear existing table if necessary
  // Generate table, populate it with csv data.
};

const clearTable = function () {
  
};

$(document).ready(init);