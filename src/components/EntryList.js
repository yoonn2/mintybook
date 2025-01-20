const EntryList = ({ entries }) => {
  return (
    <div>
      <h2>항목</h2>
      <ul>
        {entries.map((entry) => (
          <li key={entry.id}>
            {entry.date} - {entry.category}: {entry.amount}원 ({entry.type})
            <hr></hr>
            {entry.memo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EntryList;
