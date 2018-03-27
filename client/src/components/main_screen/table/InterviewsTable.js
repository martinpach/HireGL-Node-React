import React from 'react';
import Spinner from 'react-md-spinner';
import InterviewRow from './InterviewRow';

export default (props) => {
    if (!props.interviews.interviews) {
        return <div className="text-center mt-5"><Spinner singleColor="rgb(76, 175, 80)" size="50" /></div>;
    }

    const rows = props.interviews.interviews.map(interview => <InterviewRow interview={interview} key={interview._id} />);

    return (
        <div>
            <div className="row">
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
            </div>
            <div className="row">
                <div className="offset-xl-8 col-xl-4 offset-lg-7 col-lg-5 offset-sm-6 col-sm-6 offset-5">
                    <small className="mr-1">Showing {props.interviews.interviews.length} from {props.interviews.numOfInterviews}</small>
                    <div className="btn-group" role="group">
                        <button type="button" className="btn btn-secondary">&lt;</button>
                        <button type="button" className="btn btn-secondary">&gt;</button>
                    </div>
                </div>
            </div>
        </div>
    );
}