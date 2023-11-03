export const Formation=()=>{
    return(
        <div>
            <label htmlFor="formation">Formation :</label>
            <textarea id="formation" required></textarea>
            <div id="formationError" className="error"></div>
        </div>
    )
}