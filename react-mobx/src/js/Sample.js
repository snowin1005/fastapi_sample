import React, { Component } from "react";
import { observer } from "mobx-react";

@observer
export default class SampleComponent extends React.Component {
    render() {
        return (
            <div>
                <input type="number"
                    value={this.props.store.num}
                    onChange={(e) => this.props.store.changeNum(e.target.value)}
                />
                <div>{this.props.store.num}</div>
                <div>{this.props.store.double}</div>
            </div>
        );
    };
}
