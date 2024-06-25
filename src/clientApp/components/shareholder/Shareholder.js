import React from 'react';
import './Shareholder.css';
import PersonCard from '../personCard/PersonCard';
import theme from '../../assets/theme';
import HeaderShDir from '../headerShDir/HeaderShDir';

const { images } = theme;

const Shareholder = (props) => {
  return (
    <>
      <div className="shareholder-paper">
        <HeaderShDir
          title="Shareholders"
          description="A shareholder is an individi tial owner with a financial interest in the corporation's"
          buttonText="Add Shareholder"
        />
        <div className="shareholder-content">
          <PersonCard
            person={images.profilePic}
            name="Abubaker Mukhtar"
            email="abubakar.mukhtar@gmail.com"
            phone="+92 300 5847896"
            resident="Canadian"
            address="D1 Johar Town, Lahore, Pakistan."
          />
          <PersonCard
            person={images.profilePic}
            name="Abubaker Mukhtar"
            email="abubakar.mukhtar@gmail.com"
            phone="+92 300 5847896"
            resident="Canadian"
            address="D1 Johar Town, Lahore, Pakistan."
          />
          <PersonCard
            person={images.profiledp}
            name="Ahsan Shakoor"
            email="ahsanshakoor@gmail.com"
            phone="+92 300 5847896"
            resident="Canadian"
            address="Johar Town, Lahore"
          />
          <PersonCard
            person={images.profilePic}
            name="Abubaker Mukhtar"
            email="abubakar.mukhtar@gmail.com"
            phone="+92 300 5847896"
            resident="Canadian"
            address="D1 Johar Town, Lahore, Pakistan."
          />
        </div>
      </div>
    </>
  );
};

export default Shareholder;
