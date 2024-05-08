// Filter.js
import React from "react";
import './Filter.css';

function Filter({ handleFilterChoose }) {
    return (
        <ul className="list-group d-flex flex-row mb-3">
            <li className="list-group-item">
                <input
                    className="form-check-input me-1"
                    type="checkbox"
                    value="Support"
                    id="firstCheckbox"
                    onChange={handleFilterChoose}
                />
                <label className="form-check-label" htmlFor="firstCheckbox">Support</label>
            </li>
            <li className="list-group-item">
                <input
                    className="form-check-input me-1"
                    type="checkbox"
                    value="Medic"
                    id="secondCheckbox"
                    onChange={handleFilterChoose}
                />
                <label className="form-check-label" htmlFor="secondCheckbox">Medic</label>
            </li>
            {/* Add more list items as needed */}
        </ul>
    );
}

export default Filter;
