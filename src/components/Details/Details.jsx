import { useState, useEffect} from "react";

export function Details({ info }) {
    const [details, setDetails] = useState(null);
  
    useEffect(() => {
      fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`)
        .then(response => response.json())
        .then(data => setDetails(data));
    }, [info]);
    if (!details) {
        return <div>Loading...</div>; 
    }
  
    return (
      <div>
        <img src={`${details.avatar}?${Date.now()}`} alt={`Avatar of ${details.name}`} />
        <h2>{details.name}</h2>
        <p>{details.details.city}</p>
        <p>{details.details.company}</p> 
        <p>{details.details.position}</p>
      </div>
    );
  }