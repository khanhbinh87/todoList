import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';

class Control extends Component {
    
    handleAdd =() =>{
        this.props.onAdd();
    }

    render() {
        let {orderBy, orderDir}     = this.props;

        let elm = <button onClick={this.handleAdd} type="button" className="btn btn-info btn-block">Add Task</button>;
        

        return (
            <div className="row">

                {/* SEARCH : START */}
                <Search onSearch={this.props.onSearch}/>
                {/* SEARCH : END */}

                {/* SORT : START */}
                <Sort 
                    onSort={this.props.onSort}
                    orderBy={orderBy}
                    orderDir={orderDir}
                />
                {/* SORT : END */}

                {/* ADD : START */}
                <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                    { elm }
                </div>
                {/* ADD : END */}
            </div>
        );
    }
}

export default Control;
