import React from "react";
//= Page components
import Loading from "@/components/Common/Loader";
import Navbar from "@/components/Common/Navbar";
import ContactHeader from "@/components/Contact/ContactHeader";
import ContactForm from "@/components/Contact/ContactForm";
import Footer from "@/components/Common/Footer";

export const metadata = {
	title: "GEMS Holdings - Contact",
};

export default function ContactPage() {
	return (
		<>
			<Loading />
			<Navbar theme="light" />
			<ContactHeader />
			<div className="main-content">
				<ContactForm theme="light" />
				<div className="map">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56550.371475202046!2d85.25622835820312!3d27.6431487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb176e5f021e01%3A0xe2a54995faa27daa!2sGEMS%20School!5e0!3m2!1sen!2snp!4v1723561247284!5m2!1sen!2snp"
						width="100%"
						height="100%"
						loading="lazy"
					></iframe>
				</div>
				<Footer hideBGCOLOR />
			</div>
		</>
	);
}
