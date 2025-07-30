import { useEffect, useState } from 'react';
import './App.scss';
import {Collection} from './Components/Collection/Collection';
import {Header} from './Components/Header/Header';
import {Pagination} from './Components/Pagination/Pagination';

  const categories = [
    { "name": "Все" },
    { "name": "Море" },
    { "name": "Горы" },
    { "name": "Архитектура" },
    { "name": "Города" },
    { "name": "Автомобили"},
    { "name": "Мемы"}
  ];

function App() {
  const [page, setPage] = useState(1);
  const [categoryId, setCategoryId] = useState(0);
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [collections, setCollections] = useState([]);


  useEffect(() => {
    setIsLoading(true);

    const categoryParam = categoryId ? `category=${categoryId}` : '';
    const pageParam = `page=${page}&limit=3`;

    fetch(`https://68866289f52d34140f6c197f.mockapi.io/photoCollections?${pageParam}&${categoryParam}` )
      .then(obj => obj.json())
      .then(json => {
        setCollections(json);
      })
      .catch(err => {
        console.log("Ошибка при получении данных");
        alert(err);
      })
      .finally(() => setIsLoading(false));
  }, [categoryId, page]);

  useEffect(() => {
    setPage(1);
    setSearchValue('');
  }, 
    [categoryId])

  return (
    <div className="App">
      <h1>Моя коллекция фотографий</h1>
      <Header listCategories={categories}
              categoryId={categoryId}
              setCategoryId={setCategoryId}
              searchValue={searchValue} 
              fnSearchValue={setSearchValue} />
      <div className="content">
      { isLoading ? 
            <h2>Идет загрузка...</h2> : 
                collections.filter(obj => obj.name.toLowerCase().includes(searchValue.toLowerCase())).length === 0 ? 
                    <h2>Контента нет</h2> :
                        collections.filter(obj => obj.name.toLowerCase().includes(searchValue.toLowerCase())).map((obj, index) => (
                            <Collection
                              key={index}
                              name={obj.name}
                              images={obj.photos} /> 
      ))}
      </div>
          <Pagination page={page} 
                      setPage={setPage} />
    </div>
  );
}

export default App;
