"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Image from "next/image";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// Temporary
const events = [
  {
    id: 1,
    title: "Parent-Teacher Meeting",
    time: "10:00 AM - 12:00 PM",
    description:
      "A meeting for parents and teachers to discuss student progress and upcoming school activities.",
  },
  {
    id: 2,
    title: "Science Fair",
    time: "1:00 PM - 4:00 PM",
    description:
      "An exhibition of student projects showcasing various scientific experiments and innovations.",
  },
  {
    id: 3,
    title: "School Talent Show",
    time: "2:00 PM - 5:00 PM",
    description:
      "A talent showcase featuring students from various grades performing music, dance, comedy, and more.",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-pascalPink even:border-t-pascalPurple"
            key={event.id}
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>
              <span className="text-gray-300 text-xs">{event.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
