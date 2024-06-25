import './Home.css';
import Layout from '../../../components/Layout/Layout';
import Shareholder from '../../../components/shareholder/Shareholder';
import Summary from '../../..//components/summary/Summary';
import Stepper from '../../../components/biStepper/Stepper';

const Home = () => {
  return (
    <>
      <Layout>
        <div className="w-full">
          <Stepper />
          <Shareholder />
          <br />
          <Summary />
        </div>
      </Layout>
    </>
  );
};

export default Home;
