import RankingTitle from './RankingTitle';
import RankingTab from './RankingTab';

export default function Ranking() {
  return(
		<section className="page-section-ranking" id="services">
      <div className="container">
        <div className="text-start">
          <RankingTitle></RankingTitle>
          <RankingTab></RankingTab>
        </div>
      </div>
    </section>
	)
}