import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { Scroll } from "../func/Scroll";

export default function Home() {
	const isScrolled = Scroll(250)
	return (
		<>
			<Nav />
			<div className="main-home-body">
				<img
					className="background-image"
					src={require("../imgs/spencer-davis-ONVA6s03hg8-unsplash.jpg")}
				/>
				<span className="main-home-body-writings">
					<h2 className="main-home-body-writings-h2">
						WELCOME TO MeetThePharaohs.com!
					</h2>
					<h3>Your Gateway to the Wonders of the Nile.</h3>
					<p className="main-home-body-writings-p">
						Embark on a journey through the ancient and mesmerizing land of
						Egypt with ExploreEgypt.com, your trusted companion for an
						unforgettable travel experience. Our mission is to make your visit
						to this historic country seamless, enriching, and full of
						awe-inspiring moments.
					</p>

					<div className="cards">
						<div className="cards-title">
							<h2 className="cards-h2">Why Choose Us?</h2>
						</div>
						<div className="cards-body">
							<span className="card-item">
								<h4>Expert Guidance</h4>
								<p className="cards-p">
									Our team of experienced travel experts provides valuable
									insights and local tips to enhance your journey. From iconic
									landmarks to hidden gems, we've got you covered.
								</p>
							</span>
							<span className="card-item">
								<h4>Tailored Itineraries</h4>
								<p className="cards-p">
									Whether you're a history enthusiast, an adventure seeker, or a
									culture lover, we offer personalized itineraries to cater to
									your unique interests. Explore the pyramids of Giza, sail the
									Nile, or unwind in the Red Sea—your adventure, your way.
								</p>
							</span>
							<span className="card-item">
								<h4>Local Experiences</h4>
								<p className="cards-p">
									Immerse yourself in the vibrant culture of Egypt with our
									curated selection of local experiences. Meet friendly locals,
									savor authentic cuisine, and discover the rich tapestry of
									traditions that make Egypt truly special.
								</p>
							</span>
							<span className="card-item">
								<h4>Safe and Secure</h4>
								<p className="cards-p">
									Your safety is our top priority. We provide up-to-date travel
									information, secure bookings, and assistance throughout your
									trip to ensure a worry-free experience.
								</p>
							</span>
						</div>
					</div>
				</span>
			</div>

			<div className="home-dest">
				<span>
					<h2 className="dest-h2">Explore Our Egypt</h2>
				</span>
				<div className="dest-items">
					<div className={`dest-itemL ${isScrolled ? 'slideToLeft' : ''}`}>
						<img src={require("../imgs/cairo.jpg")} />
						<span className="dest-writings">
							<h4>Cairo</h4>
							<p>
								Explore the bustling capital, home to the iconic Pyramids of
								Giza and the Sphinx.
							</p>
						</span>
					</div>
					<div className={`dest-itemR ${isScrolled ? 'slideToRight' : ''}`}>
						<img src={require("../imgs/luxor.jpg")} />
						<span className="dest-writings">
							<h4>Luxor</h4>
							<p>
								Uncover the treasures of the ancient city, including the Valley
								of the Kings and Karnak Temple.
							</p>
						</span>
					</div>
					<div className={`dest-itemL ${isScrolled ? 'slideToLeft' : ''}`}>
						<img src={require("../imgs/aswan.jpg")} />
						<span className="dest-writings">
							<h4>Aswan</h4>
							<p>
								Sail the serene Nile and visit the stunning temples and islands
								that dot this picturesque region.
							</p>
						</span>
					</div>
					<div className={`dest-itemR ${isScrolled ? 'slideToRight' : ''}`}>
						<img src={require("../imgs/red sea.jpg")} />
						<span className="dest-writings">
							<h4>Red Sea</h4>
							<p>
								Dive into the crystal-clear waters and marvel at the vibrant
								marine life of the Red Sea.
							</p>
						</span>
					</div>
				</div>
			</div>
			<Footer name='footer-main' />
		</>
	);
}
