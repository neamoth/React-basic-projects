import Entries from "./Entries";
function Entry() {
    return (
        <section className="entry">
            <div className="container">
                <Entries
                    img="src\assets\travel\daffodil-university-park.jpeg"
                    location="DCS"
                    map="src\assets\locations.png"
                    googleMap="https://maps.app.goo.gl/u6NQx85N18LboixS6"
                    title="Daffodil University Park"
                    date="30 April 2023"
                    details="Daffodil International University park is most beautiful. It has a awesome fountain, Seatting benches and so many tree, flowers  and tree-artifacts structures."
                />
                <Entries
                    img="src\assets\travel\deul-sunset.jpg"
                    location="Turag River"
                    map="src\assets\locations.png"
                    googleMap="https://maps.app.goo.gl/4bAvtPh7LX7GFPXA8"
                    title="Balurchor - Model Town"
                    date="12 Oct 2022"
                    details="Balurchor is a place in Amin Model Town, Khagan, Ashulia. It's near the river of Turag. It's a beautiful place to feel a like mini beach. Many people come to visit on their off days."
                />
                <Entries
                    img="src\assets\travel\diu-liberary.jpg"
                    location="Dattpara"
                    map="src\assets\locations.png"
                    title="Daffodil Central Library"
                    date="25 May 2023"
                    details="DIU provide a dedicated floor for student who want to study in library. There are 5 section with huge student capacity and so many books & publications. "
                />
                <Entries
                    img="src\assets\travel\sajek-zero-point.jpg"
                    location="Sajek"
                    map="src\assets\locations.png"
                    title="Sajek Zero Point"
                    date="25 Dec 2022"
                    details="Sajek is a most beautiful hill track point and most popular one. Everyday so many people visit Sajek Hill Point, stay & camp. Its the highest hill in Bangladesh"
                />
            </div>
        </section>
    );
}

export default Entry;