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
};

export const PlayingCard = ({ label, value,  onChange, cardNumber }: playingCardProps) => {
  let onCLick = () =>{
    console.log("clicked me lol")
  }
  const [isHovered, setIsHovered] = useState(false);

  const playingCardClass = classNames({
		playingCardBody: true,
		'alreadyHovered': isHovered,
	});

  return (
    <div className={playingCardClass} onClick={onCLick} onMouseEnter={() => setIsHovered(true)}>
      <div className="playingCardHeader">{label}</div>
      <div className='playingCardBodyMode'></div>
    </div>
  );
};
