import React, { Component } from 'react';
import axios from "axios"
const Context = React.createContext();

const reducer = (state, action) =>{
    switch (action.type) {
        case "search_images":
            return{
                ...state,
                images:action.payload
            }
        default:
            return state;
    };
}


export class Provider extends Component {
    state = {
        images: [],
        dispatch: action => this.setState(state => reducer (state, action))
    }

    componentDidMount = () => {
        const photos = `https://api.pexels.com/v1/search?query=coffee&per_page=500`;
        axios.get(`${photos}` ,{
            headers: {
                Authorization: "563492ad6f9170000100000116bd88e3a4bd43728e72772fc86cb00f"
            }
        })
            .then(res => {
                this.setState({
                    images: res.data.photos
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() { 
        return (
            <Context.Provider value={this.state}>
               {this.props.children}
            </Context.Provider>
         );
    }
}
 
export const Consumer = Context.Consumer;