const DashboardHome = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Welcome Back 👋</h2>
      <p className="text-gray-600 mb-6">
        Here’s your learning overview and recent activities.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Courses Enrolled</h3>
          <p className="text-2xl font-bold mt-2">8</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Lessons Completed</h3>
          <p className="text-2xl font-bold mt-2">32</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Certificates Earned</h3>
          <p className="text-2xl font-bold mt-2">3</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
