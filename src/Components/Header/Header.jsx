export function Header({searchValue, fnSearchValue, listCategories, categoryId, setCategoryId}) {

    return (
    <div className="top">
        <ul className="tags">
          {
            listCategories.map((obj, i) => <li className={i === categoryId ? 'active' : ''} 
                                               onClick={() => setCategoryId(i)}
                                               key={obj.name}>
                                                {obj.name}
                                            </li>)
          }
        </ul>
        <input value={searchValue} 
               onChange={(e) => fnSearchValue(e.target.value)} 
               className="search-input" 
               placeholder="Поиск по названию" />
      </div>
    );
}