const button = document.getElementById('searchBtn');

button.addEventListener('click', () => {
  const location = document.getElementById('locationInput').value;
  if (location === "") {
    alert("Please enter a location");
  } else {
    window.location.href = `resultpage.html?location=${encodeURIComponent(location)}`;
  }
});
