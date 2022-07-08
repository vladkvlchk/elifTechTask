import Goods from './sub/Goods';
import Shops from './sub/Shops';
import React from 'react';
import data from '../assest/data.json';

function Shop() {
  const [activeShop, setActiveShop] = React.useState(data.companies[0]);
  return (
    <div className="shop">
      <Shops active={activeShop} setActive={setActiveShop} names={data.companies} />
      <Goods items={[...data.goods[`${activeShop}`]]}/>
    </div>
  );
}

export default Shop;
