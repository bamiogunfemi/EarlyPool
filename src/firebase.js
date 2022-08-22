import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { showError } from "./components";

const firebaseConfig = {
  apiKey: "AIzaSyAck2ysRR5APfam4jLkRimXP8skcaiagFI",
  authDomain: "early-pool-project.firebaseapp.com",
  projectId: "early-pool-project",
  storageBucket: "early-pool-project.appspot.com",
  messagingSenderId: "289283855537",
  appId: "1:289283855537:web:ac23cfa12e31b4a4dabe90",
  measurementId: "G-F3VTDXMS8L",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (userDetails, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      ...userDetails,
      authProvider: "local",
      email,
    });
  } catch (err) {
    showError(err.message);
  }
};

const logout = () => {
  signOut(auth);
  window.location.href = "/login";
};

export {
  auth,
  db,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  logout,
};
