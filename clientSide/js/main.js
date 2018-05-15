

// Buttons
// To Dashboard
$('.toDashboard-btn').on('click', () => {
  window.location = 'dashboard.html'
})
// To review
$('.toReview-btn').on('click', () => {
  window.location = 'review.html'
})
// To Data Entry
$('.toDataEntry-btn').on('click', () => {
  window.location = 'dataEntry.html'
})
//Logout
$('.logout-btn').on('click', () => {
  localStorage.removeItem('token')
  window.location = '/'
})
