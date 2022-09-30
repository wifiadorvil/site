
import { getDatabase, ref, set, child, get } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js';


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
  const nom = fcv['Nom'].value
  const prenom = fcv['Prenom'].value
  const tel = fcv['Téléphone'].value
  const cel = fcv['Cellulaire'].value

  const courriel = fcv['Courriel'].value
  const region = fcv['region'].value

  const emploi=fcv['emplois'].value
 

  console.log(Array.from(fcv['activity']));
  let activities = [];
  Array.from(fcv['activity']).map((item) => {
    if (item.checked) {
      activities.push(item.value);
  }
});
  console.log(activities);
  writeCVSData(nom,prenom,tel,cel, courriel,emploi,region, activities);
});

function writeCVSData(nom,prenom,tel,cel, courriel,emploi,region, activities) {
  const db = getDatabase();
  set(ref(db, 'cvs/' + nom), {
    nom,
    prenom,
    tel,
    courriel,
    emploi,
    cel,
    activities, 
    region
    
  });
}
