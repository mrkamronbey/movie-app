/* eslint-disable react/prop-types */
import { Col, Row } from "react-grid-system";
import CardComponent from "../../../../components/card";
import s from "./index.module.css";
import { TopRatingMoviesGet } from "../../model/api";
import { useQuery } from "@tanstack/react-query";
import { Pagination, Spin } from "antd";
import { usePaginationStore } from "../../../../store";

const TopRating = ({ handleTop }) => {
  const { page, setPage } = usePaginationStore();
  const { data, isLoading } = useQuery({
    queryKey: ["topRateMovie", page],
    queryFn: () => TopRatingMoviesGet(page),
  });
  const handlePage = (pageSize) => {
    setPage(pageSize);
  };

  return (
    <div className={s.topRating_wrapper}>
      <div className="container">
        <h1 className={s.topRating_title}>Top Rating Movies</h1>
        <div style={{ position: "relative" }}>
          {isLoading ? (
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100vh",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backdropFilter: "blur(10px)",
                background: "#fff",
                padding: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "0 auto",
                textAlign: "center",
              }}
            >
              <Spin size="large" />
            </div>
          ) : (
            <Row>
              {data?.map((elem) => (
                <Col
                  className={s.top_rating_col}
                  key={elem.id}
                  xxl={2}
                  xl={3}
                  lg={4}
                  md={4}
                  xs={6}
                >
                  <button
                    className={s.card_btn}
                    id={elem.id}
                    key={elem.id}
                    onClick={(e) => handleTop(e.currentTarget.id)}
                    style={{ textDecoration: "none" }}
                  >
                    <CardComponent
                      id={elem.id}
                      name={elem.title}
                      year={elem.release_date}
                      rate={elem.vote_average}
                      image={elem.poster_path}
                    />
                  </button>
                </Col>
              ))}
            </Row>
          )}
        </div>

        <div className={s.pagination_wrapper}>
          <Pagination
            showSizeChanger
            onChange={handlePage}
            defaultCurrent={1}
            total={500}
          />
        </div>
      </div>
    </div>
  );
};

export default TopRating;
