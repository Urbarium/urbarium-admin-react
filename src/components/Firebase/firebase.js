import app from 'firebase/app';

const config = {
  apiKey: 'AIzaSyDysVlFw_qKzvzmBxAs3jYwdWdI2qlmFS8',
  authDomain: 'urbarium-org.firebaseapp.com',
  databaseURL: 'https://urbarium-org.firebaseio.com',
  projectId: 'urbarium-org',
  storageBucket: 'urbarium-org.appspot.com',
  messagingSenderId: '1043005680434',
};

class Firebase {
  constructor() {
    app.initializeApp(config);
  }
}

export default Firebase;
