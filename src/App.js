import AddEntry from "./components/AddEntry";
function App() {
  const handleAddEntry = (entry) => {
    console.log("새 항목:", entry);
  };

  return (
    <div>
      <h1>MintyBook</h1>
      <AddEntry onAdd={handleAddEntry} />
    </div>
  );
}

export default App;
