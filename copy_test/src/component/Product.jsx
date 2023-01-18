export default function Product() {
  return (
    <section className="page-section bg-light" id="portfolio">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading-po">상품</h2>
          <h3 className="section-subheading-subpo">
            현대 N만의 특별한 상품을 드립니다!
          </h3>
        </div>
        <div className="row">
          <div className="col-lg-4 col-sm-6 mb-4">
            <div className="portfolio-item">
              <a className="portfolio-link" data-bs-toggle="modal">
                <img
                  className="img-fluid"
                  src={require("../asset/img/img-update-product1.jpg")}
                  alt="..."
                />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">
                  최종 결승 1등
                </div>
                <div className="portfolio-caption-subheading text-muted">
                  현대N x 펠리칸 케이스 3종 세트
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4">
            <div className="portfolio-item">
              <a className="portfolio-link" data-bs-toggle="modal">
                <img
                  className="img-fluid"
                  src={require("../asset/img/img-product04.jpg")}
                  alt="..."
                />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">최종 결승 2등</div>
                <div className="portfolio-caption-subheading text-muted">
                  현대N x STEALER 선글라스
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4">
            <div className="portfolio-item">
              <a className="portfolio-link" data-bs-toggle="modal">
                <img
                  className="img-fluid"
                  src={require("../asset/img/img-product05.jpg")}
                  alt="..."
                />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">최종 결승 3등</div>
                <div className="portfolio-caption-subheading text-muted">
                  현대N x 펠리칸 1170 케이스
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4">
            <div className="portfolio-item">
              <a className="portfolio-link" data-bs-toggle="modal">
                <img
                  className="img-fluid"
                  src={require("../asset/img/img-update-product2.jpg")}
                  alt="..."
                />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">참가자 전원</div>
                <div className="portfolio-caption-subheading text-muted">
                  N 컬렉션 핀뱃지 4종 중 랜덤증정(중복 수령X)
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4">
            <div className="portfolio-item">
              <a className="portfolio-link">
                <img
                  className="img-fluid"
                  src={require("../asset/img/img-gift-01.png")}
                  alt="..."
                />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">데일리 베스트 드라이버</div>
                <div className="portfolio-caption-subheading text-muted">
                  N 세차 용품 세트(1일 1명, 중복 수령X)
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <h3 className="section-subheading-tiny">
            *참가경품 및 데일리 베스트 드라이버 경품은 중복수령 불가
          </h3>
        </div>
      </div>
    </section>
  );
}
