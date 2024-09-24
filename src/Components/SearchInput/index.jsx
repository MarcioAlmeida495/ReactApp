import { Component } from "react";



export class SearchInput extends Component{
    render(){
        const {onChange} = this.props;
        return (
            <input
                onChange={onChange}
                type="search" 
            />
        )
    }
}