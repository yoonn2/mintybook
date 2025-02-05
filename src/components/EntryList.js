

const EntryList = ({ entries, onDelete }) => {
  // 항목이 없을 경우 메시지 출력
  if (entries.length === 0) {
    return <p>표시할 내역이 없습니다.</p>;
  }

  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold text-gray-800">내역</h2>
      <ul className="space-y-3">
        {entries.map((entry) => (
          <li key={entry.id} className="bg-gray-700 p-4 rounded-lg flex justify-between items-center shadow-md">
            <div className={entry.type === "expense" ? "expense" : "income"}>
              <span className="font-bold text-gray-800">{entry.date}</span> - {entry.category}: {entry.amount.toLocaleString()}원 (
              {entry.type === "expense" ? "지출" : "수입"})
            </div>
            {/* 메모가 있을 때만 출력 */}
            {entry.memo && <div className="memo">{entry.memo}</div>}
            <button
              onClick={() => onDelete(entry.id)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-md"
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
