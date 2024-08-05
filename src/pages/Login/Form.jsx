import { createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from "../../firebase";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const Form = () => {
  const [IsSignUp, setIsSignUp] = useState(false);
  const [IsError, setIsError] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (IsSignUp) {
      // Yeni kullanici hesabi olustur
      createUserWithEmailAndPassword(auth, email, pass)
        .then(() => {
          toast.success("Hesabiniz olusturuldu");
          navigate("(/feed");
        })
        .catch((err) => toast.error("Hata!: " + err.code));
    } else {
      //Varolan hesaba giris yap
      signInWithEmailAndPassword(auth, email, pass)
        .then(() => {
          toast.success("Hesaba giris yapildi");
          navigate("(/feed");
        })
        .catch((err) => {
          toast.error("Hata!: " + err.code);
          if (err.code === "auth/invalid-credential") {
            setIsError(true);
          }
        });
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label>Email</label>
        <input
          type="text"
          required
          className="text-black rounded mt-1 p-2 outline-none shadow-lg focus:shadow-[gray]"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Sifre</label>
        <input
          type="text"
          required
          className="text-black rounded mt-1 p-2 outline-none shadow-lg focus:shadow-[gray]"
          onChange={(e) => setPass(e.target.value)}
        />
        <button className="mt-10 bg-white text-black rounded-full p-1 font-bold transition hover:bg-gray-300">
          {isSignUp ? "Kaydol" : "Giris Yap"}
        </button>
      </form>
      <p className="mt-5">
        <span className="text-gray-500">
          {isSignUp ? "Hesabiniz varsa" : " Hesabiniz yoksa"}
        </span>
        <span
          onClick={() => setIsSignUp(!IsSignUp)}
          className="cursor-pointer ms-2 text-blue-500"
        >
          {isSignUp ? "Giris Yapin" : "Kaydolun"}
        </span>
      </p>

      {isError && <ResetButton email={email} />}

    </>
  );
};

export default Form;
