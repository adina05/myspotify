import React from 'react';
import { Link } from 'react-router-dom';
import "./Artist.css";

class Artist extends React.Component {

    componentDidMount() {
        console.log(this.props);
    }

    render() {

        return (

            <div className="col-2 artist__wrapper">
                <Link
                    to={{
                        pathname: `/artists/${this.props.id}`,
                        state: {
                            artistName: this.props.name
                        }
                    }}
                >

                        <section className="artist__main">
                            <h3 className="artist__title">{ this.props.name }</h3>
                            <img className="artist__image" src={this.props.url} alt={`Image for ${this.props.name}`}/>
                         </section>
                </Link>
            </div>

        );
    }
}

export default Artist;