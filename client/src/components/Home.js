import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
    render() {
        if (!this.props.isAuthenticated) {
            this.props.history.push('/');
            return;
        } else {
            return (
                <div>
                    Home
                 </div>
            );
        }
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        isAuthenticated: state.auth.isAuthenticated
    };
}

export default connect(mapStateToProps)(Home);