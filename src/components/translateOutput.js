import React, { Component } from "react";

export default class TranslateOutput extends Component {
    render() {
        const { loading, translation } = this.props;

        return (
            <div className="translate-output">
                {loading ? <h2>Loading...</h2> : <h2 className="text-success">{translation}</h2>}
            </div>
        )
    }
}
