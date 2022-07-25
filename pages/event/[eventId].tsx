import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import eventList from "../../pages/api/data/event.json";

interface EventDataProps {
  name: string;
  startDate: string;
  endDate: string;
  isOngoing: boolean;
  _id: Number;
  image: string;
  description: string[];
}

const Yopita: NextPage = () => {
  const router = useRouter();
  const { eventId } = router.query;
  const list: EventDataProps[] = JSON.parse(JSON.stringify(eventList));
  const event = list.find((event) => event._id === Number(eventId));

  if (!event) {
    return <div>404</div>;
  }
  1;
  return (
    <div className="flex flex-col h-full  items-center bg-gray-100">
      <div aria-label="return_container" className="p-5 self-start">
        <button className="hover:bg-gray-200 p-3 rounded-md">
          <Link href="/event/list">
            <a>
              <h1 className="text-xl font-exo font-bold">
                ← Back to Event List
              </h1>
            </a>
          </Link>
        </button>
      </div>
      <div aria-label="content_container" className="p-5 container ">
        <h1 className="font-pretend text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-center">
          {event?.name}
        </h1>
        <div className="border-b-2 border-b-black my-4 md:my-8 px-20"></div>
        <div className="flex flex-col md:flex-row my-5 gap-5 items-center md:items-start justify-center">
          <div className="flex-1 max-w-lg min-w-full md:min-w-0">
            <Image
              src={event.image}
              // src="/img/hero_placeholder.png"
              className="rounded-3xl"
              width="500"
              height="500"
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <div className="flex-1 font-pretend font-semibold text-base sm:text-xl md:text-2xl lg:text-3xl max-w-lg">
            {event?.description.map((line) => {
              return <p className="my-2 md:my-5">{line}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Yopita;
