export const Objectifs=()=>{
    return(
        <div>
            <label htmlFor="objectifProfessionnel">Description de l'objectif professionnel :</label>
            <textarea id="objectifProfessionnel" required></textarea>
            <div id="objectifProfessionnelError" className="error"></div>
        </div>
    )
}