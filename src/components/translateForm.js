import React, { Component } from "react";

export default class TranslateForm extends Component {
    state = { input: "" };

    onChange = ({ target: { value }}) => {
        this.props.changeSelectedLang(value);
    }

    onSubmit = e => {
        e.preventDefault();
        const { props: { translateInput }, state: { input } } = this;
        translateInput(input);
        this.setState({ input: "" });
    }

    render() {
        const { state: { input }, props: { langs, selectedLang }, onChange, onSubmit } = this;

        return (
            <div className="translate-form row">
                <div className="col-md-6 middle">
                    <form className="well form-inline transform" onSubmit={onSubmit}>
                        <input
                            type="text"
                            autoComplete="off"
                            className="form-control margin-right-5"
                            onChange={({ target: { name, value } }) => this.setState({ [name]: value })}
                            name="input"
                            value={input}
                            placeholder="Enter text"
                        />
                        <select className="form-control margin-right-5" name="selectedLang" onChange={onChange} value={selectedLang}>
                            {Object.keys(langs).map(key => <option key={key} value={key}>{langs[key]}</option>)}
                        </select>
                        <input type="submit" className="btn btn-primary" value="Translate" />
                    </form>
                </div>
            </div>
        );
    }
}
