import React, { Component } from 'react';
import { Consumer } from "../context";
import Banner from './Banner';
import Spinner from './Spinner';
class Home extends Component {
    render() {
            return (
                <Consumer>
                    {value => {
                        const { images } = value
                        if (images === undefined || images.length === 0) {
                            return (
                         <Spinner/>
                             )
                        } else {
                            return (
                                <>
                                <Banner/>
                                <div className="container">
                                    {images.map((image) => {
                                        return (
                                            <div key={image.id} className="image_content">
                                                <img src={image.src.large} alt="" />
                                            </div>
                                        )
                                    })}
                                    </div>
                                </>
                            )
                        }
                    }}
                </Consumer>
            );
        }
    
    }
 
export default Home;