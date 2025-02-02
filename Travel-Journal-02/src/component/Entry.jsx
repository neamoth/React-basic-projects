import Entries from "./Entries";
import data from "../assets/data/data"
function Entry() {
    const entryElements = data.map((entry) => {
        console.log(entry);
        return (
            <>
                <Entries
                    // img={entry.img}
                    // location={entry.location}
                    // map={entry.map}
                    // googleMap={entry.googleMap}
                    // title={entry.title}
                    // date={entry.date}
                    // details={entry.details}
                    key={entry.id}
                    {...entry}
                />
            </>
        )
    })

    return (
        <section className="entry">
            <div className="container">
                {entryElements}
            </div>
        </section>
    )

}

export default Entry;
