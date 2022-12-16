import useCarousel from "@hooks/useCarousel";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import Title from "@components/Title";

import { cn } from "@utils/style";
import s from "./Carousel.module.scss";

interface ICarouselProps {
  title: string;
  children: React.ReactNode;
}

const Carousel: React.FC<ICarouselProps> = ({ title, children }) => {
  const {
    carouselRef,
    hasReachedStart,
    hasReachedEnd,
    handleLeftClick,
    handleRightClick,
  } = useCarousel();

  return (
    <div className={s.container}>
      <Title>{title}</Title>
      <div className={s.carousel} ref={carouselRef}>
        {children}
      </div>

      {!hasReachedStart ? (
        <div className={s.arrow} onClick={handleLeftClick}>
          <BsChevronLeft color="black" size={28} />
        </div>
      ) : null}

      {!hasReachedEnd ? (
        <div
          className={cn(s.arrow, s["arrow-right"])}
          onClick={handleRightClick}
        >
          <BsChevronRight color="black" size={28} />
        </div>
      ) : null}
    </div>
  );
};

export default Carousel;
