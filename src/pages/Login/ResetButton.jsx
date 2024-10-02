import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-toastify";

const ResetButton = ({ email }) => {
  // Sifre sifirlama e postasi gonder
  const handleReset = () => {
    sendPasswordResetEmail(auth, email)
      .then(() =>
        toast.info(
          "Sifre sifirlama e postasi gonderildi.Lutfen mailinizi kontrol edin."
        )
      )
      .catch(() => toast.error("Mail gonderilemiyor"));
  };
  return (
    <button onClick={handleReset} className="text-red-500">
      Sifrenizi mi unuttunuz?
    </button>
  );
};

export default ResetButton;
