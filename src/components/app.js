import React, { Component } from 'react';
import { connect } from "react-redux";
import { getLangs, changeState, getTranslation } from "../actions";
import TranslateForm from "./translateForm";
import TranslateOutput from "./translateOutput";

class App extends Component {
    componentDidMount() {
        this.props.getLangs();
    }

    changeSelectedLang = selectedLang => {
        this.props.changeState({ selectedLang })
    }

    translateInput = input => {
        this.props.getTranslation(input)
    }

    render() {
        const { props: { translate: { langs, selectedLang, loading, translation } }, changeSelectedLang, translateInput } = this;

        return (
            <div className="main-page text-center">
                <h1 className="text-denter">Word Translate</h1>
                <TranslateForm
                    langs={langs}
                    selectedLang={selectedLang}
                    changeSelectedLang={changeSelectedLang}
                    translateInput={translateInput}
                />
                <TranslateOutput translation={translation} loading={loading} />
            </div>
        );
    }
}

function mapStateToProps({ translate }) {
    return { translate };
}

export default connect(mapStateToProps, { getLangs, changeState, getTranslation })(App);
