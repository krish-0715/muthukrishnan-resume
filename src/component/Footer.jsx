import React from 'react';

function Footer() {
  return (
    <footer id="footer">
        <div className="container-fluid text-center shadow-lg p-2">
            <div className="copyright">
                &copy; Copyright <strong><span>Muthu Krishnan</span></strong>. All Rights Reserved.
            </div>
            <div className="credits">
                Designed by <span className='text-primary'>Muthu Krishnan</span>
            </div>
        </div>
    </footer>
  )
}

export default Footer;