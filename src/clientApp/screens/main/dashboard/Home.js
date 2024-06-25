import "./Home.css";
import Layout from "../../../components/Layout/Layout";
import Shareholder from "../../../components/shareholder/Shareholder";
import Summary from "../../..//components/summary/Summary";
import Stepper from "../../../components/biStepper/Stepper";
import Welcome from "../../../components/welcome/Welcome";

const Home = () => {
  return (
    <>
      <Layout>
        <div className="w-full">
          <Stepper />
          <Welcome />
          <br />
          <Shareholder />
          <br />
          <Summary />
        </div>
      </Layout>
    </>
  );
};

export default Home;
