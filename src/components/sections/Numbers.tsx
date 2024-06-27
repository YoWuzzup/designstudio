"use client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const numbers = [
  { num: 129, title: "awards recieved" },
  { num: 1507, title: "cups of coffee" },
  { num: 108, title: "projects completed" },
  { num: 103, title: "happy clients" },
];

const AnimatedNumber: React.FC<{ num: number; isVisible: boolean }> = ({
  num,
  isVisible,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = num;
    const duration = 2000;
    const incrementTime = 50;
    const increment = end / (duration / incrementTime);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [num, isVisible]);

  return <>{count}</>;
};

export const Numbers: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section
      ref={ref}
      className="relative w-full bg-numbers bg-cover flex flex-col sm:flex-row flex-wrap  justify-center items-center gap-24 py-20"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 z-10" />
      {numbers.map((n, indx) => (
        <div
          key={`${n.title}_${indx}`}
          className="flex flex-col items-center z-20 
            "
        >
          <div
            className="relative text-8xl mb-[18px] pb-[18px] 
              before:absolute before:w-2/3 before:h-[1px] before:bottom-0 before:left-1/2 before:-translate-x-1/2 
              before:content-[''] before:bg-white before:opacity-20"
          >
            <AnimatedNumber num={n.num} isVisible={inView} />
          </div>
          <div className="text-lg text-[#555] capitalize">{n.title}</div>
        </div>
      ))}
    </section>
  );
};
