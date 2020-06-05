import React, { Component } from "react";
import Title from "./Title.js";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info:
          "Ea tempor quis voluptate pariatur culpa voluptate in nostrud reprehenderit aliquip veniam Lorem.",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "Consectetur officia enim ea ullamco incididunt velit pariatur ad eiusmod ex consectetur ipsum.",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle Van",
        info: "Officia laborum irure reprehenderit et eu enim commodo.",
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info:
          "Irure commodo non qui fugiat. Labore Lorem in nulla reprehenderit fugiat qui. Ea eu in velit officia non dolore anim.",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
