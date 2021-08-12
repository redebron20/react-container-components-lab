import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'your-key-here';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            reviews: []
        }
    }

    componentDidMount() {
        fetch(URL)
            .then(res => res.json())
            .then(resp => this.setState({reviews: resp.results}))
    }

    render(){
        console.log(this.state)
        return (
            <div className="latest-movie-reviews">
                <h1>The Latest Reviews:</h1>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}

export default LatestMovieReviewsContainer
