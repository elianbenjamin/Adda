import style from "./photos.module.scss";
import imagePaths from "../../assets/images/gallery-images";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Photos = () => {
  return (
    <div className={style.Photos}>
      <header>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae cumque
          illum maiores, minus optio, aspernatur quos laudantium eligendi rerum
          blanditiis perferendis dolore consequuntur similique labore! Pariatur
          minima modi unde distinctio.
        </p>
      </header>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 500: 2, 750: 3, 1100: 4, 1500: 5 }}
        className={style.Masonry}
      >
        <Masonry gutter="5px">
          {Object.keys(imagePaths).map((key) => (
            <img key={key} src={imagePaths[key]} />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Photos;
