export const isMobile = window.innerWidth < 1200;

export const isFlutter = (techName: string): string => {
  return techName === "Flutter" ? "w-[65%] mx-auto" : "w-[90%] mx-auto";
};

export const isBallTooLarge = (imgUrl: string): boolean => {
  const xlImages = ["flutter", "swift", "vue", "python", "figma", "node"];
  return xlImages.some(i => imgUrl.includes(i));
};
