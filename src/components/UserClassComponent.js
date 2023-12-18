import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            count: 1,
        }
    }

    componentDidMount(){
        // to make api call because it render after the UI loads
    }

    render(){
        return (
            <div>
                <ul>
                    <li>Name: {this.props.name}</li>
                    <li>Contact: 7053XXXC87</li>
                    <li>{this.state.count}</li>
                    <button onClick={() =>{
                        this.setState({
                            count: this.state.count + 1
                        })
                    }}>Increase Value</button>
                    <li>Adress: {this.props.adress}</li>
                    <li>Email: rk9.kumar21@gmail.com</li>
                </ul>
            </div>
        )
    }
}

export default UserClass;