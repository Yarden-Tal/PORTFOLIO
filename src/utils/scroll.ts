const isScrolled = (): boolean => {
  const scrollTop: number = window.scrollY;
  const scrollLimit: number = 100;
  return (scrollTop > scrollLimit);
};

export default isScrolled;
