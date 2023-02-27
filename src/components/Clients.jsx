import React from "react";
import { clients } from "../constants/index";
import styles from "../style";

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <ul className={`${styles.flexCenter} flex-wrap w-full list-none p-0`}>
        {clients.map((client) => (
          <li
            key={client.id}
            className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}
          >
            <img
              src={client.logo}
              alt={`${client.name} logo`}
              className="sm:w-[192px] w-[100px] object-contain"
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Clients;
