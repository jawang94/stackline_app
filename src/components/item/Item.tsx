import itemStyles from "css/item/Item.module.css";
import ItemDetails, { ItemDetailsData } from "components/item/ItemDetails";

export interface ItemData extends ItemDetailsData {
  image: string;
}

export default function Item({ image, ...details }: ItemData) {
  return (
    <div className={itemStyles.itemContainer}>
      <img src={image} height={250} className={itemStyles.itemImage} />
      <ItemDetails {...details} />
    </div>
  );
}
