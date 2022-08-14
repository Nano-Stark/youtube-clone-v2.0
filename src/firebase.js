import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDEzkXYj47yJhU7YoXIoByqV0Ow4fSrNG0",
  authDomain: "yt-clone-v2.firebaseapp.com",
  projectId: "yt-clone-v2",
  storageBucket: "yt-clone-v2.appspot.com",
  messagingSenderId: "666426481288",
  appId: "1:666426481288:web:630af2acc282f6f6e3dd3d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export default app;
