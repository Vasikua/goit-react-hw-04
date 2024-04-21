
import css from './ImageModal.module.css'
export default function ImageModal({open, onClick, id}) {
    if (!open) return null;
   
    return (<>
        <div
            className={css.overlay}
            onClick={() => {onClick()}}>
            <div
                className={css.modalContainer}
                onClick={(e) => { e.stopPropagation() }}
            >
                <img
                    className={css.img}
                    src={id}
                    alt="img"
                />
            </div>
        </div>
    </>);
}