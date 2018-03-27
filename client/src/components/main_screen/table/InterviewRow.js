import React from 'react';

export default ({ interview }) => {
    return (
        <tr key={interview._id}>
            <td>{interview.candidate.firstName} {interview.candidate.lastName} <br />
                {interview.candidate.position}</td>
            <td>{interview.candidate.phone}</td>
            <td>{interview.candidate.email}</td>
            <td>{interview.interview.status}</td>
            <td>TODO</td>
        </tr>
    );
};