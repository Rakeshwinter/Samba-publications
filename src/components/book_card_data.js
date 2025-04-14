const bookData = [
  {
    image: "/images/Longbooks/image1.png",
    rating: 4.5,
    reviews: 140,
    title: "Morals in Daily Life",
    oldPrice: 250,
    newPrice: 150,
    discount: "50%",
  },
  {
    image: "/images/Longbooks/image2.png",
    rating: 4.5,
    reviews: 140,
    title: "Morals in Daily Life",
    oldPrice: 250,
    newPrice: 150,
    discount: "50%",
  },
  {
    image: "/images/Longbooks/image3.png",
    rating: 4.5,
    reviews: 140,
    title: "Morals in Daily Life",
    oldPrice: 250,
    newPrice: 150,
    discount: "50%",
  },
  {
    image: "/images/Longbooks/image4.png",
    rating: 4.5,
    reviews: 140,
    title: "Morals in Daily Life",
    oldPrice: 250,
    newPrice: 150,
    discount: "50%",
  },
  {
    image: "/images/Longbooks/image5.png",
    rating: 4.5,
    reviews: 140,
    title: "Morals in Daily Life",
    oldPrice: 250,
    newPrice: 150,
    discount: "50%",
  },
  {
    image: "/images/Longbooks/image6.png",
    rating: 4.5,
    reviews: 140,
    title: "Morals in Daily Life",
    oldPrice: 250,
    newPrice: 150,
    discount: "50%",
  },
  {
    image: "/images/Longbooks/image7.png",
    rating: 4.5,
    reviews: 140,
    title: "Morals in Daily Life",
    oldPrice: 250,
    newPrice: 150,
    discount: "50%",
  },
];

// Rearranged groups
const bookData1 = [bookData[0], bookData[2], bookData[4], bookData[5]];
const bookData2 = [bookData[1], bookData[3], bookData[5], bookData[6]];
const bookData3 = [bookData[2], bookData[4], bookData[6], bookData[0]];
const bookData4 = [bookData[0], bookData[5], bookData[6], bookData[3]];
const bookData5 = [bookData[2], bookData[4], bookData[6], bookData[2]];
const bookData6 = [bookData[1], bookData[3], bookData[5], bookData[1]];

// Category list to map
const bookCategories = [
  { name: "Children’s Lessons", data: bookData1 },
  { name: "Leaders & Notable", data: bookData2 },
  { name: "Hindi Books", data: bookData3 },
  { name: "Sports Biographies", data: bookData4 },
  { name: "Cartoons and Comics", data: bookData5 },
  { name: "Rhymes", data: bookData6 },
];

// Export all
export default bookData;
export {bookData1,
  bookCategories
};
