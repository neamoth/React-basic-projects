import React from 'react';

function Content(){
    const [item, setItem] = React.useState([]);
    const ingredients = item.map(items => <li key={items}>{items}</li>)
    
    function handleSubmit(formData){
        const newItem = formData.get("ingredient");
        setItem(preItem => [...preItem, newItem])
        
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