import cv from "../cvconfig";

export const HelloBlock = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <div className="font-bold text-4xl mb-2">
        <h1>
          Hi. My name is <span>{cv.personal.name}</span>
        </h1>
      </div>
      <div className="font-bold text-2xl mb-4">
        <h2>{cv.hero.h1}</h2>
      </div>
      <p>{cv.hero.subtext}</p>
    </div>
  );
};
