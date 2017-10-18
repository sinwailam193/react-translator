import React, { Component } from "react";

export default class TranslateForm extends Component {
    onChange = (e) => {
        this.props.changeSelectedLang(e.target.value)
    }

    render() {
        const { props: { langs, selectedLang }, onChange } = this;

        return (
            <div className="translate-form row">
                <div className="col-md-6 middle">
                    <form className="well form-inline transform">
                        <input type="text" className="form-control margin-right-5" placeholder="Enter text" />
                        <select className="form-control margin-right-5" onChange={onChange} value={selectedLang}>
                            {Object.keys(langs).map(key => <option key={key} value={key}>{langs[key]}</option>)}
                        </select>
                        <input type="submit" className="btn btn-primary" value="Translate" />
                    </form>
                </div>
            </div>
        );
    }
}
