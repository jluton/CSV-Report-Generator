const server = 'localhost:3000';

const init = function () {
  $('#inputForm').submit((e) => {
    const text = $("#inputBox").val();
    $("#inputBox").val('');
    send(text);
    e.preventDefault();
  });
}

const send = function (text) {
  // TODO: Figure out whether text is JSON. Stringify if not.
  console.log('send runs.')
  $.ajax({
    method: 'GET',
    url: '/report',
    data: text,
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