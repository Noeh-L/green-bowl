import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import { fakeMenu } from "../fakeData/fakeMenu";
import { setLocalStorage } from "../utils/windows";

export const getUser = async (userId) => {
  const docRef = doc(db, "users", userId); // chemin de l'endroit du document

  const docSnapshot = await getDoc(docRef, userId); // 'photographie' du document

  if (docSnapshot.exists()) {
    const userReceived = docSnapshot.data();
    return userReceived;
  }
};

export const createUser = (userId) => {
  const docRef = doc(db, "users", userId);

  const newDoc = {
    username: userId,
    menu: fakeMenu.LARGE,
    basket: [],
  };

  setDoc(docRef, newDoc);
};

export const updateUserData = async (userId, dataUpdated) => {
  const docRef = doc(db, "users", userId);

  try {
    await updateDoc(docRef, dataUpdated);
    console.log("✅ Data updated in Firestore");
  } catch (error) {
    console.error(`Error updating ${dataUpdated} in Firestore: `, error);
  }
};

export const authenticateUser = async (userId) => {
  try {
    const existingUser = await getUser(userId);
    const initialLocalStorageData = {
      username: userId,
      menu: fakeMenu.LARGE,
      basket: [],
    };

    // If new user
    if (!existingUser) {
      await createUser(userId);
      console.log(`Welcome ${userId}!`);
      setLocalStorage("userData", initialLocalStorageData);
    }

    // If user already exists
    if (existingUser) {
      console.log(`Welcome back ${existingUser.username}!`);
      setLocalStorage("userData", existingUser);
    }
  } catch (error) {
    console.log("🔒 Error trying to authenticate: ", error);
  }
};
