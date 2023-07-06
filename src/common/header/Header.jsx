import styles from "./_Header.module.scss";
import Navigation from "./Navigation";
import logo from "./assets/logo.png";
import { Link } from "react-router-dom";
// const logo = new URL("../../assets/logo", import.meta.url).href;

const Header = (props) => (
	<header className={styles.header}>
		<Link className={styles["logo-img"]} to="/">
			<img src={logo} alt="logo" />
		</Link>
		<Navigation />
	</header>
);
export default Header;
