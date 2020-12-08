import React from "react"
// import { Link, graphql } from "gatsby";

import TodoList from '../components/TodoList';

export default function Home() {
  return (
    <div style={{ margin: "2em"}}>
      <TodoList/>
    </div>
  );
}
