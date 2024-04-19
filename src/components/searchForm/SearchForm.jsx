
import css from './SearchForm.module.css';
export default function SearchForm({onSearch}) {
 

  const handleSubmit = (event) => {
    event.preventDefault();
    const query = event.target.elements.query.value.trim();
   
    onSearch(query);    
   event.target.reset();
} 
    


    return (
        <>
        
      <header className={css.searchField} >
       <form className={css.form} onSubmit={handleSubmit}>
          <input type="text"  name="query"/>
    <button type="submit">Search</button>
  </form>
</header>
        </>
    )
}

