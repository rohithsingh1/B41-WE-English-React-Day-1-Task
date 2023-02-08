import React from 'react';
import {PriceSnippets} from './Data';
import Card from './Card';

function Layout() {
  return (
    <React.Fragment>
       <section className="pricing py-5">
  <div className="container">
          <div className="row">
            {
              PriceSnippets.map((ele, index) => (
                <Card key={index} packageType={ele.packageType} price={ele.price} objarr={ele.objarr} />
              ))
            }
    </div>
  </div>
</section>
    </React.Fragment>
  )
}

export default Layout