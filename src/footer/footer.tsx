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
            />
             <PlayingCard
            label="another"
            />
            <PlayingCard
            label="another 2"
            />
            <PlayingCard
            label="another 3"
            />
            <PlayingCard
            label="another 4"
            />
      </div>
    </div>
  );
};