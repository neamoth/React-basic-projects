function Entries(Props){
    console.log(Props);
    
    return(
        <>
        <div className="entry-card">
                    <div className="imageContainer">
                        <img src={Props.img} alt="" />
                    </div>
                    <div className="detailsContainer">
                        <div className="location">
                            <img src={Props.map} alt="map location icon" />
                            <span>{Props.location}</span>
                            <a href={Props.googleMap}>View on Google Map</a>
                        </div>
                        <h2>{Props.title}</h2>
                        <p className="date">{Props.date}</p>
                        <p className="explain">{Props.details}</p>
                    </div>
                </div>
        </>
    );
}

export default Entries;