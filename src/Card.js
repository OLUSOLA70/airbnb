import React from "react";
import swim from './swim.png';
import mountainbike from './mountainbike.png';
import wedding from './wedding.png';

export default function Card(props) {
  return(
      <div className="wrap">
          <div className="card">
              <div className="badge sold-out">Sold Out</div>
              <img src={swim} className="card-image" alt="Swimming" />
              <p>
                  <span className="rating">{props.rating}</span> (6) · USA <br />
                  <span className="title">{props.title}</span> <br />
                  <span className="price">{props.price}<span className="per-person">/ person</span></span>
              </p>
          </div>
          
          <div className="card">
              <div className="badge online">Online</div>
              <img src={wedding} className="card-image" alt="Wedding Photography" />
              <p>
                  <span className="rating">★ 5.0</span> (30) · USA <br />
                  <span className="title">Learn wedding photography</span> <br />
                  <span className="price">From $125 <span className="per-person">/ person</span></span>
              </p>
          </div>

          <div className="card">
              <img src={mountainbike} className="card-image" alt="Mountain Biking" />
              <p>
                  <span className="rating">★ 4.8</span> (2) · USA <br />
                  <span className="title">Group Mountain Biking</span> <br />
                  <span className="price">From $50 <span className="per-person">/ person</span></span>
              </p>
          </div>
      </div>
  );
}