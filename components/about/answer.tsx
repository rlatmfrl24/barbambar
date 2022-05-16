import type { NextPage } from "next";

type TextProps = {
  text: string[];
};

const AnswerLine: NextPage<TextProps> = ({ text }) => {
  return (
    <div className="text-left lg:text-3xl lg:mb-7 mb-5">
      <span className="flex font-exo flex-row lg:text-5xl text-3xl">
        A.
        <blockquote className="font-pretend font-medium self-center ml-2 lg:text-3xl md:text-lg text-base">
          {text.map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </blockquote>
      </span>
    </div>
  );
};

export default AnswerLine;
