// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, onSnapshot, setDoc } from "firebase/firestore";
import firebaseConfig from "./firebaseConfig"; // auth data
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

// TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST
const specialOfTheDay = doc(db, 'dailySpecial/2023-10-03')

async function writeDailySpecial() {
  const docData = {
    description: 'idk',
    price: 6.69,
    randomVal: Math.random(0, 10) * 10
  }
  // await setDoc(specialOfTheDay, docData) // write/override data
  await setDoc(specialOfTheDay, docData, { merge: true }) // update new values if record exists
  // updateDoc(specialOfTheDay, docData) // update if exists else error
}

async function readASingleDocument() {
  const mySnapshot = await getDoc(specialOfTheDay);
  if (mySnapshot.exists()){
  const docData = mySnapshot.data()
  return docData
  }
}
let dailySpecialUnsubscribe;
function listenToADocument() {
  dailySpecialUnsubscribe = onSnapshot(specialOfTheDay, (docSnapshot) => {
    if (docSnapshot.exists()) {
      const docData = docSnapshot.data();
      // eslint-disable-next-line no-console
      console.log('listener: ', docData)
    }
  })
}

function cancelListener() {
  dailySpecialUnsubscribe();
}
// TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST

export default{
  db,
  writeDailySpecial,
  readASingleDocument,
  listenToADocument,
  cancelListener
}