import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import { fakeMenu } from "../fakeData/fakeMenu";
import { setLocalStorage } from "../utils/windows";
import { displayToast } from "../utils/displayToast";

export const getUser = async (userId) => {
  const docRef = doc(db, "users", userId); // chemin de l'endroit du document

  const docSnapshot = await getDoc(docRef, userId); // 'photographie' du document

  if (docSnapshot.exists()) {
    const userReceived = docSnapshot.data();
    return userReceived;
  }
};

export const createUser = async (userId) => {
  const docRef = doc(db, "users", userId);

  const newDoc = {
    username: userId,
    menu: fakeMenu.LARGE,
    basket: [],
  };

  await setDoc(docRef, newDoc);

  return newDoc;
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
      displayToast("", `🤗 Welcome ${userId} !`, 3000);
      setLocalStorage("userData", initialLocalStorageData);
      return await createUser(userId);
    } else {
      // If user already exists

      displayToast("", `🤙 Welcome back ${existingUser.username} !`, 3000);

      setLocalStorage("userData", existingUser);
      return existingUser;
    }
  } catch (error) {
    console.log("🔒 Error trying to authenticate: ", error);
  }
};
