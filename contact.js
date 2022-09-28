import { getDatabase, ref, set, child, get } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js';

function writeContactData(name, email, phone, message) {
  const db = getDatabase();
  set(ref(db, 'contacts/' + name), {
    name,
    email,
    phone,
    message,
  });
}

var form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  var name = form['fullname'].value;
  var email = form['courriel'].value;
  var phone = form['telephone'].value;
  var message = form['message'].value;
  writeContactData(name, email, phone, message);
});
