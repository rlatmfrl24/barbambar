import type { NextPage } from "next";

type TextProps = {
  text: string[];
};

const AnswerLine: NextPage<TextProps> = ({ text }) => {
  return (
    <div className="text-left font-kor lg:text-3xl lg:mb-7">
      <span className="flex flex-row text-5xl">
        A.
        <blockquote className="self-center ml-2 text-2xl">
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
