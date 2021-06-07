import * as React from "react";

function Triangle(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 490 490"
            {...props}
        >
            <path fill={props} d="M490 474.459H0L245.009 15.541 490 474.459z" />
        </svg>
    );
}

export default Triangle;
