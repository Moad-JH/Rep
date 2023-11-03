export const Age=()=>{
    return(
        <div>
            <label htmlFor="age">Age :</label>
            <input type="number" id="age" min="18" max="99" value="18" required/>
            <div id="ageError" className="error"></div>
        </div>
    )
}