import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import { fakeMenu } from "@/fakeData/fakeMenu";
import { setLocalStorage } from "@/utils/windows";
import { displayToast } from "@/utils/displayToast";
import { UserData } from "@/types/User";
import { BasketProductQuantity, MenuProduct } from "@/types/Product";

export const getUser = async (
  userId: string,
): Promise<UserData | undefined> => {
  const docRef = doc(db, "users", userId); // chemin de l'endroit du document

  const docSnapshot = await getDoc(docRef); // 'photographie' du document

  if (docSnapshot.exists()) {
    const userReceived = docSnapshot.data();
    return userReceived as UserData;
  }
};

export const createUser = async (userId: string): Promise<UserData> => {
  const docRef = doc(db, "users", userId);

  const newDoc = {
    username: userId,
    menu: fakeMenu.LARGE,
    basket: [],
  };

  await setDoc(docRef, newDoc);

  return newDoc;
};

export const updateUserData = async (
  userId: string,
  dataUpdated: { menu: MenuProduct[] } | { basket: BasketProductQuantity[] },
) => {
  const docRef = doc(db, "users", userId);

  try {
    await updateDoc(docRef, dataUpdated);
    console.log("✅ Data updated in Firestore");
  } catch (error) {
    console.error(`Error updating ${dataUpdated} in Firestore: `, error);
  }
};

export const authenticateUser = async (userId: string) => {
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
