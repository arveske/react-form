import "./styles.scss";

type CustomInputProps = {
  placeholder: string;
  setVal: (name: string) => void;
  showError: boolean;
};

const CustomInput = ({
  placeholder,
  setVal,
  showError,
}: CustomInputProps): JSX.Element => {
  return (
    <input
      type="text"
      className={`custom-input-text ${showError ? "show-error" : ""}`}
      name="name"
      placeholder={placeholder}
      onChange={(event) => {
        setVal(event.target.value);
      }}
    />
  );
};

export default CustomInput;
