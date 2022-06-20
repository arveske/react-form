import { IStoreNameResponseItem } from "../../@interfaces";
import "./styles.scss";

type CustomSelectorProps = {
  options: IStoreNameResponseItem[];
  defaultOption: string;
  setVal: (name: string) => void;
  showError: boolean;
};

const CustomSelector = ({
  options,
  defaultOption,
  setVal,
  showError,
}: CustomSelectorProps): JSX.Element => (
  <div className="select-wrapper">
    <select
      className={`custom-selector-text ${showError ? "show-error" : ""}`}
      name="select"
      onChange={(event) => {
        setVal(event.target.value || "");
      }}
    >
      {
        <option value="" defaultValue={""}>
          {defaultOption}
        </option>
      }
      {options.map(({ id, name }) => {
        return (
          <option value={id} key={id}>
            {name}
          </option>
        );
      })}
    </select>
  </div>
);

export default CustomSelector;
