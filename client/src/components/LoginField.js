import React from 'react';

export default ({ input, label, meta: {error, touched} }) => {
    return (
        <div className="form-group">
            <label htmlFor={label}>{label}</label>
            <input {...input} className="form-control"/>
            <span className="text-danger">{touched && error}</span>
        </div>
    )
}