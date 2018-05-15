const token = localStorage.getItem('token')
// console.log(token);

$.ajax({
  method: 'GET',
  url: 'api/protected',
  headers: {
    Authorization: `Bearer ${token}`
  },
  // success: response => console.log(response),
  // error: error => console.log(error)
  success: response => $('.title').html(response.data),
  error: error => window.location = "/"
})

// $('.logout-btn').on('click', () => {
//   localStorage.removeItem('token')
//   window.location = '/'
// })
