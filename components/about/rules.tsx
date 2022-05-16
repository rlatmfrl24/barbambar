import type { NextPage } from "next";

type TextProps = {
  text: string;
};

const RulesLine: NextPage<TextProps> = ({ text }) => {
  return (
    <div className="text-left font-pretend font-semibold lg:text-3xl md:text-2xl sm:text-xl text-base lg:mb-4 mb-1 ">
      <span className="flex flex-row">
        •<blockquote className="ml-2">{text}</blockquote>
      </span>
    </div>
  );
};

export default RulesLine;
