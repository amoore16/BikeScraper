import React from "react";
import { bikeInfo } from "../models/bikeInfo";

type Props = {
  bikeList: Array<bikeInfo> | undefined | null;
};

const BikeList = (props: Props) => {
  const { bikeList } = props;

  const bikeCards = bikeList
    ?.map((bike) => {
      const parsedPrice = parseFloat(bike.price.substring(1).replace(",", ""));

      return {
        title: bike.title,
        price: bike.price,
        formattedPrice: parsedPrice,
        description: bike.description,
        image: bike.image,
        link: bike.link,
      };
    })
    .sort((a, b) => a.formattedPrice - b.formattedPrice);

  return (
    <div id="bikeList">
      {bikeCards?.map((bike) => {
        return (
          <a
            className="link"
            href={bike.link}
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="card">
              <img className="bikeImage" src={bike.image} />
              {bike.title} <br /> <b>Price</b> {bike.price}
              <br />
              <ul className="hide">
                {bike.description.map((desc) => {
                  return <li>{desc}</li>;
                })}
              </ul>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default BikeList;
