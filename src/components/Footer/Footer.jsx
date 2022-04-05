import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-info">
                <div className="footer-head">
                    Get To Know Us
                </div>
                <div className="footer-text">
                    About Us
                </div>
                <div className="footer-text">
                    Contact Us
                </div>
                <div className="footer-text">
                    Careers
                </div>
            </div>
            <div className="footer-info">
                <div className="footer-head">
                    Social
                </div>
                <div className="footer-text">
                    Twitter
                </div>
                <div className="footer-text">
                    Facebook
                </div>
                <div className="footer-text">
                    Instagram
                </div>
            </div>
            <div className="footer-info">
                <div className="footer-head">
                    Help
                </div>
                <div className="footer-text">
                    Payments
                </div>
                <div className="footer-text">
                    Shippings
                </div>
                <div className="footer-text">
                    FAQ
                </div>
            </div>
        </footer>
    )
}

export { Footer }