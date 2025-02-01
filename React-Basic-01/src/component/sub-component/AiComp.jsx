function AiComp(Props){
    
    return (
        <div className="containerAI">
            <div className="card">
                <h1>Name: {Props.engine}</h1>
                <span>{(Props.isPowerful) ? "PowerFul": "Not Powerful"}</span>
                {Props.score && <span className="rating-ai">Rating: {Props.score}</span>}
                <h3>{Props.benefits(Props.engine, Props.isPowerful)}</h3>
                
            </div>
        </div>
    );
}

export default AiComp;