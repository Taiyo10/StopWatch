import React from 'react';


export default function StopWatch(props: any) {
    
    function formatTime(timer:number) {
        let hr = Math.floor(timer / 3600);
        let min = Math.floor((timer / 60) % 60);
        let sec = Math.floor(timer % 60);
        let pad = (val) => ("0" + val).slice(-2);

        return `${pad(hr)}:${pad(min)}:${pad(sec)}`;
    }

    return (
    <div>
        <p>{formatTime(props.time)}</p>
    </div>
  );
}

