import React, { useState } from "react";
import * as S from "./HotelInfo.style";
import GPS from "../../../../assets/image/Reservation/GPS.png";

import testHotel from "../../../../assets/image/Reservation/testHotel.png";

const HotelContainer = () => {
  const [HotelInfo, SetHotelInfo] = useState([
    {
      img: "../../../assets/image/Reservation/testHotel.png",
      name: "나인트리 프리미어 호텔",
      location: "서울",
    },
    {
      img: "../../../assets/image/Reservation/testHotel.png",
      name: "나인트리 프리미어 호텔",
      location: "서울",
    },
    {
      img: "../../../assets/image/Reservation/testHotel.png",
      name: "나인트리 프리미어 호텔",
      location: "서울",
    },
    {
      img: "../../../assets/image/Reservation/testHotel.png",
      name: "나인트리 프리미어 호텔",
      location: "서울",
    },
    {
      img: "../../../assets/image/Reservation/testHotel.png",
      name: "나인트리 프리미어 호텔",
      location: "서울",
    },
    {
      img: "../../../assets/image/Reservation/testHotel.png",
      name: "나인트리 프리미어 호텔",
      location: "서울",
    },
  ]);

  return <S.Container>asd</S.Container>;
};

export default HotelContainer;