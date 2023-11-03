export const Profil=()=>{
    return(
        <div>
            <label htmlFor="profil">Profil :</label>
            <textarea id="profil" name="profil" required></textarea>
            <div id="profilError" className="error"/>
        </div>
    )
}