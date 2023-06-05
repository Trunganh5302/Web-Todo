import React from "react";
import "../sidebar/sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarsProgress,
  faCalendarWeek,
  faWind,
} from "@fortawesome/free-solid-svg-icons";

function sidebar() {
  return (
    <div className="container">
      <div className="sidebar">
        <ul className="sidebar-menu">
          <li className="sidebar-tag">
            <div className="tag_left">
              <FontAwesomeIcon
                icon={faBarsProgress}
                style={{ color: "#97baf7" }}
              />
              <a href="/tasks">Tất cả các lịch đã lên</a>
            </div>
            <p>5</p>
          </li>
          <li className="sidebar-tag">
            <div className="tag_left">
              <FontAwesomeIcon
                icon={faCalendarWeek}
                style={{ color: "#f69b6a" }}
              />
              <a href="/calendar">Hôm nay</a>
            </div>
            <p>5</p>
          </li>
          <li className="sidebar-tag">
            <div className="tag_left">
              <FontAwesomeIcon icon={faWind} style={{ color: "#52a451" }} />
              <a href="/settings">Lịch sắp đến</a>
            </div>
            <p>5</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default sidebar;
