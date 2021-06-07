import * as React from "react";

function Square(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            {...props}
        >
            <path fill={props} d="M0 0h512v512H0z" />
        </svg>
    );
}

export default Square;
