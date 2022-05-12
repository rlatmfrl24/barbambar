import type { NextPage } from "next";

type TextProps = {
  text: string;
};

const RulesLine: NextPage<TextProps> = ({ text }) => {
  return (
    <div className="text-left font-kor lg:text-3xl lg:mb-7">
      <span className="flex flex-row">
        •<blockquote className="ml-2">{text}</blockquote>
      </span>
    </div>
  );
};

export default RulesLine;
