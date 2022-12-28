import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import eventList from "../../pages/api/data/event.json";

const EventList: NextPage = () => {
  useEffect(() => {
    // event sort by isOngoing boolean
    eventList.sort((a, b) => {
      if (a.isOngoing && !b.isOngoing) {
        return 1;
      } else if (!a.isOngoing && b.isOngoing) {
        return -1;
      } else {
        return 0;
      }
    });
  }, []);

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
          {eventList.map((event, index) => (
            <Link href={`/event/${event._id}`} key={index}>
              <a>
                <EvnetCard
                  title={event.name}
                  startDate={event.startDate}
                  endDate={event.endDate}
                  isOnGoing={event.isOngoing}
                />
              </a>
            </Link>
          ))}
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
      className="bg-white shadow-md p-5 hover:bg-slate-200 cursor-pointer flex flex-col-reverse sm:flex-row justify-between items-start rounded-md "
    >
      <div aria-label="event_text_content">
        <div
          aria-label="event_title"
          className="font-pretend text-lg sm:text-3xl font-bold mt-2 sm:mt-0"
        >
          {data.title}
        </div>
        <div
          aria-label="event_date"
          className="mt-0 sm:mt-3 font-pretend font-semibold"
        >
          {data.startDate} - {data.endDate}
        </div>
      </div>
      {data.isOnGoing ? (
        <div
          aria-label="event_status"
          className="text-white bg-blue-400 font-pretend font-semibold px-2 py-1 rounded-xl"
        >
          진행중
        </div>
      ) : (
        <div
          aria-label="event_status"
          className="text-white bg-red-400 font-pretend font-semibold px-2 py-1 rounded-xl"
        >
          종료
        </div>
      )}
    </div>
  );
};

export default EventList;
