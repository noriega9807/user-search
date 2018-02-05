import React from 'react';

export default class SearchResults extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            results: [],
            isLoaded: false,
            error: null
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.searchText !== this.props.searchText) {
        const url = `http://localhost:3000/users/${this.props.param}/${this.props.searchText}`;
        fetch(url)
        .then((res) => {
            console.log(res);
            return res.json();
        })
        .then(
        
            (result) => {
                if(!result.msg){
                    this.setState({
                        isLoaded: true,
                        results: result
                    });
                }
                
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
            });
        }
        );   
        }
    }

    

    render() {
        const { error, isLoaded, results } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Waiting for info</div>;
        } else {
          return (
            <ul className="list-group">
              {this.state.results.map(user => (
                <li 
                    key={user.id}
                    className="list-group-item"
                    onClick={() => {
                        this.props.handleShowUserInfo(user.name, user.line1, user.line2, user.city, user.state, user.zip, user.phone);
                    }}
                >
                  {user.name}
                </li>
              ))}
            </ul>
          );
        }
      }
}