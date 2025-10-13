const Courses = () => {
  const courses = [
    {
      title: "HTML & CSS Basics",
      level: "Beginner",
      progress: 80,
    },
    {
      title: "JavaScript Fundamentals",
      level: "Intermediate",
      progress: 45,
    },
    {
      title: "React for Beginners",
      level: "Advanced",
      progress: 20,
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">My Courses</h2>
      <p className="text-gray-600 mb-6">
        Here are your enrolled courses and current progress.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm p-6 border hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {course.title}
            </h3>
            <p className="text-sm text-gray-500 mb-4">{course.level}</p>

            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
              <div
                className="bg-primary h-2.5 rounded-full"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600">{course.progress}% completed</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
