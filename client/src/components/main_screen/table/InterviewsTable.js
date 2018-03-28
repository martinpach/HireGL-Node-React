import React, { Component } from 'react';
import Spinner from 'react-md-spinner';
import InterviewRow from './InterviewRow';
import config from '../../../config';

let firstVisibleInterview = 0;
let lastVisibleInterview = config.interviewsPerPage;

export default class InterviewsTable extends Component {
    handleNextClickEvent() {
        if (firstVisibleInterview + config.interviewsPerPage < this.props.interviews.numOfInterviews) {
            firstVisibleInterview += config.interviewsPerPage;
            lastVisibleInterview = firstVisibleInterview + config.interviewsPerPage;
            lastVisibleInterview = lastVisibleInterview > this.props.interviews.numOfInterviews ? this.props.interviews.numOfInterviews : lastVisibleInterview;
            
            this.props.fetchInterviews(firstVisibleInterview);
        }
    }

    handleBackClickEvent() {
        if (firstVisibleInterview - config.interviewsPerPage >= 0) {
            firstVisibleInterview -= config.interviewsPerPage;
            lastVisibleInterview = firstVisibleInterview + config.interviewsPerPage;
            this.props.fetchInterviews(firstVisibleInterview);
        }
    }

    render() {
        if (!this.props.interviews.interviews) {
            return <div className="text-center mt-5"><Spinner singleColor="rgb(76, 175, 80)" size="50" /></div>;
        }

        const rows = this.props.interviews.interviews.map(interview => <InterviewRow interview={interview} key={interview._id} />);

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
                        <small className="mr-1">Showing {firstVisibleInterview + 1}-{lastVisibleInterview > this.props.interviews.numOfInterviews ? this.props.interviews.numOfInterviews : lastVisibleInterview} from {this.props.interviews.numOfInterviews}</small>
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-secondary" onClick={this.handleBackClickEvent.bind(this)}>&lt;</button>
                            <button type="button" className="btn btn-secondary" onClick={this.handleNextClickEvent.bind(this)}>&gt;</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}