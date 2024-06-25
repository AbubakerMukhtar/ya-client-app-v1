import "./Home.css";
import Layout from "../../../components/Layout/Layout";
import BusinessIncorporation from "../../../components/biStepper/BusinessIncorporation";

const Home = () => {
  return (
    <>
      <Layout>
        <div className="w-full">
          <BusinessIncorporation />
          
        </div>
      </Layout>
    </>
  );
};

export default Home;
