import AiComp from "./sub-component/AiComp";

function AboutAI(){
    return (
        <section id="aboutAI" className="about-ai">
            <AiComp
                    engine="ChatGPT"
                    isPowerful= {true}
                    benefits={(engine, isPowerful) =>{
                        return `We can command ${engine} and make our daily works easilly. ${engine} is ${isPowerful ? "Powerful" : "Not as powerful"} for head commands`
                    }}
                    score={5}
            />
            <AiComp
                    engine="Gimini AI"
                    isPowerful= {false}
                    benefits={(engine, isPowerful) =>{
                        return `We can command ${engine} and make our daily works easilly. ${engine} is ${isPowerful ? "Powerful" : "Not as powerful"} for head commands`
                    }}
            />
        </section>
    );
}
export default AboutAI;