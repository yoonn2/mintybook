import "../styles/Stats.css";

const Stats = ({ entries }) => {
    // 총 수입 계산
    const totalIncome = entries
        .filter((entry) => entry.type === "income")
        .reduce((sum, entry) => sum + Number(entry.amount), 0);
    // 총 지출 계산
    const totalExpense = entries
        .filter((entry) => entry.type === "expense")
        .reduce((sum, entry) => sum + Number(entry.amount), 0);
    // 잔액 계산
    const balance = totalIncome - totalExpense;
    
    return (
        <div className="stats">
            <h2>통계</h2>
            <p>총 수입: {totalIncome.toLocaleString()}원</p>
            <p>총 지출: {totalExpense.toLocaleString()}원</p>
            <p>잔액: {balance.toLocaleString()}원</p>
        </div>
    );
};

export default Stats;