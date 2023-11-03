export const Phone=()=>{
    return(
        <div>
            <label htmlFor="phone">Tel :</label>
            <input type="tel" id="phone" placeholder="06(7)-12-34-56-78" maxLength={10} required/>
            <div id="phoneError" className="error"></div>
        </div>
    )
}