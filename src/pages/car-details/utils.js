const availableBMWImages = ["bmw1.jfif", "bmw2.jfif", "bmw3.jfif"];
const availableMercedesImages = [
  "mercedes1.jfif",
  "mercedes2.jfif",
  "mercedes3.jfif",
];

export const getAppropriateCarList = (carName) => {
  switch (carName) {
    case "bmw":
      return availableBMWImages;

    case "mercedes":
      return availableMercedesImages;

    default:
      return availableBMWImages;
  }
};
