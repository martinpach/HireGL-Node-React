import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
    componentWillMount() {
        if (!this.props.user) {
            return this.props.history.push('/');
        }
    }
    
    render() {
        return (
            <div>
                Home
            </div>
        );

    }
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user
    };
}

export default connect(mapStateToProps)(Home);