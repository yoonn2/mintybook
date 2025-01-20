import "../styles/EntryList.css";

const EntryList = ({ entries, onDelete }) => {
  return (
    <div>
      <h2>내역</h2>
      <ul>
        {entries.map((entry) => (
          <li key={entry.id}>
            <div>
              {entry.date} - {entry.category}: {entry.amount}원 (
                {entry.type === "expense"  ? "지출" : "수입" })
            </div>
            {/* 메모가 있을때만 출력 */}
            {entry.memo && <div className="memo">{entry.memo}</div>}
            <button onClick={() => onDelete(entry.id)}>삭제</button>  
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EntryList;
