import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
			<div className="container">
				{/* <a href="/" className="navbar-brand">{branding}</a> */}
				<div>
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<Link to="/nav" className="nav-link">
								<i className="fas fa-home" /> Navbar
							</Link>
						</li>
						
			
			<li className="nav-item">
              <Link to="/youtube" className="nav-link">
                <i className="fas fa-times" /> Youtube
              </Link>
            </li>
					</ul>
				</div>

			</div>
		</nav>
        )
    }
}

export default Nav;