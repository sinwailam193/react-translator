import React, { Component } from 'react';
import { connect } from "react-redux";
import { getLangs, changeState } from "../actions";
import TranslateForm from "./translateForm";

class App extends Component {
    componentDidMount() {
        this.props.getLangs();
    }

    changeSelectedLang = selectedLang => {
        this.props.changeState({ selectedLang })
    }

    render() {
        const { props: { translate: { langs, selectedLang } }, changeSelectedLang } = this;

        return (
            <div className="main-page text-center">
                <h1 className="text-denter">Word Translate</h1>
                <TranslateForm
                    langs={langs}
                    selectedLang={selectedLang}
                    changeSelectedLang={changeSelectedLang}
                />
            </div>
        );
    }
}

function mapStateToProps({ translate }) {
    return { translate };
}

export default connect(mapStateToProps, { getLangs, changeState })(App);
