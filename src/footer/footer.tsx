import React , { useState }from 'react'
import { PlayingCard } from './card';
import '../styles/footer.scss';

type FooterProps = {};

export const Footer = ({}: FooterProps) => {



  const [IsActive, setIsActive] = useState(0);
  const [IsActiveIn, setIsActiveIn] = useState(0);

  let onCLickFunc = (num:number) =>{
    setIsActiveIn(IsActive)
    setIsActive(num)
    console.log(IsActive)
    console.log("moving to active")
  }

  return (
    <div className="footerBody">  
        <div className="cardHolderBody">
            <PlayingCard
            label="Home"
            cardNumber = {1}
            isActive = {IsActive}
            IsActiveIn = {IsActiveIn}
            onClick={onCLickFunc}
            />
             <PlayingCard
            label="another"
            cardNumber = {2}
            isActive = {IsActive}
            IsActiveIn = {IsActiveIn}
            onClick={onCLickFunc}
            />
            <PlayingCard
            label="another 2"
            cardNumber = {3}
            isActive = {IsActive}
            IsActiveIn = {IsActiveIn}
            onClick={onCLickFunc}
            />
            <PlayingCard
            label="another 3"
            cardNumber = {4}
            isActive = {IsActive}
            IsActiveIn = {IsActiveIn}
            onClick={onCLickFunc}
            />
            <PlayingCard
            label="another 4"
            cardNumber = {5}
            isActive = {IsActive}
            IsActiveIn = {IsActiveIn}
            onClick={onCLickFunc}
            />
      </div>
      <div className="footerBodyBackground"></div>
    </div>
  );
};