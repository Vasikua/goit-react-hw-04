import { useState, useEffect} from 'react';
import { FetchImages } from '../img-request';
import ImageGallery from './components/imagesList/ImageGallery';
import SearchForm from './components/searchForm/SearchForm';
import { ProgressBar } from 'react-loader-spinner';
import toast, { Toaster } from 'react-hot-toast';
 import ReactModal from 'react-modal';
import './App.css';

function App() {
  const notify = () => toast('Here is your toast.');
  
  
  const [images, setImages] = useState([]);
  const [isloading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [total, setTotal] = useState(0);
  const handleSearch = async (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
   }  
  
  const handleLoadMore = () => {
    setPage(page + 1);
  };
  useEffect(() => {
    if (query === "") {
      notify();
      return;
      }
    async function getImages()  {
      try {
           setError(false);
           setLoading(true);
        const {result, total} = await FetchImages(query, page);
        setTotal(total);
        setImages((prevImages) => {
          return [...prevImages, ...result];
           } )
        } catch (error) {
          setError(true);
        }
        finally {
          setLoading(false);
              }
      
    }
    getImages();
}, [page, query])
  
  return (
    <>
      <SearchForm onSearch={handleSearch} />
      {isloading && <div className="loader">
                      <ProgressBar
                              visible={true}
                              height="80"
                              width="80"
                              color="#4fa94d"
                              ariaLabel="progress-bar-loading"
                              wrapperStyle={{}}
                              wrapperClass=""
                      />
                  </div>}
      {error && console.log(" somthing went wrong") }
      {images.length > 0 && (<>
        <ImageGallery data={images} /> 
        
       
      </>)}
    { images.length < total && <button onClick={handleLoadMore} >Load more...</button>  }
    </>
  )
}

export default App




// <>
  
//     <Toaster
//   position="top-center"
//   reverseOrder={false}
//   gutter={8}
//   containerClassName=""
//   containerStyle={{}}
//   toastOptions={{
//     // Define default options
//     className: '',
//     duration: 5000,
//     style: {
//       background: '#363636',
//       color: '#fff',
//     },
//   }}
// />
//   </>