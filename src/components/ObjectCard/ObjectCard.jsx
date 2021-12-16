import React from 'react'
import { Link } from 'react-router-dom'
import "./ObjectCard.css"
function ObjectCard({file}) {
    return (
        <Link to={`/item/${file._id}`}><div className="object-card">
            <div className="object-card-thumb">
                {/* <img src="" alt="" /> */}
            </div>
            <div className="object-card-footer">
                <h3>{file.label}</h3>
            </div>
        </div>
        </Link>
    )
}

export default ObjectCard
