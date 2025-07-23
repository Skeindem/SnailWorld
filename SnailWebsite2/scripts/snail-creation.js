const params = new URLSearchParams(window.location.search);
const snailName = params.get('snailName')

if (snailName) {
  document.getElementById('snailNamed').textContent = snailName;
  }
