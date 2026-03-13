import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Notebook from "./components/Notebook"
import ModelResults from "./components/ModelResults"
import PredictionPanel from "./components/PredictionPanel"

export default function App() {
  return (
    <div className="h-screen bg-gray-100 flex flex-col">

      <Header />

      <div className="flex flex-1 p-4 gap-4">

        <Sidebar />

        <div className="flex-1 flex flex-col gap-4">

          <Notebook />

          <div className="grid grid-cols-2 gap-4">
            <ModelResults />
            <PredictionPanel />
          </div>

        </div>

      </div>

    </div>
  )
}