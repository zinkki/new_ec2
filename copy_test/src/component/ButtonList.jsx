import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

export default function List() {
  
 
  return(
    <> 
{/* 
  <div className="whattime-inline-widget" data-code="c5TX8kbAM5" style={{minWidth:'320px', height:'660px'}}></div>
 */}

    <Button variant="success" style={{marginRight:'0.5rem'}} 
      onClick={()=>{window.open(window.location.origin+'/pdf')}}>Day1</Button>
    <Button variant="success" style={{marginRight:'0.5rem'}} 
      onClick={()=>{window.open('https://automanix.s3.ap-northeast-2.amazonaws.com/day01.pdf')}}>Day1</Button>

    </>
  )  
}