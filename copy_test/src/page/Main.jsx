import React, { useEffect } from 'react';
import AOS from "aos";
import Nav from '../component/Nav';
import Header from '../component/Header';
import SubHeader from '../component/SubHeader';
import Ranking from '../component/Ranking';
import Product from '../component/Product';
import Youtube from '../component/Youtube';
import Result from '../component/Result';

import ButtonList from '../component/ButtonList'
import BoxTest from '../component/BoxTest';

export default function Main() {

  useEffect(() => {
		AOS.init({ duration : 1000 });
	})

  return (
    <>
      {/* nav */}
      <Nav></Nav>

      {/* header */}
      <Header></Header>

      {/* subheader */}
      <SubHeader></SubHeader>

      {/* ranking */}
      <Ranking></Ranking>

      {/* product */}
      <Product></Product>

      {/* youtube */}
      <Youtube></Youtube>

      {/* result */}
      <Result></Result>

      {/* test */}
      {/* <ButtonList></ButtonList> */}

    </>
  );
}
