import React from 'react'
import '../inbox/inbox.css'
import { FaBars  } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from '@fortawesome/free-solid-svg-icons';
import Selection from '../../../Component/body/selection/selection';

function inbox() {
    return (
        <div className='container_content'>
            <div className='wrapper'>
                <h2>Inbox</h2>
                <div className='right_title'>
                <FontAwesomeIcon icon={faComment} style={{color: "#f3cece",}} />
                    <div className="menu"><FaBars /></div>
                </div>
            </div>

            <div className='body_selection'>
                <Selection />
            </div>
        </div>
    )
}

export default inbox