"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../../ui/3d-card";
import Link from "next/link";

export function ThreeDCardDemo({ title, description, imageUrl, link }) {
  return (
    <div className="dark">
      <CardContainer className="inter-var">
        <CardBody className="bg-[#131313] border-white border-solid border-[2px] relative group/card w-full sm:w-[30rem] min-w-[23rem] h-auto min-h-[27rem] rounded-xl p-4 sm:p-6">
          <CardItem translateZ="50" className="text-xl font-bold text-white">
            {title}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-300 text-sm max-w-xs sm:max-w-sm mt-2"
          >
            {description}
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={imageUrl}
              height="1000"
              width="1000"
              className="h-60 sm:h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt={`${title} thumbnail`}
            />
          </CardItem>
          <Link href={link}>
            <div className="flex justify-center sm:justify-between items-center mt-5 sm:mt-5">
              <CardItem
                translateZ={20}
                as="button"
                className="px-3 py-2 rounded-xl text-white text-lg w-full bg-[#4284f4]"
              >
                Learn More
              </CardItem>
            </div>
          </Link>
        </CardBody>
      </CardContainer>
    </div>
  );
}
