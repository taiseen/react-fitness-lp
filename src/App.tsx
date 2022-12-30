import { SelectedPage } from "@/shared/types";
import { Navbar } from "@/components";
import { useState } from "react";



const App = () => {

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);


  return (
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </div>
  )
}

export default App