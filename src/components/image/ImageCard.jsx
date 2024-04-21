import css from './ImageCard.module.css'
export default function ImageCard({ data: { id, urls: { small } }, onClick, onId }) {
 
  return (<>
            <div className={css.img} onClick={() => {
                  onClick();
                  onId(id)
                        }}>
                <img key={id} src={small} alt="img" />
            </div>
         </>)
}