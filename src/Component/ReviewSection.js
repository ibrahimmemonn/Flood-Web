import React from "react";
import Review from "./Review";
import news1 from "../assets/news.jpg";
import news2 from "../assets/news2.jpg";
import news3 from "../assets/news3.jpg";
import news4 from "../assets/news4.jpg";

const ReviewSection = () => {
  return (
    <Review
      // FIRST REVIEW DATA
      firstName="Zeeshan Abro"
      firstDate="15 May 2022 at 11:21"
      firstDesc="  The swirling flood waters have damaged or submerged millions
                  of acres of farmland, including part of the prized cotton
                  crop, in a country where the agricultural sector accounts for
                  about a quarter of the economy. The provinces of Sindh and
                  Balochistan have been the worst hit so far.
                                 of acres of farmland, including part of the prized cotton
               — With assistance by Zeeshan Abro"
      firstCity=" Badin Sindh"
      firstImage={news1}
      firstImage2={news2}
      firstImage3={news3}
      firstImage4={news4}
    />
  );
};

export default ReviewSection;
