import React from 'react'

const BoxList = (props) => {
    const { allBoxies } = props;

    return (

        allBoxies.map((box, i) =>
            <div key={i} style={{width: box.size + "px", height: box.size + "px", backgroundColor: box.color, border: "1px solid black", display: "inline-block", margin: "10px" }}></div>
        )

    );
}

export default BoxList