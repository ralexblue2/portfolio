import React, { useState } from 'react';
import '../styles/playing-card.scss';
import classNames from 'classnames';


type Option = { label: string; value: string };

type Options = Option[];

type playingCardProps = {
  label: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  cardNumber?:number;
  isActive?:number;
  IsActiveIn?:number;
  onClick ?: any;    
};

export const PlayingCard = ({ label, value,  onChange, cardNumber, IsActiveIn, isActive, onClick }: playingCardProps) => {

  const [isHovered, setIsHovered] = useState(false);

  const playingCardClass = classNames({
		playingCardBody: true,
		'alreadyHovered': isHovered && isActive !== cardNumber,
    'isActive': isActive == cardNumber,
    'isActiveIn': IsActiveIn == cardNumber,
	});

  return (
    <div className={playingCardClass} onClick={()=>onClick(cardNumber)} onMouseEnter={() => setIsHovered(true)}>
      <div className="playingCardHeader">{label}</div>
      <div className='playingCardBodyMode'></div>
    </div>
  );
};
