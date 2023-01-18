import React, { useState, useEffect } from 'react';

export default function SubHeader() {

  const dataCode = 'c5TX8kbAM5';

  useEffect(() => {
    window.WhatTime._autoLoadInlineWidgets();
  }, [])

  useState(() => {
    
  },[15])

  return (
		<section className="page-section-subhead" id="challenge">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading">참가 예약하기</h2>
          <p className="section-subheading mb-4">
            지금 바로 예약해 보세요!
          </p>
          <div className="whattime-inline-widget" 
                data-code='c5TX8kbAM5' data-text-color="#1a1a1a" 
                data-button-color="#aacae6" data-background-color="#ffffff" 
                style={{minWidth:'320px',height:'660px',marginTop:'3rem',overflow:'hidden'}}>
          </div>
        </div>
      </div>
    </section>
  )
}