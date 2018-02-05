import React from 'react';
import SearchBar from './SearchBar';
import ShowUserInfo from './ShowUserInfo';

export default class UserSearch extends React.Component {

    constructor(props) {
        super(props);
        this.handleShowUserInfo = this.handleShowUserInfo.bind(this);
        this.state = {
            name: "",
            line1: "",
            line2: "",
            city: "",
            state: "",
            zip: "",
            phone: ""
        };
    }

    handleShowUserInfo(name, line1, line2, city, state, zip, phone){
        this.setState(() => ({
            name,
            line1,
            line2,
            city,
            state,
            zip,
            phone
        }));
    }

    render(){

        return (
            <div className="row">
                <SearchBar 
                    handleShowUserInfo={this.handleShowUserInfo}
                />
                <ShowUserInfo 
                    name={this.state.name}
                    line1={this.state.line1}
                    line2={this.state.line2}
                    city={this.state.city}
                    state={this.state.state}
                    zip={this.state.zip}
                    phone={this.state.phone}
                />
            </div>
        );
    }
}