const availableBMWImages = ["bmw/bmw1.jfif", "bmw/bmw2.jfif", "bmw/bmw3.jfif"];
const availableMercedesImages = [
  "mercedes/mercedes1.jfif",
  "mercedes/mercedes2.jpg",
  "mercedes/mercedes3.jpg",
];
const availableAudiImages = ["audi/audi1.jpg", "audi/audi2.jpg", "audi/audi3.jpg"];
const availableLamborghiniImages = [
  "lamborghini/lamborghini1.jpg",
  "lamborghini/lamborghini2.jfif",
  "lamborghini/lamborghini3.jpg",
];
const availableFordImages = ["ford/ford1.jfif", "ford/ford2.jpg", "ford/ford3.jpg"];

export const getAppropriateCarList = (carName) => {
  switch (carName) {
    case "bmw":
      return availableBMWImages;

    case "mercedes":
      return availableMercedesImages;

    case "audi":
      return availableAudiImages;

    case "lamborghini":
      return availableLamborghiniImages;

    case "ford":
      return availableFordImages;

    default:
      return availableBMWImages;
  }
};
