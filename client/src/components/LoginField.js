import React from 'react';

export default ({ input, label, type, meta: {error, touched} }) => {
    return (
        <div className="form-group">
            <label htmlFor={label}>{label}</label>
            <input {...input} className="form-control" type={type} />
            <span className="text-danger">{touched && error}</span>
        </div>
    )
}