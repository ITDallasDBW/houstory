
// ****************************INDEX INDEX INDEX INDEX INDEX INDEX
$('.toLogIn-btn').on('click', function(){
  window.location = 'login.html';
})

$('.register-form').on('submit', event => {
  event.preventDefault()

  let username= $('.username').val()
  let password= $('.password').val()

  $.ajax({
    method: 'POST',
    url: '/api/usersAdmin/',
    data: JSON.stringify({username, password}),
    contentType: 'application/json',
    dataType: 'json',
    success: response => window.location = 'login.html',
    error: error => console.log(error)
  })
})

// ******************LOGIN LOGIN LOGIN LOGIN LOGIN
$('.login-form').on('submit', event => {
  event.preventDefault()

  let username= $('.username').val()
  let password= $('.password').val()

  $.ajax({
    method: 'POST',
    url: '/api/authAdmin/login',
    data: JSON.stringify({username, password}),
    contentType: 'application/json',
    dataType: 'json',
    success: response => {
      localStorage.setItem('token', response.authToken)
      localStorage.setItem('userId', response.userId)
      window.location = 'dashboard.html'
    },
    error: error => console.log(error)
  })
})
