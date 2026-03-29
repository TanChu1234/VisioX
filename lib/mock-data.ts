export const generateMockImages = (count: number) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: `img-${i}`,
    url: `https://picsum.photos/seed/${i + 123}/200/200`,
    name: `IMG_${(i + 1000).toString().padStart(4, '0')}.jpg`,
    labelCount: Math.floor(Math.random() * 5)
  }));
};
