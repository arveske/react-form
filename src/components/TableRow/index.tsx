import "./styles.scss";
import { capitalizeFirstLetter } from "../../utils";

type TableRowProps = {
  productName: string;
  storeName: string;
  width: number;
  action: () => void;
};

const TableRow = ({
  productName,
  storeName,
  width,
  action,
}: TableRowProps): JSX.Element => {
  return (
    <>
      <div className="table-row product-name-td">
        {capitalizeFirstLetter(productName)}
      </div>
      <div className="table-row  store-name-td">
        {capitalizeFirstLetter(storeName)}
      </div>
      <div
        className="table-row  row-delete"
        onClick={() => action()}
        style={{ width: `${width}px` }}
      >
        Delete
      </div>
    </>
  );
};

export default TableRow;
