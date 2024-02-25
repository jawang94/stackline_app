import headerStyles from "css/header/Header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  const logoSrc = "/images/stackline_logo.svg"; // optional to change logo based on theme

  return (
    <div className={headerStyles.headerContainer}>
      <Link to="/" className={headerStyles.headerIcon}>
        <img src={logoSrc} />
      </Link>
    </div>
  );
}
