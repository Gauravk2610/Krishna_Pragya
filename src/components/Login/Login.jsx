import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  FacebookAuthProvider,
} from "@firebase/auth";
import { auth, db } from "../../firebase";
import { useEffect, useState } from "react";
import { doc, serverTimestamp, setDoc } from "@firebase/firestore";
import { useDispatch } from "react-redux";
import CloseIcon from "@heroicons/react/24/outline/XMarkIcon";
import { login } from "../../features/userSlice";

const Login = ({ setModal }) => {
  const dispatch = useDispatch();

  const [showPage, setShowPage] = useState("SignIn");

  const googleLogin = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        // console.log(result)
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        dispatch(login({ user: user }));
        setDoc(doc(db, "users_test", user.uid), {
          id: user.uid,
          displayName: user.displayName,
          userName: user.displayName.split(" ").join("").toLocaleLowerCase(),
          email: user.email,
          photoURL: user.photoURL,
          timestamp: serverTimestamp(),
        })
          .then(() => {
            console.log("User Added to Db");
            setModal(false);
          })
          .catch((error) => {
            alert(error.message);
          });
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <div className="py-14 px-12 space-y-2 relative">
      <h1 className="text-center font-bold text-xl">MAGAZINE SUBSCRIPTION</h1>
      <CloseIcon
        className="absolute top-2 right-4 cursor-pointer w-8"
        onClick={() => setModal(false)}
      />
      <div className="text-center font-semibold ">Please enter your detail</div>
      {showPage === "SignIn" ? (
        <form className="space-y-4">
          <div className="flex flex-col space-y-2">
            <label className="font-semibold" htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="bg-[#DBDBDB] text-base rounded-2xl px-3 py-2"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="font-semibold" htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="border bg-[#DBDBDB] text-base rounded-2xl px-3 py-2"
            />
          </div>
          {/* Forgot password */}
          <div className="flex justify-end">
            <button className="font-semibold">Forgot Password?</button>
          </div>
          {/* Sign In button */}
          <button
            className="w-full bg-[#2E6295] text-white rounded-xl py-2 mt-4 linear-bg font-semibold"
            type="submit"
          >
            Sign In
          </button>
          <div className="flex justify-center">
            <div
              onClick={() => setShowPage("SignUp")}
              className="font-semibold cursor-pointer"
            >
              Don't have an account? Sign Up
            </div>
          </div>
          {/* line divide Or in between */}
        </form>
      ) : (
        <form className="space-y-4">
          <div className="flex flex-col space-y-2">
            <label className="font-semibold" htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="bg-[#DBDBDB] text-base rounded-2xl px-3 py-2"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="font-semibold" htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="border bg-[#DBDBDB] text-base rounded-2xl px-3 py-2"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="font-semibold" htmlFor="password">Confirm Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="border bg-[#DBDBDB] text-base rounded-2xl px-3 py-2"
            />
          </div>
          {/* Sign In button */}
          <button
            className="w-full bg-[#2E6295] text-white rounded-xl py-2 mt-4 linear-bg font-semibold"
            type="submit"
          >
            Sign Up
          </button>
          <div className="flex justify-center">
            <div
              onClick={() => setShowPage("SignIn")}
              className="font-semibold cursor-pointer"
            >
              Already have an account? Sign In
            </div>
          </div>
        </form>
      )}
      {/* Dont have an account? Sign Up */}
      <div className="flex justify-center items-center">
        <div className="border-b-2 border-black w-1/2"></div>
        <div className="font-semibold px-2">Or</div>
        <div className="border-b-2 border-black w-1/2"></div>
      </div>
      <div className="pt-6 flex justify-center space-x-4">
        <img
          src="https://img.icons8.com/color/48/000000/google-logo.png"
          className="w-10 h-full"
          alt="google"
        />
        {/* facebook */}
        <img
          src="https://img.icons8.com/color/48/000000/facebook-new.png"
          className="w-10 h-full"
          alt="facebook"
        />
      </div>
    </div>
  );
};

export { Login };
