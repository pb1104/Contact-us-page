import React from "react";
function Form(){
    return(
    <form>
        <div className="f1">
     
            <button>Via Chat</button>
            <button> Via Call</button>
        <button> Via Email</button>
        </div>
        <div className="f2">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" required />
            <label htmlFor="Email">Email</label>
            <input type="text" name="Email" required/>
            <label htmlFor="Text">Text</label>
            <input type="text" name="Text" required />
        </div>
        <button className="s">Submit</button>
    </form>
    );
}
export default Form;