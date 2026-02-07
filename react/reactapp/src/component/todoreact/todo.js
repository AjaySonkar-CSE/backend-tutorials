import React, { useState } from 'react'
import "./style.css";

const Todo = () =>{
    const [inputdata, setInputData] = useState("");
    const [items, setItems] = useState([]);

    // add items
    const addItem = () => {
        if(!inputdata){
            alert("plz fill the data");
        }else {
            const myNewInputData = {
                id: new Date().getTime().toString(),
                name: inputdata,
            }
            setItems([... items, myNewInputData])
            setInputData("");
        }
    }

    //  delete items

    const deleteItem = (index) =>{
        const updatedItems = items.filter((curElem) =>{
            return curElem.id !== index;
        })
        setItems(updatedItems);
    }
    return(
        <>
           <div className='main-div'>
            <div className="child-div">
                <figure>
                    <img src="./images/todo.svg" alt="todologo" />
                    <figcaption>Add Your List Here </figcaption>
                </figure>
                <div className="addItems">
                    <input type="text"
                    placeholder="write Here Add Item"
                    className="form-control"
                    value={inputdata}
                    onChange={(event) => setInputData(event.target.value)}
                    />
                    <i className="fa fa-plus add-btn" onClick={addItem}></i>
                </div>
                {/* show our items */}

                <div className="showItems">
                    {items.map((curElem) => {
                        return(
                            <div className="eachItem" key={curElem.id}>
                                <h3>{curElem.name}</h3>
                                <div className="todo-btn">
                                    <i className="far fa-edit add-btn"></i>
                                    <i className="far fa-trash-alt add-btn" onClick={() => deleteItem(curElem.id)}></i>
                                </div>
                            </div>

                        )
                    })}
                    

                </div>

                {/* remove all */}
                <div className="showItems">
                    <button className="btn effect04" data-sm-link-text="Remove All">
                        <span>CHECK LIST</span></button>
                </div>
            </div>
           </div>
        </>
    )
}

export default Todo;