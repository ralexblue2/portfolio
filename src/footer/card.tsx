import React from 'react'
import '../styles/playing-card.scss';

type Option = { label: string; value: string };

type Options = Option[];

type playingCardProps = {
  label: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const PlayingCard = ({ label, value,  onChange }: playingCardProps) => {
  let onCLick = () =>{
    console.log("clicked me lol")
  }
  return (
    <div className="playingCardBody" onClick={onCLick}>
      <div className="playingCardHeader">{label}</div>
      <div className='playingCardBodyMode'></div>
    </div>
  );
};
