import React from 'react';
import SearchResults from './SearchResults';

export default class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
        this.state = {
            values: ["Name", "Line 1", "Line 2", "City", "State", "Zip", "Phone"],
            param: "Name",
            searchText: "",
            searchClicked: false
        };
    }

    handleSearch(e) {
        e.preventDefault();
        const searchField = e.target.elements.searchText.value.trim();
        const parameter = this.state.param;

        this.setState(() => ({
            param: parameter,
            searchText: searchField,
            searchClicked: true
        }));

    }

    handleParameter(val) {
        this.setState((prevState) => ({
            param: val
        }));
    }

    render(){

        return (
            <div className="col-md-3">
                <form onSubmit={this.handleSearch}>
                    <div className="input-group">
                        <div className="input-group-btn">
                            <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{ this.state.param } <span className="caret"></span></button>
                            <ul className="dropdown-menu">
                                {
                                    this.state.values.map((option) => (
                                        <li key={option} className="cursor"> 
                                            <a  value={option} onClick={() => this.handleParameter(option)}> {option}</a>
                                        </li>
                                    ) )
                                }
                            </ul>
                        </div>
                        <input type="text" className="form-control" name="searchText" aria-label="" />
                        <div className="input-group-btn">
                            <button type="submit" className="btn btn-default">Search</button>
                        </div>
                    </div>
                    
                </form>
                
                    <SearchResults 
                        searchText ={this.state.searchText}
                        param = {this.state.param}
                        handleShowUserInfo={this.props.handleShowUserInfo}
                    />
            </div>
        );
    }
}