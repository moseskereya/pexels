import React, { Component } from 'react';
import axios from "axios"
import { Consumer } from "./context"
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchtitle:"",
            Searched:[]
         }
    }

    SetTitle = (e) =>{
        this.setState({searchtitle: e.target.value})
    }

    Search = ( dispatch ,e) =>{
        e.preventDefault();
        const query = this.state.searchtitle;
        const photos = `https://api.pexels.com/v1/search?query=${query}&per_page=1000&page=1`;
    

        axios.get(`${photos}` ,{
            headers: {
                Authorization: "563492ad6f9170000100000116bd88e3a4bd43728e72772fc86cb00f"
            }
        })
            .then(res => {
                dispatch({
                    type:'search_images',
                    payload:res.data.photos
                })
                this.setState({ Searched: res.data.photos })
                console.log(this.state.Searched)
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() { 
        return (
            <Consumer>
                {value => {
                   const { dispatch } = value;
                    return (
                        <div className="search">
                           <form onSubmit={this.Search.bind(this, dispatch)}>
                                <input type="text" 
                                value={this.state.searchtitle}  onChange={this.SetTitle} placeholder="Search ..."/>
                                <button type="submit">Search</button>
                           </form>
                        </div>
                    )
                }}
           </Consumer>
         );
    }
}
 
export default Search;