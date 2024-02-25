import itemStyles from "css/item/Item.module.css";
import ItemDetails from "components/item/ItemDetails";

export default function Item() {
  return (
    <div className={itemStyles.itemContainer}>
      <ItemDetails />
    </div>
  );
}
