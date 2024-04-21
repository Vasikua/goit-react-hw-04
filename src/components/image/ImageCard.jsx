export default function ImageCard({data:{id, urls:{small}}, onClick, onId}) {
 
  return (<>
            <div onClick={() => {
                  onClick();
                  onId(id)
                        }}>
                <img key={id} src={small} alt="img" />
            </div>
         </>)
}