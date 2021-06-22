import React from "react";
import { Link } from "react-router-dom";
import sortableData from "./helper/sortData";
import moment from "moment";

const Home = (props) => {
  const { items, requestSort } = sortableData(props.data.features || []);
  return (
    <div className="main-container">
      {props.data.metadata && (
        <h3 className="page-title">{props.data.metadata.title}</h3>
      )}
      <table className="earthquake-list">
        <thead>
          <tr>
            <th onClick={() => requestSort("title")}>Title</th>
            <th onClick={() => requestSort("mag")}>Magnitude</th>
            <th onClick={() => requestSort("time")}>Time</th>
          </tr>
        </thead>
        <tbody>
          {items &&
            items.length > 0 &&
            items.map((item, index) => (
              <tr key={index}>
                <td className="list-title">
                  <Link
                    to={{
                      pathname: `/detail/${item.properties.title}/${item.properties.mag}/${item.properties.time}/${item.properties.status}/${item.properties.tsunami}/${item.properties.type}`,
                      //  state: { properties: item.properties },
                    }}
                  >
                    {item.properties.title}
                  </Link>
                </td>

                <td>{item.properties.mag}</td>

                <td>
                  {moment(item.properties.time).format("MMMM D, YYYY, h:mm a")}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
