export default function PredictionPanel() {
  return (
    <div className="bg-white rounded shadow p-4">

      <h2 className="font-semibold mb-3">
        Prediction UI Preview
      </h2>

      <div className="space-y-3">

        <input
          className="border p-2 rounded w-full"
          placeholder="Age"
        />

        <input
          className="border p-2 rounded w-full"
          placeholder="Monthly Income"
        />

        <input
          className="border p-2 rounded w-full"
          placeholder="Tenure"
        />

        <button className="bg-blue-600 text-white w-full py-2 rounded">
          Predict
        </button>

        <p className="text-red-500 text-sm">
          Prediction: Churn = Yes
        </p>

      </div>

    </div>
  )
}