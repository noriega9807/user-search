import React from 'react';
import SearchResults from './SearchResults';

export default class SearchBar extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render(){

        return (
            
            <div className="col-md-9">
                {!this.props.name ? 
                    <p>No user to show</p>
                    :
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">{this.props.name}</h3>
                        </div>
                        <div className="panel-body">
                            <p>{this.props.name}</p>
                            <p>{this.props.line1}</p>
                            <p>{this.props.line2}</p>
                            <p>{this.props.city}</p>
                            <p>{this.props.state}</p>
                            <p>{this.props.zip}</p>
                            <p>{this.props.phone}</p>
                        </div>
                    </div>
                
                }
            </div>
        );
    }
}