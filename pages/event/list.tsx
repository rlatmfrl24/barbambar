import { NextPage } from "next";
import Head from "next/head";

const EventList: NextPage = () => {
  return (
    <div className="flex justify-center h-full bg-gray-100">
      <Head>
        <title>Event</title>
      </Head>
      <div className="flex flex-col container lg:m-10 m-4">
        <div id="event_list_title">
          <h1 className="text-3xl font-exo font-bold">Event List</h1>
        </div>
        <div id="event_list" className="mt-5 flex flex-col gap-5">
          <EvnetCard
            title="(한정판) 요피타 글랜캐런 글래스 판매중!"
            startDate="2022.05.11"
            endDate=""
            isOnGoing={true}
          />
          <EvnetCard
            title="(한정판) 요사장 티셔츠 판매중!"
            startDate="2022.05.11"
            endDate=""
            isOnGoing={true}
          />
        </div>
      </div>
    </div>
  );
};

const EvnetCard: NextPage<{
  title: string;
  startDate: string;
  endDate: string;
  isOnGoing: boolean;
}> = (data) => {
  return (
    <div
      id="event_card_example"
      className="bg-white shadow-md p-5 hover:bg-slate-200 cursor-pointer flex justify-between items-center rounded-md"
    >
      <div aria-label="event_text_content">
        <div
          aria-label="event_title"
          className="font-pretend text-3xl font-bold"
        >
          {data.title}
        </div>
        <div
          aria-label="event_date"
          className="mt-3 font-pretend font-semibold"
        >
          {data.startDate} - {data.endDate}
        </div>
      </div>
      <div
        aria-label="event_status"
        className="text-white bg-blue-600 font-pretend font-semibold p-3 rounded-2xl"
      >
        {data.isOnGoing ? "진행중" : "종료"}
      </div>
    </div>
  );
};

export default EventList;
