import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

export default function RankingTitle() {
	
	return( 
		<div className='ranking-width'>
		<Tabs style={{border:'none'}}>
			<Tab eventKey="title" className='ranking-title'>
				<h1 className='font900' style={{marginLeft:'1rem'}}>
					Hyundai N Time Attack Challenge<br></br> 
					Bset Lap Time Top 10</h1>
			</Tab>
		</Tabs>
		</div>
  ) 
}