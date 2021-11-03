import React, { Component } from 'react';
import './Headlines.css';

class Headlines extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        }
    }
    componentDidMount() {
        fetch('http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=76dc2439f4db4b0d9a50c6209d48e846')
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                // console.log(myJson);
                this.setState({
                    articles: myJson.articles
                });
            });
    }
    render() {
        console.log(this.state);
        return (
            <div>
                <h1>Today's Updates</h1>
                {this.state.articles.map((item, index) => {
                    return (
                        <div>
                            <article className="all-browsers">
                                <div className="content">
                                <h3 className="browser">{item.title}</h3>
                                <h6>Written By: {item.author}</h6>
                                <img src={item.urlToImage} className="image" />
                                <p className="desc">{item.description}</p>
                                <a className="desc" href={item.url}>Click To Read More.....</a>
                                </div>
                            </article>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Headlines;