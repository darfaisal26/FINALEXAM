

export default function Form() {

    const submit = () => {
        console.log("THE BUTTON  is  CLICKED ")
    }

    return (
        <div>

            <form id="formi" >
                <h1 id="form-heading">LOGIN FORM</h1>
                <div>
                    <label id="label" >PASSWORD:</label>
                </div>
                <input type="email" className="textbox" placeholder="PASSWORD" name="password" ></input>
                <div>
                    <label id="label" >  EMAIL:</label>
                </div>
                <input type="email" className="textbox" placeholder="EMAIL ID" name="email"></input>
                <button className="btn btn-danger mx-3 my-3 px-5" onClick={submit} > CLICK </button>

            </form>
        </div>



    );

} 
