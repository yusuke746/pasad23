"use client";
import { useState } from "react";
import styles from "../page.module.css";

export default function SearchPage() {
  const [dateFrom, setDateFrom] = useState("2025-10-01");
  const [dateTo, setDateTo] = useState("2025-10-20");

  return (
    <section className={styles.news}>
      <h1 className={styles.newsTitle} style={{ marginBottom: 24 }}>検索画面</h1>
      <form style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}>
        <div style={{ display: "flex", gap: 16 }}>
          <input type="text" placeholder="お客様番号" style={{ flex: "1 1 200px", padding: 8 }} />
          <input type="text" placeholder="工事店番号" style={{ flex: "1 1 200px", padding: 8 }} />
          <input type="text" placeholder="旧メーター番号" style={{ flex: "1 1 200px", padding: 8 }} />
          <input type="text" placeholder="新メーター番号" style={{ flex: "1 1 200px", padding: 8 }} />
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 8 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginRight: "auto" }}>
            <label>交換年月日</label>
            <input type="date" value={dateFrom} onChange={e => setDateFrom(e.target.value)} />
            <span>～</span>
            <input type="date" value={dateTo} onChange={e => setDateTo(e.target.value)} />
          </div>
          <button type="button" style={{ padding: "8px 24px" }}>検索</button>
        </div>
      </form>
      <table style={{ width: "100%", borderCollapse: "collapse", background: "#fff" }}>
        <thead>
          <tr>
            <th>お客様番号</th>
            <th>工事店番号</th>
            <th>工事店名</th>
            <th>旧メーター番号</th>
            <th>新メーター番号</th>
            <th>口径</th>
            <th>交換年月日</th>
            <th>交換時指針</th>
            <th>開始指針</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={9} style={{ textAlign: "center", padding: 24, color: "#888" }}>データはまだありません</td>
          </tr>
        </tbody>
      </table>

      <div style={{ display: "flex", justifyContent: "center", marginTop: 32 }}>
        <button type="button" style={{ padding: "12px 64px", fontSize: 16, minWidth: 240 }}>CSVダウンロード</button>
      </div>
    </section>
  );
}
