import type { NextPage } from "next";

type TextProps = {
  text: string;
};

const QuestionLine: NextPage<TextProps> = ({ text }) => {
  return (
    <div className="text-left lg:text-3xl lg:mb-7">
      <span className="flex flex-row font-exo lg:text-5xl text-3xl">
        Q.
        <blockquote className="flex font-pretend font-extrabold self-center ml-2 lg:text-4xl md:text-3xl text-xl">
          {text}
        </blockquote>
      </span>
    </div>
  );
};

export default QuestionLine;
