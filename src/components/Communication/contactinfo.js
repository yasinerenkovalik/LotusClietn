import React from 'react';

function ContactInfo() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">HEAD OFFICE</h5>
              <p className="card-text text-dark"> {/* Koyu renk */}
                1116 15th St, Sacramento,
                <br />
                California, CA 95814, USA
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">CALL US</h5>
              <p className="card-text text-dark"> {/* Koyu renk */}
                Support: 0800 123 4567
                <br />
                Office: 0800 123 4566
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">EMAIL US</h5>
              <p className="card-text text-dark"> {/* Koyu renk */}
                <a href="mailto:energy@support.com">energy@support.com</a>
                <br />
                <a href="mailto:energy@info.com">energy@info.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
