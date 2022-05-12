import type { NextPage } from "next";

type TextProps = {
  text: string;
};

const QuestionLine: NextPage<TextProps> = ({ text }) => {
  return (
    <div className="text-left font-kor lg:text-3xl lg:mb-7">
      <span className="flex flex-row text-5xl">
        Q.
        <blockquote className="flex self-center ml-2 text-3xl">
          {text}
        </blockquote>
      </span>
    </div>
  );
};

export default QuestionLine;
