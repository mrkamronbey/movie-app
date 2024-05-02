
import { Col, Row } from "react-grid-system";
import CardComponent from "../../../../components/card";
import { Link } from "react-router-dom";
import s from "../index.module.css";
import { useQuery } from "@tanstack/react-query";
import { PopularMoviesGet } from "../../model/api";
import { Pagination, Spin } from "antd";
import { usePaginationStore } from "../../../../store";
const MovieList = () => {
  const { page, setPage } = usePaginationStore();
  const { data, isLoading } = useQuery({
    queryKey: ["popularMovie", page],
    queryFn: () => PopularMoviesGet(page),
  });
  const handlePage = (pageSize) => {
    setPage(pageSize);
  };
  return (
    <>
      <div className="container">
        <h1 className={s.popular_title}>Popular movies</h1>
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
              {data &&
                data.map((elem) => (
                  <Col
                    className={s.col}
                    key={elem.id}
                    xl={2}
                    lg={3}
                    md={4}
                    xs={6}
                  >
                    <Link
                      to={`/details/${elem.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <CardComponent
                        name={elem.title}
                        year={elem.release_date}
                        rate={elem.vote_average}
                        image={elem.poster_path}
                      />
                    </Link>
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
    </>
  );
};

export default MovieList;
