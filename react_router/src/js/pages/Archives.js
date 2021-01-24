import React from "react"

export default class Archives extends React.Component {
    render() {
        const query = new URLSearchParams(this.props.location.search)
        let message 
            = (this.props.match.article ? this.props.match.params.article + ", " : "")
            + "date=" + query.get("date") + ", filter=" + query.get("filter");
        console.log(this.props);
        return (
            <h1>Archives ({message})</h1>
        );
    }
}