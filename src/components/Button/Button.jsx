export function Button({ text, deleteContact, id }) {
  return (
    <button type="button" onClick={() => deleteContact(id)}>
      {text}
    </button>
  );
}
