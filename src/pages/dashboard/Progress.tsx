import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "HTML", progress: 90 },
  { name: "CSS", progress: 80 },
  { name: "JavaScript", progress: 60 },
  { name: "React", progress: 40 },
  { name: "Node.js", progress: 20 },
];

const Progress = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Learning Progress</h2>
      <p className="text-gray-600 mb-6">
        Track how far you’ve come in your coding journey.
      </p>

      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">
          Course Completion Overview
        </h3>

        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="progress" fill="#3b82f6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Progress;
