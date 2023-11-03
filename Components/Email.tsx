export const Email=()=>{
    return(
        <div>
        <label htmlFor="email">Email :</label>
        <input type="email" id="email" placeholder="mehdielhouat3@gmail.com" required/>
        <div id="emailError" className="error"></div>
    </div>
    )
}
