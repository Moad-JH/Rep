export const Adr=()=>{
return(
        <div>
            <label htmlFor="adresse">Adresse :</label>
            <input type="text" id="adresse" placeholder="LOT NAHDA NO 838 MHAMID MARRAKECH" required/>
            <div id="adresseError" className="error"></div>
        </div>
    )
}