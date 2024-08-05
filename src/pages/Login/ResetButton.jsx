const ResetButton = ({ email }) => {
  return (
    <button onClick={handleReset} className="text-red-500">
      Sifrenizi mi unuttunuz?
    </button>
  );
};

export default ResetButton;
