import React from "react";

const Button = (props) => {
    return(<button>{props.text}</button>)
}

Button.defaultProps = {
    text: "Button"
}
export default Button