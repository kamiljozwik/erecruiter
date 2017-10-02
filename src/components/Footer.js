import React, {Component} from 'react';
import '../styles/Footer.css';

class Footer extends Component {
	// --- Render ---
	render() {
		return (
			<div className="Footer-wrapper">
				<div className="footer-frame">
					<span className="author">Author: Kamil Jozwik</span>
					<span className="email">email: kamiljozwikpl@gmail.com</span>
				</div>
			</div>
		);
	}
}

export default Footer;
