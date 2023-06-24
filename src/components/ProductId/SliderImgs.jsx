import sliderImg from './style/SliderImg.css'

const SliderImgs = ({ product }) => {


  return (
    <div className="slider">
        <div className="slider__movible">
            {
                product?.images.map(imgInfo => (
                    <div className="slider__img-container" key={imgInfo.id}>
                        <img className="slider__img" src={imgInfo.url} alt="" />
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default SliderImgs