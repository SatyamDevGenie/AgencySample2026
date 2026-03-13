export default function Notebook() {
  return (
    <div className="bg-white rounded shadow p-4">

      <div className="flex gap-3 mb-3">

        <button className="bg-gray-200 px-3 py-1 rounded">
          Notebook
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

      <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">

{`# Data Processing
clean_data = clean_dataset(df)
st.write("Data cleaned successfully")

# Train Model
model = compare_models()
st.write("Best model trained:", model)`}

      </div>

    </div>
  )
}