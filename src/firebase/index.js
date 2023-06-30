let firebaseApp;
let db;

const initializeFirebase = async () => {
  const { initializeApp } = await import("firebase/app");
  const { getFirestore } = await import("firebase/firestore");

  const firebaseConfig = {
    apiKey: process.env.VUE_APP_API_KEY,
    authDomain: process.env.VUE_APP_AUTH_DOMAIN,
    projectId: process.env.VUE_APP_PROJECT_ID,
    storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
    appId: process.env.VUE_APP_APP_ID,
  };

  firebaseApp = initializeApp(firebaseConfig);
  db = getFirestore(firebaseApp);
};

initializeFirebase();

export { firebaseApp, db };
