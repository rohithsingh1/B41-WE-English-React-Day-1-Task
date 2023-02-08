import React from 'react';

function Card({packageType,price,objarr}) {
  return (
    <React.Fragment>
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{packageType.toUpperCase()}</h5>
            <h6 className="card-price text-center">${price}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              {
                objarr.available.map((ele, index) => (
                  <li key={index}>
                    <span className="fa-li">
                      <i className="fas fa-check"></i>
                    </span>{ele}
                  </li>
                ))              
              }
              {
                objarr.notAvailable.map((ele, index) => (
                  <li key={index} className="text-muted">
                    <span className="fa-li">
                      <i className="fas fa-times">
                      </i></span>{ele}
                  </li>
                ))
              }
            </ul>
            <div className="d-grid">
              <button className="btn btn-primary text-uppercase">Button</button>
            </div>
          </div>
        </div>
            </div>
    </React.Fragment>
  )
}

export default Card