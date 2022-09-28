import { getAuth, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';
const auth = getAuth();

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     console.log(user);
//   } else {
//     console.log('no user logged');
//     window.location.href = 'connexion2.html';
//   }
// });

const btnLogout = document.getElementById('logout');
const logout = () => {
  signOut(auth)
    .then(() => {
      window.location.href = 'connexion2.html';
    })
    .catch((error) => {
      // An error happened.
    });
};

btnLogout.onclick = logout;

const fcv = document.getElementById('form-cv');

fcv.addEventListener('submit', (e) => {
  e.preventDefault();
  const centre = fcv['centre'].value;
  const centreText = fcv['centre'].checked;
  console.log(centre, centreText);

  let activities = [];
  if (centreText) {
    activities.push('centre host');
  }
  // activities: activities[('centre', 'hwkjhj', 'ioiuioo')];
});

function writeCVSData(name, email, phone, message) {
  const db = getDatabase();
  set(ref(db, 'cvs/' + email), {
    name,
    email,
    phone,
    message,
  });
}
