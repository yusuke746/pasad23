
// 指定工事店登録画面
"use client";
import { useState } from "react";

export default function ContractorsPage() {
  // 仮データ（本来はDBから取得）
  const [contractors, setContractors] = useState([
    { number: "1001", name: "株式会社サンプル工事店" },
    { number: "1002", name: "有限会社テスト工事店" },
  ]);
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");

  // 登録・更新ボタン押下時の仮処理
  const handleRegister = () => {
    if (!number || !name) return;
    setContractors([...contractors, { number, name }]);
    setNumber("");
    setName("");
  };

  return (
    <section>
      <h1 style={{ fontSize: 24, marginBottom: 24 }}>指定工事店登録</h1>
      <table style={{ width: "100%", borderCollapse: "collapse", background: "#fff", marginBottom: 32 }}>
        <thead>
          <tr>
            <th style={{ padding: 8, border: "1px solid #ccc" }}>工事店番号</th>
            <th style={{ padding: 8, border: "1px solid #ccc" }}>工事店名</th>
          </tr>
        </thead>
        <tbody>
          {contractors.map((c, i) => (
            <tr key={i}>
              <td style={{ padding: 8, border: "1px solid #ccc" }}>{c.number}</td>
              <td style={{ padding: 8, border: "1px solid #ccc" }}>{c.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <input
          type="text"
          placeholder="工事店番号"
          value={number}
          onChange={e => setNumber(e.target.value)}
          style={{ padding: 8, flex: "1 1 160px" }}
        />
        <input
          type="text"
          placeholder="工事店名"
          value={name}
          onChange={e => setName(e.target.value)}
          style={{ padding: 8, flex: "2 1 320px" }}
        />
        <button type="button" onClick={handleRegister} style={{ padding: "8px 32px" }}>
          更新
        </button>
      </div>
    </section>
  );
}

