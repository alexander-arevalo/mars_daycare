function signOut() {
  localStorage.removeItem('token');
  console.log('Token removed');

  window.location.replace("/index.html");
}

const signOutFunction = document.getElementById('signOut');
signOutFunction.addEventListener('click', signOut);