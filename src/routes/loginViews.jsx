import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { useEffect, useState } from 'react';

export default function LoginView() {

      const [updateCurrentUser, setCurrentUser] = useState(null);
      const [state, setCurrentState] = useState(0);

      useEffect(() => {
            setCurrentState(1);
            onAuthStateChanged(auth, handlerUserStateChanged);
      }, []);

      function handlerUserStateChanged(user) {
            if (user) {
                  setCurrentState(3);
                  console.log(user.displayName);
            } else {
                  setCurrentState(4);
                  console.log("No hay nadie autenticado...");
            }
      }

      async function handleOnClick() {
            const googleProvider = new GoogleAuthProvider();
            await signInWithGoogle(googleProvider);
      }

      async function signInWithGoogle(googleProvider) {
            try {
                  const res = await signInWithPopup(auth, googleProvider);
                  console.log(res);
            } catch (error) {
                  console.error(error);
            }
      }

      if (state === 3) {
            return <div>Estas autenticado pero no registrado</div>
      }

      if (state === 4) {
            return (
                  <div>
                        <button onClick={handleOnClick}>Login with Google</button>
                  </div>
            );
      }

      return <div>Loading... </div>
}