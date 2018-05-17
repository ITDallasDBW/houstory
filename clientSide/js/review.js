const token = localStorage.getItem('token')
// console.log(token);



  const username = localStorage.getItem('username')
  let brand= $('.brand').val()
  let model= $('.model').val()

$.ajax({
  method: 'GET',
  url: '/api/houstory',
  // data: JSON.stringify({username, brand, model}),
  headers: {
       'Authorization': `Bearer ${token}`
     },
  contentType: 'application/json',
  dataType: 'json',
  // success: response => {
  //   // localStorage.setItem('token', response.authToken)
  //   window.location = 'review.html'
  // },
  // error: error => console.log(error)
  success: response => {
    let tBodyEl = $('tBody');
    tBodyEl.html('');

    response.houstory.forEach(function(houstory) {
      tBodyEl.append('\
      <tr>\
          <td class = "id">' + houstory.id + '</td>\
          <td><input type = "text" class = "name" value = "' + houstory.name + '"></td>\
      </td>\
      <td>\
          <button class = "update-button">UPDATE/PUT</button>\
          <button class = "delete-button">DELETE</button>\
      </td>\
      </tr>\
      ');
    });
  }
});
