import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export const auth = getAuth();

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth: any,
  userInfo: any
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { email } = userAuth;
    const createdAt = new Date();
    console.log(userAuth);
    try {
      await setDoc(userDocRef, {
        email,
        createdAt,
        userInfo,
      });
    } catch (error: any) {
      console.log("error create the user", error.message);
    }
  }

  return userDocRef;
};
