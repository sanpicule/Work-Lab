import Link from "next/link";
import React, { FC } from "react";
import { CardProps } from "../types/types";
import { getDate, getMultiSelect, getText } from "@/utils/property";
 
const Card: FC<CardProps> = ({ page }) => {
  return (
    <Link href={`/articles/${getText(page.properties.slug.rich_text)}`} scroll={false}>
      <div className="transition duration-200 hover:scale-[90%] flex flex-col rounded-2xl shadow-[0px_0px_10px_0px_#c63a17] overflow-hidden h-full bg-white w-full hover:shadow-none border border-color-#c63a17">
        {/* title & date*/}
        <div className="px-6 pt-4 text-start">
          <p>{getDate(page.properties.published.date)}</p>
          <h4 className="text-[16px] font-bold">{getText(page.properties.name.title)}</h4>
        </div>
        {/* tag */}
        <div className="flex flex-wrap mt-4 px-2 pb-4">
          {getMultiSelect(page.properties.tags.multi_select).map((tag, index) => (
            <span
              key={index}
              className="text-xs md:text-sm px-2 py-[1px] bg-gray-200 rounded-md break-words mr-2 mb-2"
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
