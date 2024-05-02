/* eslint-disable react/prop-types */
import { Col, Row } from "react-grid-system";
import s from "../index.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const DetailsHero = ({ data }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${data?.backdrop_path}`;
  const BGStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left calc((50vw - 170px) - 340px) top",
    backgroundSize: "cover",
  };

  return (
    <div className={s.details_wrapper}>
      <div className={s.movie_details_card} style={BGStyle}>
        <div className="container">
          <Row className={s.details_row}>
            <Col className={s.details_col} lg={4} xs={12}>
              <LazyLoadImage
                alt="poster_image"
                className={s.poster_img}
                effect="blur"
                wrapperProps={{
                  style: { transitionDelay: "1s" },
                }}
                style={{ width: "100%", borderRadius: "15px" }}
                src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${data?.poster_path}`}
              />
            </Col>
            <Col className={s.details_col} lg={8} xs={12}>
              <div>
                <h1 className={s.movie_title}>{data?.title}</h1>
                <div className={s.movie_details}>
                  <ul className={s.genre_box}>
                    {data?.genres.map((genre) => (
                      <li key={genre.id}>
                        <p>{genre?.name}</p>
                      </li>
                    ))}
                  </ul>
                  <ul key={data?.id} className={s.movie_other_details}>
                    <li>
                      <p>
                        <span>
                          <i className="bx bx-globe"></i> Language:
                        </span>
                        {data?.spoken_languages.map((lang, index) => (
                          <span key={index} className={s.lang_span}>
                            {lang?.name || ""}
                          </span>
                        ))}
                      </p>
                    </li>
                    <li>
                      <p>
                        <span>
                          <i className="bx bxs-calendar"></i> Release date:
                        </span>
                        {data?.release_date}
                      </p>
                    </li>
                    <li>
                      <p>
                        <span>
                          <i className="bx bxs-star"></i>Rating:
                        </span>
                        <span>{data?.vote_average.toFixed(1)}/10</span>
                      </p>
                    </li>
                    <li>
                      <p>
                        <span>
                          <i className="bx bxs-show"></i>Watched:
                        </span>
                        {data?.popularity} views
                      </p>
                    </li>
                    <li>
                      <p>
                        <span>
                          <i className="bx bx-globe"></i>Country:
                        </span>
                        {data?.origin_country.map((country, index) => (
                          <span key={index} className={s.lang_span}>
                            {country}
                          </span>
                        ))}
                      </p>
                    </li>
                    <li>
                      <p>
                        <span>Status:</span>
                        {data?.status}
                      </p>
                    </li>
                  </ul>
                </div>
                <h2>Overview</h2>
                <p>{data?.overview}</p>

                <ul className={s.movie_other_details}>
                  <li>
                    <p>
                      <span>
                        <i className="bx bxs-dollar-circle"></i>Budget:
                      </span>
                      ${data?.budget}
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>
                        <i className="bx bxs-dollar-circle"></i>Revenue:
                      </span>
                      ${data?.revenue}
                    </p>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default DetailsHero;
