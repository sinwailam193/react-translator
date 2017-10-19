import React, { Component } from 'react';
import { connect } from "react-redux";
import { changeState } from "../actions";

class App extends Component {
    render() {
        const { props: { hello } } = this;

        return (
            <div className="main-page text-center">
                <h1 className="text-denter">Word Translate</h1>
                <p>{hello}</p>
            </div>
        );
    }
}

function mapStateToProps({ hello }) {
    return { hello };
}

export default connect(mapStateToProps, { changeState })(App);
