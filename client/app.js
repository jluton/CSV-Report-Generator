const server = 'localhost:3000';

const init = function () {
  $('#inputForm').submit(handleSubmit);
}

const handleSubmit = function (event) {
  const text = $("#inputBox").val();
    $("#inputBox").val('');
    send(text)
    event.preventDefault();
};

const send = function (text) {
  $.ajax({
    method: 'GET',
    url: '/report',
    data: { data: text },
    contentType: 'application/json',
    success: (res) => {
      console.log('success!: ', res);
    },
    error: (err) => {
      console.error('Error!: ', err);
    }
  });
}

$(document).ready(init);