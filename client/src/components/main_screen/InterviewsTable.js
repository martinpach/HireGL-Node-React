import React from 'react';

const InterviewRow = interview => {
    return (
        <tr key={interview._id}>
            <td>{interview.candidate.firstName} {interview.candidate.lastName}</td>
            <td>{interview.candidate.phone}</td>
            <td>{interview.candidate.email}</td>
            <td>{interview.interview.status}</td>
            <td>TODO</td>
        </tr>
    );
}


export default (props) => {
    if (!props.interviews) {
        return <div></div>;
    }

    const rows = props.interviews.map(interview => InterviewRow(interview));


    return (
        <div className="table-responsive">
            <table className="table mx-auto width-75 mt-2">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    );
}