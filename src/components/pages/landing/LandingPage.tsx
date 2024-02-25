import landingPageStyles from "css/pages/landing/LandingPage.module.css";
import Header from "components/header/Header";
import Item from "components/item/Item";
import BasicDataGrid from "components/tables/BasicDataGrid";
import BasicLineChart from "components/charts/BasicLineChart";

export default function LandingPage() {
  return (
    <div className={landingPageStyles.landingPageContainer}>
      <Header />
      <div className={landingPageStyles.landingPageComponentsWrapper}>
        <div className={landingPageStyles.landingPageItem}>
          <Item />
        </div>
        <div className={landingPageStyles.landingPageDataComponents}>
          <BasicLineChart />
          <BasicDataGrid />
        </div>
      </div>
    </div>
  );
}
