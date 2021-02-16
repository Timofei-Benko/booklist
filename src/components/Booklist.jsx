import Card from '@material-ui/core/Card'
import React from "react";

const bookCardStyle = {
    disabled: {
        backgroundColor: '#ccc'
    },
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '500px',
    margin: '20px',
    padding: '20px',
    cursor: 'pointer',
}

const Booklist = (props) => {
    return (
        <Card
            className={props.classNameToDisable}
            onClick={props.onCardClick}
            style={bookCardStyle}
        >
            <h1>{props.title}</h1>
            <p>{props.author}</p>
        </Card>
    )
}

export default Booklist
