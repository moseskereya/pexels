import React, { Component } from 'react';
import { Consumer } from "../context";
import Search from '../Search';
class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          
         }
    }

    render() { 
        return ( 
            <Consumer>
            {
              value => {
                    return (
                        <React.Fragment>
                            <div className="img_banner">
                                <Search />
                            </div>
                        </React.Fragment>
                    )
                 }
             }
            </Consumer>
         );
    }
}
 
export default Banner;