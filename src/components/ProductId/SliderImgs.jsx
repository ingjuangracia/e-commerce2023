import { useState } from 'react'
import './styles/sliderImgs.css'

const SliderImgs = ({ product }) => {

  const [indexImg, setIndexImg] = useState(0);

  const styleMovible = {
    transform: `translateX(calc((-${indexImg} / 3) * 100%))`

  }

  const handlePrevious = () => {
    if (indexImg - 1 >= 0) {
      setIndexImg(indexImg - 1)
    } else {
      setIndexImg(2)
    }
  }

  const handleNext = () => {
    if (indexImg + 1 <= 2) {
      setIndexImg(indexImg + 1)
    } else {
      setIndexImg(0)
    }
  }


  return (
    <article className="slider-container">
      <section className="slider">
        <button onClick={handlePrevious} className="slider__btn slider__left">&lt;</button>
        <div style={styleMovible} className="slider__movible">
          {
            product?.images.map(imgInfo => (
              <div className="slider__img-container" key={imgInfo.id}>
                <img className="slider__img" src={imgInfo.url} alt="" />
              </div>
            ))
          }
        </div>
        <button onClick={handleNext} className="slider__btn slider__right">&gt;</button>
      </section>
      <footer className="slider__footer-container">
        <div className="slider__footer">
          {
            product?.images.map((imgInfo, i) => (
              <div
                className={`slider__footer-img-container ${(i === indexImg) && "slider__img-active"}`} key={imgInfo.id} onClick={() => setIndexImg(i)}>
                <img className="slider__img" src={imgInfo.url} alt="" />
              </div>
            ))
          }
        </div>
      </footer>
    </article>
  )
}

export default SliderImgs