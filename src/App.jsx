/** Components */
import Home from "./components/Home";
import IntroBanner from "./components/IntroBanner";
import ContentPanel from "./components/ContentPanel";
function App() {
  return (
    <>
      <IntroBanner />
      <Home />
      <ContentPanel onClose={() => {}}>
        <h1>Hello</h1>
      </ContentPanel>
    </>
  );
}

export default App;
