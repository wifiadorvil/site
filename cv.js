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
<<<<<<< HEAD
  const CentreHospitaliers = fcv['centre'].checked;
  console.log(centre, centreText);

=======
  // const centre = fcv['centre'].value;
  // const centreText = fcv['centre'].checked;
  console.log(Array.from(fcv['activity']));
>>>>>>> dc94ebcb8da4d0c4ff4735115bc241c7683f8ed6
  let activities = [];
  Array.from(fcv['activity']).map((item) => {
    if (item.checked) {
      activities.push(item.value);
    }
  });
  console.log(activities);
  writeCVSData(activities);
});

function writeCVSData(name, email, phone, message, activities) {
  const db = getDatabase();
  set(ref(db, 'cvs/' + email), {
    name,
    email,
    phone,
    message,
    activities,
  });
}
