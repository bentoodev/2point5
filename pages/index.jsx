import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
export default function Home() {
	return (
		<div>
			<Hero />
			<About />
		</div>
	);
}
