import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-dark text-white py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>About Us</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                    </div>
                    <div className="col-md-4">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white text-decoration-none">Home</a></li>
                            <li><a href="#" className="text-white text-decoration-none">About</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Services</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Contact Us</h5>
                        <p>Email: contact@example.com</p>
                        <p>Phone: +123 456 7890</p>
                        <p>Address: 123 Street, City, Country</p>
                    </div>
                </div>
                <hr className="border-light" />
                <div className="text-center">
                    <p className="mb-0">© 2025 Your Company Name. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
