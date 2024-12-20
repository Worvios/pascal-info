const announcements = [
  {
    id: 1,
    title: "Meeting with Principal",
    date: "20/12/2024",
    description:
      "A scheduled meeting with the school principal to discuss upcoming changes to the curriculum and policies for next semester. All teachers are invited...",
  },
  {
    id: 2,
    title: "Sports Day Announcement",
    date: "21/12/2024",
    description:
      "The annual sports day is just around the corner! We are excited to announce new events, including track races, tug-of-war, and much more...",
  },
  {
    id: 3,
    title: "Winter Break Notice",
    date: "22/12/2024",
    description:
      "Winter break is approaching! Please make sure to submit all pending assignments before the last day of class. The school will be closed from December 24th to January 5th...",
  },
];

const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        {announcements.map((announcement, index) => {
          const bgColor =
            index % 2 === 0 ? "bg-pascalBlueLight" : "bg-pascalYellowLight";
          const truncatedDescription =
            announcement.description.length > 100
              ? `${announcement.description.substring(0, 100)}...`
              : announcement.description;

          return (
            <div key={announcement.id} className={`${bgColor} rounded-md p-4`}>
              <div className="flex items-center justify-between">
                <h2 className="font-medium">{announcement.title}</h2>
                <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
                  {announcement.date}
                </span>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                {truncatedDescription}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Announcements;
