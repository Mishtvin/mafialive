"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [nickname, setNickname] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Запрос к серверу для получения токена
      const res = await fetch(`/token?identity=${encodeURIComponent(nickname)}&room=default-room`);
      if (!res.ok) {
        throw new Error("Ошибка при получении токена");
      }
      const data = await res.json();
      // Переход на страницу комнаты с передачей токена и никнейма
      router.push(`/rooms/default-room?token=${encodeURIComponent(data.token)}&identity=${encodeURIComponent(nickname)}`);
    } catch (error: any) {
      console.error("Ошибка:", error);
      alert("Ошибка: " + error.message);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px" }}>
      <h1>Вход в комнату</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Введите ваш никнейм"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          required
          style={{ padding: "8px", fontSize: "16px" }}
        />
        <button type="submit" style={{ padding: "10px 20px", fontSize: "16px", marginTop: "10px" }}>
          Войти
        </button>
      </form>
    </div>
  );
}
