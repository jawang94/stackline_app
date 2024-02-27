import itemDetailsStyles from "css/item/ItemDetails.module.css";

export type ItemDetailsData = {
  subtitle: string;
  tags: Array<string>;
  title: string;
};

export default function ItemDetails({
  subtitle,
  title,
  tags,
}: ItemDetailsData) {
  return (
    <div className={itemDetailsStyles.itemDetailsContainer}>
      <h2 className={itemDetailsStyles.itemDetailsTitle}>{title}</h2>
      <p className={itemDetailsStyles.itemDetailsSubtitle}>{subtitle}</p>
      <div className={itemDetailsStyles.divider} />
      <div className={itemDetailsStyles.itemDetailsTagContainer}>
        {tags.map((tag) => (
          <div className={itemDetailsStyles.itemDetailsTag}>{tag}</div>
        ))}
      </div>
      <div className={itemDetailsStyles.divider} />
    </div>
  );
}
