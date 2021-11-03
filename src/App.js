import Header from "./components/Header";
import Tabs from "./components/Tabs";
import Chats from "./components/Chats";
import Floating from "./components/Floating";

function App() {
  return (
    <div className="App">
      <Header />
      <Tabs />
      <Chats />
      <Floating />
    </div>
  );
}

export default App;
