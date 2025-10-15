
// 検満対象の登録画面
"use client";
import { useState } from "react";

type UploadResult = {
  date: string;
  status: "成功" | "失敗";
  fileName: string;
};

export default function InspectionTargetsPage() {
  const [file, setFile] = useState<File | null>(null);
  const [results, setResults] = useState<UploadResult[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0] || null;
    if (selected && selected.name.endsWith(".csv")) {
      setFile(selected);
    } else {
      setFile(null);
    }
  };

  const handleUpload = () => {
    if (!file) return;
    // 仮アップロード処理
    const now = new Date();
    setResults([
      { date: now.toLocaleString(), status: "成功", fileName: file.name },
      ...results,
    ]);
    setFile(null);
  };

  return (
    <section>
      <h1 style={{ fontSize: 24, marginBottom: 24 }}>検満対象の登録</h1>
      <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 32 }}>
        <input
          type="file"
          accept=".csv"
          onChange={handleFileChange}
          style={{ padding: 8 }}
        />
        <button
          type="button"
          onClick={handleUpload}
          disabled={!file}
          style={{
            padding: "8px 32px",
            background: file ? "#0070f3" : "#ccc",
            color: "#fff",
            border: "none",
            cursor: file ? "pointer" : "not-allowed",
          }}
        >
          アップロード
        </button>
      </div>
      <h2 style={{ fontSize: 18, marginBottom: 12 }}>アップロード履歴</h2>
      <table style={{ width: "100%", borderCollapse: "collapse", background: "#fff" }}>
        <thead>
          <tr>
            <th style={{ padding: 8, border: "1px solid #ccc" }}>日付</th>
            <th style={{ padding: 8, border: "1px solid #ccc" }}>ファイル名</th>
            <th style={{ padding: 8, border: "1px solid #ccc" }}>ステータス</th>
          </tr>
        </thead>
        <tbody>
          {results.map((r, i) => (
            <tr key={i}>
              <td style={{ padding: 8, border: "1px solid #ccc" }}>{r.date}</td>
              <td style={{ padding: 8, border: "1px solid #ccc" }}>{r.fileName}</td>
              <td style={{ padding: 8, border: "1px solid #ccc" }}>{r.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
