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
    const array = ["1", "2", "3", "4"];
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
          {array.map((index, item) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </>
    );
  }
}

export default List;
