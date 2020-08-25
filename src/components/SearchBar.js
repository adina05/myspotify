import React from "react";
import {Button} from "react-bootstrap";


class SearchBar extends React.Component{



    state={
            searchValue:""
        }
    onChangeInputHandler=(e)=>{
        this.setState({searchValue:e.target.searchValue});
    };
    searchHandler=()=>{

    }


    render()
{
    return (
        <div className="container">
            <label className="search-label" htmlFor="search-input">
                <input
                    type="text"
                    name="text"
                    value={this.state.searchValue}
                    id="search-input"
                    placeholder="Browse"
                    onChange={(e)=>this.onChangeInputHandler(e)}
                />
                <Button onClick={() => this.searchHandler()}>Search</Button>
            </label>
            <div>{this.state.searchValue}</div>
        </div>
    )
}
}


export default SearchBar;