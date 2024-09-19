// firebase.ts
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDrRVGOpET6fJgTiIGo3X-BP-n0GRt8mLQ",
  authDomain: "terapp-4b031.firebaseapp.com",
  databaseURL: "https://terapp-4b031-default-rtdb.firebaseio.com",
  projectId: "terapp-4b031",
  storageBucket: "terapp-4b031.appspot.com",    
  messagingSenderId: "525736188496",
  appId: "1:525736188496:web:fe21fee4b5f10bfda8cf55"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
