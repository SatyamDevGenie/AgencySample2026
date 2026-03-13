export default function Header() {
  return (
    <div className="bg-white border-b px-6 py-3 flex justify-between items-center">

      <h1 className="text-lg font-semibold text-gray-700">
        AI Data Scientist Workspace
      </h1>

      <div className="flex gap-3">

        <button className="bg-gray-200 px-3 py-1 rounded">
          Editor
        </button>

        <button className="bg-green-500 text-white px-3 py-1 rounded">
          Run
        </button>

        <button className="bg-blue-500 text-white px-3 py-1 rounded">
          Train Model
        </button>

        <button className="bg-indigo-500 text-white px-3 py-1 rounded">
          Build UI
        </button>

      </div>

    </div>
  )
}