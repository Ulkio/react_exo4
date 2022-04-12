import React, { Component } from "react";
import { posts as data } from "../api/data.js";
import styles from "./List.module.css";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: data,
    };
  }
  render() {
    return (
      <>
        <ul className={styles.list}>
          {this.state.list.map((item) => {
            return (
              <li key={item.id}>
                {item.title} : {item.content}
              </li>
            );
          })}
        </ul>
        <ul>
          {new Array(4).fill("coucou").map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </>
    );
  }
}

export default List;
