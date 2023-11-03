export const Lname = () => {
    return (
        <div>
            <label htmlFor="lname">Nom :</label>
            <input type="text" id="lname" placeholder="ELHOUAT" required/>
            <div id="lnameError" className="error"></div>
        </div>
    )
}