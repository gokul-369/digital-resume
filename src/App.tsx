import Main from "./components/Main";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <div
        className="bg-bgprimary dark:bg-white flex justify-between h-screen p-3 rounded-sm
    "
      >
        <SideBar />
        <Main />
      </div>
      <footer className="bg-bgprimary py-3 text-center text-xs text-textSecondary">
        Hand crafted with typescript by Gokul
      </footer>
    </>
  );
}

export default App;
