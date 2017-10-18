import React, { Component } from 'react';
import { connect } from "react-redux";

class App extends Component {
    render() {
        const { start } = this.props;

        return <div>{start}</div>
    }
}

function mapStateToProps({ start }) {
    return { start };
}

export default connect(mapStateToProps, null)(App);
