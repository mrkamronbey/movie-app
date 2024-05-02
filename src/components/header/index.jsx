import { Layout, Input, Button } from "antd";
import s from "./index.module.css";
import { Link } from "react-router-dom";
import { useSearchStore } from "../../store";
import { useQuery } from "@tanstack/react-query";
import { SearchMoviesGet } from "../../pages/home/model/api";
import NanImg from "../../assets/noimage.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState } from "react";
const { Header } = Layout;
const { Search } = Input;

const HeaderComponent = () => {
  const { searchValue, setSearchValue } = useSearchStore();
  const [isOpen, setIsOpen] = useState();
  const onSearch = (value) => {
    setSearchValue(value);
    setIsOpen(true);
  };

  const { data } = useQuery({
    queryKey: ["searchMovie", searchValue],
    queryFn: () => SearchMoviesGet(searchValue),
  });
  return (
    <>
      <Header
        style={{
          position: "fixed",
          top: 0,
          zIndex: 1,
          width: "100%",
          color: "#fff",
          padding: 0,
        }}
      >
        {isOpen && (
          <div className={s.search_result_wrapper}>
            <div className="container">
              <Button
                style={{ float: "right" }}
                onClick={() => setIsOpen(false)}
                type="primary"
              >
                Close
              </Button>
              {searchValue ? (
                <ul className={s.searchList}>
                  {data?.map((search) => (
                    <>
                      <li>
                        {
                          <Link
                            onClick={() => setIsOpen(false)}
                            to={`/details/${search.id}`}
                            className={s.search_link}
                          >
                            <LazyLoadImage
                              key={search.id}
                              alt="poster_image"
                              className={s.search_link}
                              effect="blur"
                              wrapperProps={{
                                style: { transitionDelay: "1s" },
                              }}
                              style={{
                                width: "45px",
                                height: "45px",
                                borderRadius: "50%",
                                marginRight: "20px",
                              }}
                              src={
                                search.poster_path === null
                                  ? NanImg
                                  : `https://image.tmdb.org/t/p/w45_and_h45_face${search?.poster_path}`
                              }
                            />
                            <p>{search.title}</p>
                          </Link>
                        }
                      </li>
                    </>
                  ))}
                </ul>
              ) : (
                <div className={s.notFound}>
                  <iframe
                    style={{ border: 0, width: "100%", height: "100%" }}
                    src="https://lottie.host/embed/6533495b-ed8c-4deb-a665-c7416ee6f34e/pLF14d61hc.json"
                  ></iframe>
                  <h2>No result found</h2>
                  <p>We couldn`t find any item based on your search.</p>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="container">
          <div className={s.wrapper}>
            <div>
              <Link to="/" className={s.logo_link}>
                <h1>TMDB</h1>
              </Link>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Search
                placeholder="Search for movies"
                onSearch={onSearch}
                enterButton
              />
            </div>
          </div>
        </div>
      </Header>
    </>
  );
};

export default HeaderComponent;
