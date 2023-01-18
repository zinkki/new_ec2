import { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

export default function AdminChart() {

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
	
	const [name_01, setName_01] = useState('');
	const [compName_01, setCompName_01] = useState('');
	const [compDept_01, setCompDept_01] = useState('');
	const [lab_01, setLab_01] = useState('');
	const update_01 = () => {
		if(!name_01 || !compName_01 || !compDept_01 || !lab_01 ) return alert('공란을 확인하세요!');
		axios.post('/api/update_01', 
			{ 
				user_name: name_01, 
		  	company_name: compName_01,
				company_dept: compDept_01,
				labtime: lab_01
			})
			.then((res) => {
				alert('변경되었습니다');
			})
	}

	const [name_02, setName_02] = useState('');
	const [compName_02, setCompName_02] = useState('');
	const [compDept_02, setCompDept_02] = useState('');
	const [lab_02, setLab_02] = useState('');
	const update_02 = () => {
		if(!name_02 || !compName_02 || !compDept_02 || !lab_02 ) return alert('공란을 확인하세요!');
		axios.post('/api/update_02', 
			{ 
				user_name: name_02, 
		  	company_name: compName_02,
				company_dept: compDept_02,
				labtime: lab_02
			})
			.then((res) => {
				alert('변경되었습니다');
			})
	}

	const [name_03, setName_03] = useState('');
	const [compName_03, setCompName_03] = useState('');
	const [compDept_03, setCompDept_03] = useState('');
	const [lab_03, setLab_03] = useState('');
	const update_03 = () => {
		if(!name_03 || !compName_03 || !compDept_03 || !lab_03 ) return alert('공란을 확인하세요!');
		axios.post('/api/update_03', 
			{ 
				user_name: name_03, 
		  	company_name: compName_03,
				company_dept: compDept_03,
				labtime: lab_03
			})
			.then((res) => {
				alert('변경되었습니다');
			})
	}

	const [name_04, setName_04] = useState('');
	const [compName_04, setCompName_04] = useState('');
	const [compDept_04, setCompDept_04] = useState('');
	const [lab_04, setLab_04] = useState('');
	const update_04 = () => {
		if(!name_04 || !compName_04 || !compDept_04 || !lab_04 ) return alert('공란을 확인하세요!');
		axios.post('/api/update_04', 
			{ 
				user_name: name_04, 
		  	company_name: compName_04,
				company_dept: compDept_04,
				labtime: lab_04
			})
			.then((res) => {
				alert('변경되었습니다');
			})
	}

	const [name_05, setName_05] = useState('');
	const [compName_05, setCompName_05] = useState('');
	const [compDept_05, setCompDept_05] = useState('');
	const [lab_05, setLab_05] = useState('');
	const update_05 = () => {
		if(!name_05 || !compName_05 || !compDept_05 || !lab_05 ) return alert('공란을 확인하세요!');
		axios.post('/api/update_05', 
			{ 
				user_name: name_05, 
		  	company_name: compName_05,
				company_dept: compDept_05,
				labtime: lab_05
			})
			.then((res) => {
				alert('변경되었습니다');
			})
	}

	const [name_06, setName_06] = useState('');
	const [compName_06, setCompName_06] = useState('');
	const [compDept_06, setCompDept_06] = useState('');
	const [lab_06, setLab_06] = useState('');
	const update_06 = () => {
		if(!name_06 || !compName_06 || !compDept_06 || !lab_06 ) return alert('공란을 확인하세요!');
		axios.post('/api/update_06', 
			{ 
				user_name: name_06, 
		  	company_name: compName_06,
				company_dept: compDept_06,
				labtime: lab_06
			})
			.then((res) => {
				alert('변경되었습니다');
			})
	}

	const [name_07, setName_07] = useState('');
	const [compName_07, setCompName_07] = useState('');
	const [compDept_07, setCompDept_07] = useState('');
	const [lab_07, setLab_07] = useState('');
	const update_07 = () => {
		if(!name_07 || !compName_07 || !compDept_07 || !lab_07 ) return alert('공란을 확인하세요!');
		axios.post('/api/update_07', 
			{ 
				user_name: name_07, 
		  	company_name: compName_07,
				company_dept: compDept_07,
				labtime: lab_07
			})
			.then((res) => {
				alert('변경되었습니다');
			})
	}

	const [name_08, setName_08] = useState('');
	const [compName_08, setCompName_08] = useState('');
	const [compDept_08, setCompDept_08] = useState('');
	const [lab_08, setLab_08] = useState('');
	const update_08 = () => {
		if(!name_08 || !compName_08 || !compDept_08 || !lab_08 ) return alert('공란을 확인하세요!');
		axios.post('/api/update_08', 
			{ 
				user_name: name_08, 
		  	company_name: compName_08,
				company_dept: compDept_08,
				labtime: lab_08
			})
			.then((res) => {
				alert('변경되었습니다');
			})
	}	
	
	const [name_09, setName_09] = useState('');
	const [compName_09, setCompName_09] = useState('');
	const [compDept_09, setCompDept_09] = useState('');
	const [lab_09, setLab_09] = useState('');
	const update_09 = () => {
		if(!name_09 || !compName_09 || !compDept_09 || !lab_09 ) return alert('공란을 확인하세요!');
		axios.post('/api/update_09', 
			{ 
				user_name: name_09, 
		  	company_name: compName_09,
				company_dept: compDept_09,
				labtime: lab_09
			})
			.then((res) => {
				alert('변경되었습니다');
			})
	}

	const [name_10, setName_10] = useState('');
	const [compName_10, setCompName_10] = useState('');
	const [compDept_10, setCompDept_10] = useState('');
	const [lab_10, setLab_10] = useState('');
	const update_10 = () => {
		if(!name_10 || !compName_10 || !compDept_10 || !lab_10 ) return alert('공란을 확인하세요!');
		axios.post('/api/update_10', 
			{ 
				user_name: name_10, 
		  	company_name: compName_10,
				company_dept: compDept_10,
				labtime: lab_10
			})
			.then((res) => {
				alert('변경되었습니다');
			})
	}

  return(
		<>
	<Table hover className='col-lg-12'>
      <thead>
        <tr>
          <th>순위</th>
          <th>이름</th>
          <th>회사명</th>
					<th>부서</th>
					<th>랩타임</th>
					<th>변경</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{info1.idx}</td>
          <td><input type='text' placeholder={info1.user_name} onChange={(e)=>{ setName_01(e.target.value) }}/></td>
          <td><input type='text' placeholder={info1.company_name} onChange={(e)=>{ setCompName_01(e.target.value) }}/></td>
          <td><input type='text' placeholder={info1.company_dept} onChange={(e)=>{ setCompDept_01(e.target.value) }} /></td>
					<td><input type='text' placeholder={info1.labtime} onChange={(e)=>{ setLab_01(e.target.value) }}/></td>
					<td><button onClick={update_01}>변경</button></td>
        </tr>
        <tr>
					<td>{info2.idx}</td>
          <td><input type='text' placeholder={info2.user_name} onChange={(e)=>{ setName_02(e.target.value) }} /></td>
          <td><input type='text' placeholder={info2.company_name} onChange={(e)=>{ setCompName_02(e.target.value) }} /></td>
          <td><input type='text' placeholder={info2.company_dept} onChange={(e)=>{ setCompDept_02(e.target.value) }} /></td>
					<td><input type='text' placeholder={info2.labtime} onChange={(e)=>{ setLab_02(e.target.value) }}/></td>
					<td><button onClick={update_02}>변경</button></td>
        </tr>
        <tr>
					<td>{info3.idx}</td>
          <td><input type='text' placeholder={info3.user_name} onChange={(e)=>{ setName_03(e.target.value) }} /></td>
          <td><input type='text' placeholder={info3.company_name} onChange={(e)=>{ setCompName_03(e.target.value) }} /></td>
          <td><input type='text' placeholder={info3.company_dept} onChange={(e)=>{ setCompDept_03(e.target.value) }} /></td>
					<td><input type='text' placeholder={info3.labtime} onChange={(e)=>{ setLab_03(e.target.value) }}/></td>
					<td><button onClick={update_03}>변경</button></td>
        </tr>
				<tr>
					<td>{info4.idx}</td>
          <td><input type='text' placeholder={info4.user_name} onChange={(e)=>{ setName_04(e.target.value) }} /></td>
          <td><input type='text' placeholder={info4.company_name} onChange={(e)=>{ setCompName_04(e.target.value) }} /></td>
          <td><input type='text' placeholder={info4.company_dept} onChange={(e)=>{ setCompDept_04(e.target.value) }} /></td>
					<td><input type='text' placeholder={info4.labtime} onChange={(e)=>{ setLab_04(e.target.value) }}/></td>
					<td><button onClick={update_04}>변경</button></td>
        </tr>
				<tr>
					<td>{info5.idx}</td>
          <td><input type='text' placeholder={info5.user_name} onChange={(e)=>{ setName_05(e.target.value) }} /></td>
          <td><input type='text' placeholder={info5.company_name} onChange={(e)=>{ setCompName_05(e.target.value) }} /></td>
          <td><input type='text' placeholder={info5.company_dept} onChange={(e)=>{ setCompDept_05(e.target.value) }} /></td>
					<td><input type='text' placeholder={info5.labtime} onChange={(e)=>{ setLab_05(e.target.value) }}/></td>
					<td><button onClick={update_05}>변경</button></td>
        </tr>
				<tr>
					<td>{info6.idx}</td>
          <td><input type='text' placeholder={info6.user_name} onChange={(e)=>{ setName_06(e.target.value) }} /></td>
          <td><input type='text' placeholder={info6.company_name} onChange={(e)=>{ setCompName_06(e.target.value) }} /></td>
          <td><input type='text' placeholder={info6.company_dept} onChange={(e)=>{ setCompDept_06(e.target.value) }} /></td>
					<td><input type='text' placeholder={info6.labtime} onChange={(e)=>{ setLab_06(e.target.value) }}/></td>
					<td><button onClick={update_06}>변경</button></td>
        </tr>
				<tr>
					<td>{info7.idx}</td>
          <td><input type='text' placeholder={info7.user_name} onChange={(e)=>{ setName_07(e.target.value) }} /></td>
          <td><input type='text' placeholder={info7.company_name} onChange={(e)=>{ setCompName_07(e.target.value) }} /></td>
          <td><input type='text' placeholder={info7.company_dept} onChange={(e)=>{ setCompDept_07(e.target.value) }} /></td>
					<td><input type='text' placeholder={info7.labtime} onChange={(e)=>{ setLab_07(e.target.value) }}/></td>
					<td><button onClick={update_07}>변경</button></td>
        </tr>
				<tr>
					<td>{info8.idx}</td>
          <td><input type='text' placeholder={info8.user_name} onChange={(e)=>{ setName_08(e.target.value) }} /></td>
          <td><input type='text' placeholder={info8.company_name} onChange={(e)=>{ setCompName_08(e.target.value) }} /></td>
          <td><input type='text' placeholder={info8.company_dept} onChange={(e)=>{ setCompDept_08(e.target.value) }} /></td>
					<td><input type='text' placeholder={info8.labtime} onChange={(e)=>{ setLab_08(e.target.value) }}/></td>
					<td><button onClick={update_08}>변경</button></td>
        </tr>
				<tr>
					<td>{info9.idx}</td>
          <td><input type='text' placeholder={info9.user_name} onChange={(e)=>{ setName_09(e.target.value) }} /></td>
          <td><input type='text' placeholder={info9.company_name} onChange={(e)=>{ setCompName_09(e.target.value) }} /></td>
          <td><input type='text' placeholder={info9.company_dept} onChange={(e)=>{ setCompDept_09(e.target.value) }} /></td>
					<td><input type='text' placeholder={info9.labtime} onChange={(e)=>{ setLab_09(e.target.value) }}/></td>
					<td><button onClick={update_09}>변경</button></td>
        </tr>
				<tr>
					<td>{info10.idx}</td>
          <td><input type='text' placeholder={info10.user_name} onChange={(e)=>{ setName_10(e.target.value) }} /></td>
          <td><input type='text' placeholder={info10.company_name} onChange={(e)=>{ setCompName_10(e.target.value) }} /></td>
          <td><input type='text' placeholder={info10.company_dept} onChange={(e)=>{ setCompDept_10(e.target.value) }} /></td>
					<td><input type='text' placeholder={info10.labtime} onChange={(e)=>{ setLab_10(e.target.value) }}/></td>
					<td><button onClick={update_10}>변경</button></td>
        </tr>
      </tbody>
    </Table>

	</>
	)
}