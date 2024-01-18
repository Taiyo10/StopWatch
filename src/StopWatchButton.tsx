import React from 'react';


interface Props {
    children: any;
    onClick: () => void;
    }

export default function StopWatchButton({children, onClick} : Props) {
    return (
    <button className="button" onClick={onClick}> {children} </button>
  );
}

