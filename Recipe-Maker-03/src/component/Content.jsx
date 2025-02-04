function Content(){
    const listOfItems = ['Chicken', "Sauce", "BBQ Masala"];
    const ingredients = listOfItems.map(items => <li key={items}>{items}</li>)
    
    function handleSubmit(event){
        event.preventDefault(); // prevent redirect to another page
        const formData = new FormData(event.currentTarget);
        const newItem = formData.get("ingredient");
        listOfItems.push(newItem);
        console.log(listOfItems);
        
        
    }

    return (
        <main>
            <form className="add-form" onSubmit={handleSubmit}  action="">
                <input 
                    type="text"
                    placeholder="e.g. chicken"
                    aria-label="Add ingredient"
                    name= "ingredient"
                />
                <button> + Add ingredient</button>
            </form>
            <div className="display">
                <h2>Ingredient: </h2>
                <ul>
                    {ingredients}
                </ul>
            </div>
        </main>
    )
}

export default Content;