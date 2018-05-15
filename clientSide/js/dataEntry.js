const token = localStorage.getItem('token')
// console.log(token);

// headers: {
//      'Authorization': `Bearer ${localStorage.getItem('authToken')}`
//    },

//Event Listener
$('.dataEntry-form').on('submit', event => {
  event.preventDefault()

  let brand= $('.brand').val()
  let model= $('.model').val()
  const userId = localStorage.getItem('userId')

$.ajax({
  method: 'POST',
  url: '/api/houstory',
  data: JSON.stringify({userId, brand, model}),
  headers: {
       'Authorization': `Bearer ${token}`
     },
  contentType: 'application/json',
  dataType: 'json',
  success: response => {
    // localStorage.setItem('token', response.authToken)
    // window.location = 'dashboard.html'
    // console.log(brand, model);
  },
  error: error => console.log(error)
})

})
