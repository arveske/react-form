import { Dispatch, useLayoutEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { updateAddBtnWidth } from "../../store/actionCreators";
import "./styles.scss";

type CustomInputButtonProps = {
  value: string;
  action: () => void;
};

const CustomButton = ({
  value,
  action,
}: CustomInputButtonProps): JSX.Element => {
  const ref = useRef<HTMLInputElement>(null);
  const dispatch: Dispatch<any> = useDispatch();

  useLayoutEffect(() => {
    if (ref.current) {
      dispatch(updateAddBtnWidth(ref.current.offsetWidth));
    }
  }, [dispatch]);

  return (
    <input
      type="button"
      className="custom-input-button"
      value={value}
      ref={ref}
      onClick={() => {
        action();
      }}
    />
  );
};

export default CustomButton;
