import React, { useState } from "react";

const List = (props) => {
    return (
    <p>
        {console.log(props.list.map(e => e.name))}
        {props.list.map(e => <h1>{e.name}</h1>)}
    </p>
    )
};


export default List;