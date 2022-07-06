import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event () {
  return (
    <div>
      <Header />
      <div className="flex flex-col min-h-screen">
        <Video />
        <Sidebar />
      </div>
    </div>
  )
}