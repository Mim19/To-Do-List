import React from "react";
class Button extends React.Component {
    constructor (props) {
        super(prop);
        this.handleBtnClick = this.handleBtnClick.bind(this);
    }
    handleBtnClick(){
        const {handleParentClick} = this.props;
        alert(`${this.props.name} did clicked`);
        if (handleParentClick) handleParentClick();
    }
    render (){
        const {name} = this.props;
        return <button onClick = {this.handleBtnClick}>{name}</button>;
    }
}
export default Button;