
"use client";
import { useEffect, useState } from "react";
import { createClient } from '@supabase/supabase-js';

export default function ContractorsPage() {
  const [contractors, setContractors] = useState([]);
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    const fetchContractors = async () => {
      const { data, error } = await supabase.functions.invoke('get-all-businesses');
      if (!error && data && data.data) setContractors(data.data);
    };
    fetchContractors();
  }, []);

  useEffect(() => {
    console.log("contractors", contractors);
  }, [contractors]);

  const handleRegister = () => {
    if (!number || !name) return;
    setContractors([{ business_code: number, name }, ...contractors]);
    setNumber("");
    setName("");
  };

  return (
    <section>
      <h1 style={{ fontSize: 24, marginBottom: 24 }}>指定工事店登録</h1>
      <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 24 }}>
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
          登録
        </button>
      </div>
      <table style={{ width: "100%", borderCollapse: "collapse", background: "#fff", marginBottom: 32 }}>
        <thead>
          <tr>
            <th style={{ padding: 8, border: "1px solid #ccc" }}>工事店番号</th>
            <th style={{ padding: 8, border: "1px solid #ccc" }}>工事店名</th>
          </tr>
        </thead>
        <tbody>
          {contractors.map((c: any, i: number) => (
            <tr key={i}>
              <td style={{ padding: 8, border: "1px solid #ccc" }}>{c.business_code}</td>
              <td style={{ padding: 8, border: "1px solid #ccc" }}>{c.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

