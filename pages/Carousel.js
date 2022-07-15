import { useEffect } from 'react';
import styles from './carousel.module.css';

const Carousel = ({ loop = true, withIndicators = false }) => {
  useEffect(() => {
    renderSlider('.' + styles.slider);
  }, [loop]);

  const nextSlide = () => {
    let activeSlide = document.querySelector('.' + styles.slideActive);
    let nextSlide = activeSlide.nextElementSibling;
    if (nextSlide) {
      activeSlide.classList.remove(styles.slideActive);
      nextSlide.classList.remove(styles.next);
      nextSlide.classList.add(styles.slideActive);
      renderSlides();
      renderBtns();
    }
  };

  const renderBtns = () => {
    let nextBtn = document.querySelector('.' + styles.forward);
    let prevBtn = document.querySelector('.' + styles.back);

    let activeSlide = document.querySelector('.' + styles.slideActive);
    let prevSlide = activeSlide.previousElementSibling;
    !prevSlide
      ? prevBtn.classList.add(styles.disabled)
      : prevBtn.classList.remove(styles.disabled);

    let nextSlide = activeSlide.nextElementSibling;
    !nextSlide
      ? nextBtn.classList.add('.' + styles.disabled)
      : nextBtn.classList.remove('.' + styles.disabled);
  };

  const prevSlide = () => {
    let activeSlide = document.querySelector('.' + styles.slideActive);
    let prevSlide = activeSlide.previousElementSibling;
    if (prevSlide) {
      activeSlide.classList.remove(styles.slideActive);
      prevSlide.classList.remove(styles.prev);
      prevSlide.classList.add(styles.slideActive);
      renderSlides();
      renderBtns();
    }
  };

  const renderSlides = () => {
    let slides = document.querySelectorAll('.' + styles.slide);
    if (!slides) {
      return;
    }
    let activeSlide = document.querySelector('.' + styles.slideActive);
    if (!activeSlide) {
      activeSlide = slides.item(0);
      activeSlide.classList.add(styles.slideActive);
    }
    [].forEach.call(slides, function (slide) {
      slide.classList.remove(styles.prev, styles.next);
    });

    let prevSlide = activeSlide.previousElementSibling;
    prevSlide && prevSlide.classList.add(styles.prev);

    let nextSlide = activeSlide.nextElementSibling;
    nextSlide && nextSlide.classList.add(styles.next);
  };

  const renderSlider = (element) => {
    const slider = document.querySelector(element);
    if (slider) {
      let nextButton = document.querySelector('.' + styles.forward);
      nextButton.addEventListener('click', function () {
        nextSlide();
      });

      let prevButton = document.querySelector('.' + styles.back);
      prevButton.addEventListener('click', function () {
        prevSlide();
      });

      renderSlides();
    }
  };

  return (
    <div className={styles.carouselHolder}>
      <div className={styles.container}>
        <div className={styles.slider}>
          <div className={styles.slide} data-slide="1"></div>
          <div className={styles.slide} data-slide="2"></div>
          <div className={styles.slide} data-slide="3"></div>
          <div
            className={styles.slide + ' ' + styles.slideActive}
            data-slide="4"
          ></div>
          <div className={styles.slide} data-slide="5"></div>
          <div className={styles.slide} data-slide="5"></div>
          <div className={styles.slide} data-slide="5"></div>
          <div className={styles.slide} data-slide="5"></div>
        </div>
        <div
          className={styles.controls}
          style={{ display: withIndicators ? 'flex' : 'none' }}
        >
          <div className={styles.back}>Back</div>
          <div className={styles.forward}>forward</div>
        </div>
      </div>
    </div>
  );
};
export default Carousel;
