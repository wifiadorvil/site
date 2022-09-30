import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';
const auth = getAuth();

const signIn = (nom, mdp) => {
  createUserWithEmailAndPassword(auth, nom, mdp)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      window.location.href = 'cv.html';
      // ...
    })
    .catch((error) => {
      console.log(error);
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};

var form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  var nom = form['nom'].value;
  var mdp = form['motDePasse'].value;
  signIn(nom, mdp);
});
