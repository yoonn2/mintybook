import "../styles/EntryList.css";

const EntryList = ({ entries, onDelete }) => {
  // 항목이 없을 경우 메시지 출력
  if (entries.length === 0) {
    return <p>표시할 내역이 없습니다.</p>;
  }

  return (
    <div>
      <h2>내역</h2>
      <ul>
        {entries.map((entry) => (
          <li key={entry.id}>
            <div className={entry.type === "expense" ? "expense" : "income"}>
              {entry.date} - {entry.category}: {entry.amount.toLocaleString()}원 (
              {entry.type === "expense" ? "지출" : "수입"})
            </div>
            {/* 메모가 있을 때만 출력 */}
            {entry.memo && <div className="memo">{entry.memo}</div>}
            <button
              onClick={() => onDelete(entry.id)}
              aria-label={`${entry.category} 항목 삭제`}
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EntryList;
