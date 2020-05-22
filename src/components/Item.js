import React, { Component } from 'react';

class Item extends Component {
    
    handleEdit =(item) =>{
       this.props.onEdit(item);
    }

    handleDelete =(id) =>{
        this.props.onDelete(id);
    }

    render() {
        const {item} = this.props;
        const {index} = this.props;

        return (
            <tr>
                <td className="text-center">{index + 1}</td>
                <td>{item.name}</td>
                <td className="text-center">{this.showElementLevel(item.level)}</td>
                <td>
                    <button onClick={()=>this.handleEdit(item)}  type="button" className="btn btn-warning">Edit</button>
                    <button onClick={()=>this.handleDelete(item.id)} type="button" className="btn btn-danger">Delete</button>
                </td>   
            </tr>
        );
    }

    showElementLevel(level){
        let elmLevel = <span className="label label-default">Small</span>;
        if(level === 1){
            elmLevel = <span className="label label-info">Medium</span>;
        }else if(level === 2){
            elmLevel = <span className="label label-danger">High</span>;
        }
        return elmLevel;
    }
}

export default Item;
