import {useState, useEffect}  from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../component/AdminLayout';
import AdminChart from '../component/AdminChart';
import AdminPDF from '../component/AdminPDF';
import Admin from './Admin';

export default function Auth() {
  const [isAdmin, setIsAdmin] = useState(false);
  const authCode = '1234';
	const [inputData, setInputData] = useState('');
	const navigate = useNavigate();

 const onChangeCode = (e) => {
	setInputData(e.target.value);
 }

 const authCheck = () => {
	if(authCode === inputData) {
		setIsAdmin(true);
	}else {
		setIsAdmin(false);
	}
 }

	return (
		<>
			<div>인증페이지-인증코드를 입력하세요!</div>
			<input type='password' id='pw' name='pw' onChange={onChangeCode}></input>
			<button onClick={authCheck}>submit</button>
			{	isAdmin ? 
				(
					<>
						<AdminChart></AdminChart>
						<AdminPDF></AdminPDF>
					</>
				) 
					: 
				(
				<div>
					인증코드를 확인해주세요
				</div>
				)
			}
		</>
	)
}
