export default function Sidebar() {
  return (
    <div className="w-72 bg-white rounded shadow flex flex-col">

      <div className="bg-blue-600 text-white p-3 rounded-t">
        AI Assistant
      </div>

      <div className="flex-1 p-4 space-y-3 text-sm">

        <div className="bg-green-100 p-3 rounded">
          Here is my dataset. Can you help me build a model?
        </div>

        <div className="bg-gray-100 p-3 rounded">
          Let's analyze your dataset!
          <br />
          5000 rows detected
        </div>

        <div className="bg-gray-100 p-3 rounded">
          Target: Churn
        </div>

      </div>

      <div className="p-3 border-t flex gap-2">
        <input
          className="border rounded px-2 py-1 flex-1"
          placeholder="Ask anything..."
        />
        <button className="bg-blue-600 text-white px-3 rounded">
          Send
        </button>
      </div>

    </div>
  )
}