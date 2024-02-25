import landingPageStyles from "css/pages/landing/LandingPage.module.css";
import ResponsiveContainer from "components/containers/ResponsiveContainer";
import Header from "components/header/Header";

export default function LandingPage() {
  return (
    <div className={landingPageStyles.landingPageContainer}>
      <Header />
      <ResponsiveContainer>Hello</ResponsiveContainer>
    </div>
  );
}
