import React from "react";
import {Form} from "react-bootstrap";
import {SearchButton} from "../buttons/SearchButton";

export class SearchForm extends React.Component {
    render() {
        return <Form className="search" onSubmit={this.props.onSubmit}>
            <Form.Control
                type="search"
                placeholder="Search series..."
                onChange={this.props.onChange}
            />
            <SearchButton/>
        </Form>;
    }
}