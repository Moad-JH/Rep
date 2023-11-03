export const Fname= () =>{
    return(
        <div>
            <label htmlFor="fname">Prénom :</label>
            <input type="text" id="fname" placeholder="Elmehdi" required/>
            <div id="fnameError" className="error"></div>
        </div>
    )
}