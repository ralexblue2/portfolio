import React from 'react'
import { PlayingCard } from './card';
import '../styles/footer.scss';

type FooterProps = {};

export const Footer = ({}: FooterProps) => {
  return (
    <div className="footerBody">  
        <div className="cardHolderBody">
            <PlayingCard
            label="Home"
            cardNumber = {1}
            />
             <PlayingCard
            label="another"
            cardNumber = {2}
            />
            <PlayingCard
            label="another 2"
            cardNumber = {3}
            />
            <PlayingCard
            label="another 3"
            cardNumber = {4}
            />
            <PlayingCard
            label="another 4"
            cardNumber = {5}
            />
      </div>
      <div className="footerBodyBackground"></div>
    </div>
  );
};