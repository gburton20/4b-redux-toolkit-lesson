import { useSelector, useDispatch } from "react-redux";
import { toggleView } from "../store";

function Preferences() {
  const dispatch = useDispatch();
  const view = useSelector((state) => state.preferences.view);
  const units = 'metric';

  function handleToggleView() {
    // If I dispatch toggleView(), this will be translated into an order our chef, store.js, will understand
    // toggleView returns an object with type toggleView
    dispatch(toggleView())
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
