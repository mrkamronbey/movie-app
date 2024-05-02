import { Layout } from "antd";
const {Footer} = Layout

const FooterComponent = () => {
  return (
    <div>
      <div>
        <Footer
          style={{
            textAlign: "center",
            backgroundColor: "#001529",
            color: "#fff"
          }}
        >
          Developer ©{new Date().getFullYear()} Created by TMDB API Movie
        </Footer>
      </div>
    </div>
  );
};

export default FooterComponent;
