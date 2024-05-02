/* eslint-disable react/prop-types */
import "react-lazy-load-image-component/src/effects/blur.css";
import { Card } from "antd";
import s from "./index.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
const { Meta } = Card;
const CardComponent = ({ name, year, rate, image, id }) => {
  return (
    <Card
      id={id}
      hoverable
      style={{
        width: "auto",
        position: "relative",
      }}
      cover={
        <LazyLoadImage
          id={id}
          alt="movie_image"
          effect="blur"
          wrapperProps={{
            style: { transitionDelay: "1s" },
          }}
          style={{width: "100%"}}
          src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${image}`}
        />
      }
    >
      <div id={id} className={s.progress}>
        <p id={id}>{rate.toFixed(1)}</p>
      </div>

      <Meta id={id} title={name} description={year} />
    </Card>
  );
};
export default CardComponent;
