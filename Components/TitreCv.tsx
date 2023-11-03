export const TitreCv = () => {
    return (
        <div>
            <label htmlFor="title">Titre du cv</label>
            <input type="text" id ="title" placeholder="Titre du CV" required/>
            <div id="titreduCVError" className="error"></div>
        </div>
    )
}