import React from 'react';
import { brands } from '../data';

const Brands = () => (
  <section className="min-h-[146px] bg-tertiary
    flex items-center"
  >
    <div className="container mx-auto flex
      md:justify-between items-center flex-wrap
      justify-evenly"
    >
      {
            brands.map((brand, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <div key={index}>
                <img src={brand.img} alt="brands" />
              </div>
            ))
        }
    </div>
  </section>
);

export default Brands;
