import * as React from "react";

function Parallelogram(props) {
    return (
        <svg
            viewBox="0 0 512 100"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <defs>
                <linearGradient id="prefix__a" gradientUnits="userSpaceOnUse">
                    <stop stopColor="red" offset="0%" />
                </linearGradient>
            </defs>
            <path fill="url(#prefix__a)" d="M50 0h400l-50 150H0z" />
        </svg>
    );
}

export default Parallelogram;
