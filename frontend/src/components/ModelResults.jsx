export default function ModelResults() {
  return (
    <div className="bg-white rounded shadow p-4">

      <h2 className="font-semibold mb-3">
        Model Training Results
      </h2>

      <div className="grid grid-cols-3 gap-3 text-center">

        <div className="bg-gray-100 p-3 rounded">
          <p className="font-bold text-lg">91%</p>
          <p className="text-xs">Accuracy</p>
        </div>

        <div className="bg-gray-100 p-3 rounded">
          <p className="font-bold text-lg">89%</p>
          <p className="text-xs">Precision</p>
        </div>

        <div className="bg-gray-100 p-3 rounded">
          <p className="font-bold text-lg">86%</p>
          <p className="text-xs">Recall</p>
        </div>

      </div>

      <div className="mt-4">
        <p className="text-sm font-semibold mb-2">
          Feature Importance
        </p>

        <div className="space-y-2">

          <div className="bg-gray-200 h-3 rounded">
            <div className="bg-blue-500 h-3 w-3/4 rounded"></div>
          </div>

          <div className="bg-gray-200 h-3 rounded">
            <div className="bg-blue-500 h-3 w-1/2 rounded"></div>
          </div>

          <div className="bg-gray-200 h-3 rounded">
            <div className="bg-blue-500 h-3 w-1/3 rounded"></div>
          </div>

        </div>

      </div>

    </div>
  )
}