import React from "react";

const TodoListItem = ({label, important}) => {
    const LiStyle = {
        color: important ? 'tomato' : 'black'
    };

    return <span style ={LiStyle}>{label}</span>;
};

export default TodoListItem;