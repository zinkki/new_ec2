import { FaRegPlayCircle } from 'react-icons/fa';

export default function Youtube() {
  return (
    <section className="bg-light" id="portfolio">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading-po">유튜브 바로가기</h2>
          <h3 className="section-subheading-subpo">
            라이브를 통해 도전하고 있는 참가자를 확인해 보세요!
          </h3>
        </div>
        <div className="row">
          <div className="col-lg-12 col-sm-12 mb-12">
            <div className="portfolio-item-youtube">
              <a className="portfolio-link-youtube" href="https://www.youtube.com/@HyundaiNFestival">
                <div className="portfolio-hover-youtube col-lg-12">
                  
                </div>
                <img
                  className="img-fluid"
                  src={require("../asset/img/youtube01.png")}
                  alt="..."
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
	)
}