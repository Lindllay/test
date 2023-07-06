import Header from "./header/Header";
import Footer from "./footer/Footer";
import styles from "./_Layout.module.scss";

const Layout = (props) => {
	const classes = `${props.className ? props.className : ""} ${styles.layout}`;
	return (
		<>
			<Header />
			<main className={classes}>{props.children}</main>
			<Footer />
		</>
	);
};

export default Layout;
