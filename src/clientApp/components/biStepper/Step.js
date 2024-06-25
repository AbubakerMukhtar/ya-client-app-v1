
import './Step.css';

const Step = ({ label, isActive }) => {
  return (
    <div className={`step ${isActive ? 'active' : ''}`}>
      <span className="step-label">{label}</span>
    </div>
  );
};

export default Step;
