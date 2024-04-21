import css from './ImageCard.module.css'
export default function ImageCard({data: { id, alt_description, urls: { small } }, onClick, onId }) {
    
  return (<>
            <div className={css.img} >
              <img
                    key={id}
                    src={small} alt={alt_description}
                    onClick={() => {
                              onClick();
                              onId(id)
                        }}/>
            </div>
         </>)
}