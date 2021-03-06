import * as React from "react";

function Pentagon(props) {
    return (
        <svg
            viewBox="0 0 512.01 512.01"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fill={props}
                d="M507.804 200.28L262.471 12.866a10.657 10.657 0 00-12.949 0L4.188 200.28C.583 203.053-.889 207.811.54 212.12l93.717 281.92a10.647 10.647 0 0010.133 7.296h303.253c4.587 0 8.683-2.944 10.133-7.296l93.717-281.92a10.779 10.779 0 00-3.689-11.84z"
            />
        </svg>
    );
}

export default Pentagon;
