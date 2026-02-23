function Footer() {
  return (
    <footer  className="footer-section text-white">
      <div id="footer" className="container py-5">
        <div className="row">

          {/* Column 1 */}
          <div className="col-md-3 mb-4">
            <h4 className="fw-bold">MYND DRYCLEANER</h4>
            <p>
             MYND Laundry provides premium washing and dry cleaning service 
              leveraging mobile based technology. We provide high quality and 
              affordable services in a way of care and nurture for your threads.
            </p>

            {/* Social Icons */}
            <div className="d-flex gap-3 mt-3">
              <i className="bi bi-facebook social-icon"></i>
              <i className="bi bi-twitter social-icon"></i>
              <i className="bi bi-instagram social-icon"></i>
              <i className="bi bi-youtube social-icon"></i>
              <i className="bi bi-linkedin social-icon"></i>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold mb-3">Services</h5>
            <ul className="list-unstyled">
              <li>Steam Iron</li>
              <li>Laundry By Kg</li>
              <li>Men Dry Clean</li>
              <li>Women Dry Clean</li>
              <li>Shoe Cleaning</li>
              <li>Non Wearables</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold mb-3">Useful link</h5>
            <ul className="list-unstyled">
              <li>Privacy Policy</li>
              <li>Term & Conditions</li>
              <li>Refund & Cancellation</li>
              <li>Shipping & Delivery</li>
              <li>Career</li>
              <li>About MYND Founder Nilesh Ghorpade/Deepak Ghorpade</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold mb-3">Contact Us</h5>

            <p>
              <i className="bi bi-geo-alt-fill me-2"></i>
              Krishna Kunj Mathura Colony Rahatni Road Nakhate Wasti,
              Opposite to leagcy Aura
            </p>

            <p>
              <i className="bi bi-telephone-fill me-2"></i>
              +91-8087659605
            </p>

            <p>
              <i className="bi bi-envelope-fill me-2"></i>
              mynddrycleaner.com
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;