const BrokenImage =
  "https://i.postimg.cc/RZvT9tdr/guerrillabuzz-crypto-pr-Wtol-M5hsj14-unsplash.jpg";
export const imageOnError = (event: any) => {
  event.target.src = BrokenImage;
};
