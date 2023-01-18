import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import RankingChart from './RankingChart';

export default function RankingTab() {
  const title = <div className='labtimeTitle'>베스트 랩 타임10</div>;
	return(
		<>
		<img className="ranking-left" src={require("../asset/img/labtime.png")} alt="..." />
		<div className='mt-5 ranking-width'>
			<Tabs defaultActiveKey="home" id="fill-tab-example">
				<Tab eventKey="home" title={title} className='bg-white'>
					<RankingChart></RankingChart>
				</Tab>
			</Tabs>
		</div>
		</>
	)
}