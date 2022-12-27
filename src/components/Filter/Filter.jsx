export function Filter({ handleInputValue, filterValue }) {
  return (
    <label htmlFor="">
      Finde Contact by Name
      <input
        type="text"
        name="filter"
        onChange={handleInputValue}
        value={filterValue}
      />
    </label>
  );
}
