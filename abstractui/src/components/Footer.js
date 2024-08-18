import React from 'react';
import "../css/footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-section">
                <h3>Abstract</h3>
                <p>Branches</p>
            </div>
            <div className="footer-section">
                <h3>Resources</h3>
                <p>Blog</p>
                <p>Help Center</p>
                <p>Release Notes</p>
                <p>Status</p>
            </div>
            <div className="footer-section">
                <h3>Community</h3>
                <p>Twitter</p>
                <p>LinkedIn</p>
                <p>Facebook</p>
                <p>Dribbble</p>
                <p>Podcast</p>
            </div>
            <div className="footer-section">
                <h3>Company</h3>
                <p>About Us</p>
                <p>Careers</p>
                <p>Legal</p>
            </div>
            <div className="footer-section">
                <h3>Contact Us</h3>
                <p>info@abstract.com</p>
            </div>
        </footer>
    );
}
