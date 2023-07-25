import React from "react";

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <section className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={`../images/${props.coverImg}`} />
      <div className="card--stats">
        <img src="images\star.png" />
        <p>
          <span>{props.rating}</span>({props.reviewCount}) • {props.location}
        </p>
      </div>
      <p className="card--text">{props.title}</p>
      <p className="card--text">
        <span>From ${props.price} </span>/ person
      </p>
    </section>
  );
}
