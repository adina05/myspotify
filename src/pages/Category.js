import React from 'react';
import { withRouter } from 'react-router';

class Category extends React.Component {

    componentDidMount() {
        fetch("https://api.spotify.com/v1/browse/categories", {
            method: "POST",
            headers: new Headers({}),
        }).then((result) => {
            console.log(result);
        });
    }

    render() {

        // let categoryId;
        // if(this.props.match !==null){
        //     categoryId=this.props.match.params.id;
        // }else{
        //     categoryId="Unknown";
        // }

//         const categoryId = this.props.match !==null ? this.props.match.params.id : "Unknown"
//
//
//         return (
//             <div>
//                 {`Category page for ${ this.props.match !==null ? this.props.match.params.id : "Unknown" }`}
//             </div>)
//     }
//
//
// export default withRouter(Category);

        console.log(this.props.match);
        return (
            <div>
                {`Category page for ${
                    this.props.match !== null ? this.props.match.params.id : "Unknown"
                } `}
            </div>
        );
    }
}

export default withRouter(Category);