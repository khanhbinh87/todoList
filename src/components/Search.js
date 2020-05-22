import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            str: ''
        };

      
    }

    handleSearch =() =>{
        this.props.onSearch(this.state.str);
    }

    handleClear=()=> {
        this.setState({str: ''});
        this.props.onSearch('');
    }

    handleChange =(event) =>{
        this.setState({str: event.target.value});
    }

    render() {
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="input-group">
                    <input value={this.state.str} onChange={this.handleChange} type="text" className="form-control" placeholder="Search for..." />
                    <span className="input-group-btn">
                        <button onClick={this.handleSearch} className="btn btn-info" type="button">Search!</button>
                        <button onClick={this.handleClear} className="btn btn-warning" type="button">Clear</button>
                    </span>
                </div>
            </div>
        );
    }
}

export default Search;
