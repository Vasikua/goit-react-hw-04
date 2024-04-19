export default function Loader() {
    return "please wait i'm working on it"
}




return (
    <>
      <SearchForm onSearch={handleSearch} />
        {loading ? (<Loader type="Audio" height={80} width={80} color="green" ariaLabel="Loading" />)
            :
            (
           <>
          {images.length > 0 ? (
            <>
              <ImageGallery data={images} />
              <button onClick={() => console.log('Load more...')}>Load more...</button>
            </>
          ) : (
            <p>No images found. Please try a different search.</p>
          )}
        </>
      )}
      <Toaster /> {/* Render the Toast container */}
      {error && <p>Something went wrong. Please try again later.</p>}
    </>
  );
}
