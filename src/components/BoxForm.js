import React from 'react'

const BoxForm = (props) => {
    const {box, setbox, newSubmit} = props;

    const handleSubmit = e => {
        e.preventDefault();
        newSubmit();
    }

    const changebox = e => {
        setbox({
            ...box,
            [e.target.name]: e.target.value
        });
    }

    return (
        <form onSubmit = { handleSubmit }>
            <div>
                <label htmlFor="size">Size: </label>
                <input type="text" name="size" onChange={ changebox }/>
            </div>
            <div>
                <label htmlFor="color">Color: </label>
                <input type="text" name="color" onChange={ changebox }/>
            </div>
            <input type="submit" value="Submit"/>
        </form>
    )
}

export default BoxForm
