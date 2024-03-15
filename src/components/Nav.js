import React from "react";
import { Link } from "react-router-dom";
export default function Nav() {
	return (
		<nav className="main-nav-body">
			<div className="logo-search">
				<span>
					<Link to={'/'}>
						<img src={require('../imgs/image-nT9eQgiX_U-transformed-removebg-preview (1).png')} width='80px' />
					</Link>
				</span>

				<div class="search-container">
					<input type="text" class="search-input" placeholder="Search..." />
					<button class="search-button">Search</button>
				</div>
			</div>
			<div>
				<ul className="nav-list">
					<li>
						<Link className="nav-link">Home</Link>
					</li>
					<li className="dropdown">
						<Link className="nav-link" to={'/allplaces'}>Tours</Link>
						<div className="dropdown-content">
							<Link className="nav-link" to={'/historical'}>Historical</Link>
							<Link className="nav-link" to={'/adventure'}>Adventure</Link>
							<Link className="nav-link" to={'/cultural'}>Cultural</Link>
							<Link className="nav-link" to={'/religious'}>Religious</Link>
							<Link className="nav-link" to={'/nautical'}>Nautical</Link>
							<Link className="nav-link" to={'/medical'}>Medical</Link>
						</div>
					</li>
					<li>
						<Link className="nav-link" >Tour Guides</Link>
					</li>
					<li>
						<Link className="nav-link">About Us</Link>
					</li>
					<li>
						<Link className="nav-link">Blog</Link>
					</li>
					<li>
						<Link to={'/sign'}><img className="profile-img" src={require('../imgs/profile.png')} /></Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
