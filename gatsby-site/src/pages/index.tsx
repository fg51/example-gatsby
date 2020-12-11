import React from "react"
// import { Link, graphql } from "gatsby";

import TodoList from "../components/TodoList"
import NameForm from "../components/NameForm"

export default function Home() {
  return (
    <div style={{ margin: "2em" }}>
      <NameForm />
      <TodoList />
    </div>
  )
}
//<form>
//  <label> Name: <input type="text" name="name" /> </label>
//  <input type="submit" value="Submit" />
//</form>
