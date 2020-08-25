import React from "react";
import {faHeart, faHome} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./LabeledInput.css";


class LabeledInput extends React.Component {

    state={ };

    constructor(props) {
        super(props);

        this.state.value = this.props.defaultValue;

        console.log(`LabeledInput - Inside constructor`);
    }

    onChangeHandler = e => {
        console.log(e.target.value);
        const value = e.target.value

        this.props.change(this.props.id, value)

        this.setState({
            value: value
        });
    };


    render() {
        console.log("LabeledInput - Inside render");

        const style={
            marginBottom: "10px",
            color:"#929292" ,
            fontSize:"18px",
            fontFamily:"Roboto",

        };

         return (
             <div className="input__group labeled__input">
                 <label
                     htmlFor={this.props.id}
                     style={style}
                 >
                     {this.props.label}
                 </label>
                 <input
                     className="form__control"
                     type="text"
                     placeholder={this.props.placeholder}
                     id={this.props.id}
                     value={this.state.value}
                     onChange={this.onChangeHandler}
                 />
                   <FontAwesomeIcon
                       icon={faHome}
                   />
                 <FontAwesomeIcon
                     icon={faHeart}
                 />
             </div>
         );
     }

}

export default LabeledInput;
