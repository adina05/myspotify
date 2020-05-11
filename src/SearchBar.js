import React from "react";
import {Button} from "react-bootstrap";


class SearchBar extends React.Component{

    state={
            searchValue:"",
            results:[],
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
                    placeholder="Browse Artists"
                    onChange={(e)=>this.onChangeInputHandler(e)}
                />
                <Button onClick={() => this.searchHandler()}>Search</Button>
            </label>
        </div>
    )
}
}

export default SearchBar;