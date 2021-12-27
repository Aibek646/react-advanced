import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
    // const firstValue = text || "hello world";
    // const secondValue = text && "hello world";
    const [text, setText] = useState("");
    const [isError, setIsError] = useState(false);

    return (
        <>
            <h1>{text || "john doe"}</h1>
            <button onClick={() => setIsError(!isError)} className="btn">
                toggle error
            </button>
            {text && <h1>hello world</h1>}
            {isError && <h1>Error...</h1>}
            {isError ? (
                <p>there is an error</p>
            ) : (
                <div>
                    <h2>there is no Error</h2>
                </div>
            )}
        </>
    );
};

export default ShortCircuit;
