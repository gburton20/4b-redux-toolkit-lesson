function Preferences() {
  const view = 'list';
  const units = 'metric':

  function handleToggleView() {
  }

  function handleToggleUnits() {
  }

  const preferencesStyle = {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  };

  return (
    <div style={preferencesStyle}>
      <button onClick={handleToggleView}>
        Switch to {view === "list" ? "Grid" : "List"} View
      </button>

      <button onClick={handleToggleUnits}>
        Switch to {units === "metric" ? "Imperial" : "Metric"} Units
      </button>
    </div>
  );
}

export default Preferences;
