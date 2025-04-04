'use client';

import React, { useEffect } from 'react';

export default function CustomVideoGrid() {
  useEffect(() => {
    console.log('[DEBUG] CustomVideoGrid смонтировался!');
  }, []);

  return (
    <div
      className="video-grid-custom"
      style={{
        position: 'absolute',
        top: 20,
        left: 20,
        zIndex: 9999,
        background: 'rgba(0, 0, 0, 0.8)',
        color: 'lime',
        padding: '16px',
        fontSize: '18px',
      }}
    >
      <h2>✅ CustomVideoGrid работает!</h2>
      <p>Если ты это видишь — компонент точно подключён и работает.</p>
    </div>
  );
}
