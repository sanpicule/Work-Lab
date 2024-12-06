import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { CardProps } from "../types/types";
import { getCover, getDate, getMultiSelect, getText } from "@/utils/property";
 
const Card: FC<CardProps> = ({ page }) => {
  return (
    <Link href={`/articles/${getText(page.properties.slug.rich_text)}`}>
      <div className="transition duration-200 hover:scale-105 flex flex-col rounded-md bg-slate-700 shadow-2xl overflow-hidden h-full">
        {/* image */}
        <Image
          className="w-full h-40 object-cover"
          src={getCover(page.cover)}
          alt=""
          width={400}
          height={300}
          quality={30}
        />
        {/* title & date*/}
        <div className="px-6 pt-4 text-white text-start">
          <p className="text-white">{getDate(page.properties.published.date)}</p>
          <h4 className="text-white">{getText(page.properties.name.title)}</h4>
        </div>
        {/* tag */}
        <div className="flex flex-wrap mt-2 px-2 pb-4">
          {getMultiSelect(page.properties.tags.multi_select).map((tag, index) => (
            <span
              key={index}
              className="text-sm px-2 py-1 font-normal bg-gray-200 rounded-lg break-words mr-2 mb-2"
            >
              {`#${tag}`}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};
 
export default Card;
