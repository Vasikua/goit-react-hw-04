import css from './ImageGallery.module.css';
import ImageCard from '../image/ImageCard'
export default function ImageGallery({ data }) {

    return (
        <>
            <ul className={css.list}>
				{data.map((item) => (
				<li key={item.id} className={css.item}>
					<ImageCard data={item} />	
				</li>
		
	))}
	
</ul>
        </>
    )
}
    
    
    