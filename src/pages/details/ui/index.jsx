import { useNavigate, useParams } from "react-router-dom";
import DeatilsHero from "./details_hero";
import TopRating from "./top_rating";
import { useQuery } from "@tanstack/react-query";
import { DetailsFindMovies } from "./../model/api";
import { Spin } from "antd";

const Deatils = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["findMovie", id],
    queryFn: () => DetailsFindMovies(id),
  });

  const handleTop = (id) => {
    window.scrollTo(0, 0);
    navigate(`/details/${id}`);
  };

  return (
    <>
      {isLoading && (
        <div
          style={{
            position: "fixed",
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
            zIndex: "999",
          }}
        >
          <Spin size="large" />
        </div>
      )}

      <DeatilsHero data={data} />
      <TopRating handleTop={handleTop} />
    </>
  );
};

export default Deatils;
