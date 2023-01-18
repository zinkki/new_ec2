import { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

export default function RankingChart() {
  const [info1, setInfo1] = useState([{
    idx:'',
    user_name:'',
    company_name:'',
    company_dept:'',
    labtime:''
  }])
  const [info2, setInfo2] = useState([{
    idx:'',
    user_name:'',
    company_name:'',
    company_dept:'',
    labtime:''
  }])
  const [info3, setInfo3] = useState([{
    idx:'',
    user_name:'',
    company_name:'',
    company_dept:'',
    labtime:''
  }])
  const [info4, setInfo4] = useState([{
    idx:'',
    user_name:'',
    company_name:'',
    company_dept:'',
    labtime:''
  }])
  const [info5, setInfo5] = useState([{
    idx:'',
    user_name:'',
    company_name:'',
    company_dept:'',
    labtime:''
  }])
  const [info6, setInfo6] = useState([{
    idx:'',
    user_name:'',
    company_name:'',
    company_dept:'',
    labtime:''
  }])
  const [info7, setInfo7] = useState([{
    idx:'',
    user_name:'',
    company_name:'',
    company_dept:'',
    labtime:''
  }])
  const [info8, setInfo8] = useState([{
    idx:'',
    user_name:'',
    company_name:'',
    company_dept:'',
    labtime:''
  }])
  const [info9, setInfo9] = useState([{
    idx:'',
    user_name:'',
    company_name:'',
    company_dept:'',
    labtime:''
  }])
  const [info10, setInfo10] = useState([{
    idx:'',
    user_name:'',
    company_name:'',
    company_dept:'',
    labtime:''
  }])

  useEffect(()=>{
    axios.get('/api/list')
    .then((res) => {
      setInfo1(res.data[0]);
      setInfo2(res.data[1]);
      setInfo3(res.data[2]);
      setInfo4(res.data[3]);
      setInfo5(res.data[4]);
      setInfo6(res.data[5]);
      setInfo7(res.data[6]);
      setInfo8(res.data[7]);
      setInfo9(res.data[8]);
      setInfo10(res.data[9]);
    })
  },[])
  
  return(
    // <Table style={{border:'1rem solid #fff'}} className='text-center ranking-chart'>
    //   <thead>
    //     <tr className='bg-white'>
    //       <th className='font900' style={{width:'8%'}}>순위</th>
    //       <th className='font500' style={{width:'13%'}}>이름</th>
    //       <th className='font500'>회사명</th>
		// 			<th className='font500'>부서</th>
		// 			<th className='font900'>랩타임</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     <tr style={{color:'#efefef'}} >
    //       <td style={{backgroundColor:'#d44428',fontWeight:'900',fontSize:'1.7rem'}}>{info1.idx}</td>
    //       <td>{info1.user_name}</td>
    //       <td>{info1.company_name}</td>
    //       <td>{info1.company_dept}</td>
		// 			<td style={{backgroundColor:'#d44428',fontWeight:'900',fontSize:'1.7rem'}}>{info1.labtime}</td>
    //     </tr>
    //     <tr>
		// 			<td style={{backgroundColor:'#b0c9e3',color:'#222',fontWeight:'900',fontSize:'1.7rem'}}>{info2.idx}</td>
    //       <td>{info2.user_name}</td>
    //       <td>{info2.company_name}</td>
    //       <td>{info2.company_dept}</td>
		// 			<td style={{backgroundColor:'#b0c9e3',color:'#222',fontWeight:'900',fontSize:'1.7rem'}}>{info2.labtime}</td>
    //     </tr>
    //     <tr>
		// 			<td style={{backgroundColor:'#b0c9e3',color:'#222',fontWeight:'900',fontSize:'1.7rem'}}>{info3.idx}</td>
    //       <td>{info3.user_name}</td>
    //       <td>{info3.company_name}</td>
    //       <td>{info3.company_dept}</td>
		// 			<td style={{backgroundColor:'#b0c9e3',color:'#222',fontWeight:'900',fontSize:'1.7rem'}}>{info3.labtime}</td>
    //     </tr>
		// 		<tr>
		// 			<td className='black' style={{fontWeight:'900',fontSize:'1.7rem'}}>{info4.idx}</td>
    //       <td>{info4.user_name}</td>
    //       <td>{info4.company_name}</td>
    //       <td>{info4.company_dept}</td>
		// 			<td className='black' style={{fontWeight:'900',fontSize:'1.7rem'}}>{info4.labtime}</td>
    //     </tr>
		// 		<tr>
		// 			<td className='black' style={{fontWeight:'900',fontSize:'1.7rem'}}>{info5.idx}</td>
    //       <td>{info5.user_name}</td>
    //       <td>{info5.company_name}</td>
    //       <td>{info5.company_dept}</td>
		// 			<td className='black' style={{fontWeight:'900',fontSize:'1.7rem'}}>{info5.labtime}</td>
    //     </tr>
		// 		<tr>
		// 			<td className='black' style={{fontWeight:'900',fontSize:'1.7rem'}}>{info6.idx}</td>
    //       <td>{info6.user_name}</td>
    //       <td>{info6.company_name}</td>
    //       <td>{info6.company_dept}</td>
		// 			<td className='black' style={{fontWeight:'900',fontSize:'1.7rem'}}>{info6.labtime}</td>
    //     </tr>
		// 		<tr>
		// 			<td className='black' style={{fontWeight:'900',fontSize:'1.7rem'}}>{info7.idx}</td>
    //       <td>{info7.user_name}</td>
    //       <td>{info7.company_name}</td>
    //       <td>{info7.company_dept}</td>
		// 			<td className='black' style={{fontWeight:'900',fontSize:'1.7rem'}}>{info7.labtime}</td>
    //     </tr>
		// 		<tr>
		// 			<td className='black' style={{fontWeight:'900',fontSize:'1.7rem'}}>{info8.idx}</td>
    //       <td>{info8.user_name}</td>
    //       <td>{info8.company_name}</td>
    //       <td>{info8.company_dept}</td>
		// 			<td className='black' style={{fontWeight:'900',fontSize:'1.7rem'}}>{info8.labtime}</td>
    //     </tr>
		// 		<tr>
		// 			<td className='black' style={{fontWeight:'900',fontSize:'1.7rem'}}>{info9.idx}</td>
    //       <td>{info9.user_name}</td>
    //       <td>{info9.company_name}</td>
    //       <td>{info9.company_dept}</td>
		// 			<td className='black' style={{fontWeight:'900',fontSize:'1.7rem'}}>{info9.labtime}</td>
    //     </tr>
		// 		<tr>
		// 			<td className='black' style={{fontWeight:'900',fontSize:'1.7rem'}}>{info10.idx}</td>
    //       <td>{info10.user_name}</td>
    //       <td>{info10.company_name}</td>
    //       <td>{info10.company_dept}</td>
		// 			<td className='black' style={{fontWeight:'900',fontSize:'1.7rem'}}>{info10.labtime}</td>
    //     </tr>
    //   </tbody>
    // </Table>
    <>
    
    <Table style={{border:'1rem solid #fff'}} className='text-center ranking-chart'>
    <thead>
      <tr className='bg-white'>
        <th className='font900' style={{width:'8%'}}>순위</th>
        <th className='font500' style={{width:'13%'}}>이름</th>
        <th className='font500'>회사명</th>
        <th className='font500'>부서</th>
        <th className='font900'>랩타임</th>
      </tr>
    </thead>
    <tbody>
      <tr style={{color:'#efefef'}} >
        <td className='red'>1</td>
        <td>홍길동</td>
        <td>길동컴퍼니</td>
        <td>모터스포츠</td>
        <td className='red'>1:50.123</td>
      </tr>
      <tr>
        <td className='blue'>2</td>
        <td>홍길동</td>
        <td>길동컴퍼니</td>
        <td>모터스포츠</td>
        <td className='blue'>1:50.123</td>
      </tr>
      <tr>
        <td className='blue'>3</td>
        <td>홍길동</td>
        <td>길동컴퍼니</td>
        <td>모터스포츠</td>
        <td className='blue'>1:50.123</td>
      </tr>
      <tr>
        <td className='black' >4</td>
        <td>홍길동</td>
        <td>길동컴퍼니</td>
        <td>모터스포츠</td>
        <td className='black' >1:50.123</td>
      </tr>
      <tr>
        <td className='black' >5</td>
        <td>홍길동</td>
        <td>길동컴퍼니</td>
        <td>모터스포츠</td>
        <td className='black' >1:50.123</td>
      </tr>
      <tr>
        <td className='black'>6</td>
        <td>홍길동</td>
        <td>길동컴퍼니</td>
        <td>모터스포츠</td>
        <td className='black'>1:50.123</td>
      </tr>
      <tr>
        <td className='black'>7</td>
        <td>홍길동</td>
        <td>길동컴퍼니</td>
        <td>모터스포츠</td>
        <td className='black'>1:50.123</td>
      </tr>
      <tr>
        <td className='black'>8</td>
        <td>홍길동</td>
        <td>길동컴퍼니</td>
        <td>모터스포츠</td>
        <td className='black'>1:50.123</td>
      </tr>
      <tr>
        <td className='black'>9</td>
        <td>홍길동</td>
        <td>길동컴퍼니</td>
        <td>모터스포츠</td>
        <td className='black'>1:50.123</td>
      </tr>
      <tr>
        <td className='black'>10</td>
        <td>홍길동</td>
        <td>길동컴퍼니</td>
        <td>모터스포츠</td>
        <td className='black'>1:50.123</td>
      </tr>
    </tbody>
  </Table>
  </>
  )
}