'use client';

import React from 'react';
import { useParticipants } from '@livekit/components-react';

export default function CustomVideoGrid() {
  const participants = useParticipants();
  console.log('CustomVideoGrid rendered, participants:', participants);
  const totalSlots = 12;

  // Создаем 12 слотов: для каждого индекса либо показываем участника, либо плейсхолдер.
  const slots = Array.from({ length: totalSlots }, (_, index) => {
    const participant = participants[index];
    return (
      <div
        key={participant ? participant.sid : `placeholder-${index}`}
        className="video-slot"
        style={{
          border: '1px solid white',
          minHeight: '150px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#222',
        }}
      >
        {participant ? (
          <ParticipantVideo participant={participant} />
        ) : (
          <div className="placeholder-content" style={{ color: '#fff' }}>
            Ожидание участника...
          </div>
        )}
      </div>
    );
  });

  return (
    <div
      className="video-grid-custom"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '8px',
        padding: '8px',
        boxSizing: 'border-box',
      }}
    >
      {slots}
    </div>
  );
}

function ParticipantVideo({ participant }: { participant: any }) {
  return (
    <div
      className="participant-video"
      style={{
        color: '#fff',
        padding: '8px',
        textAlign: 'center',
        background: '#444',
        width: '100%',
        height: '100%',
      }}
    >
      <p>{participant.identity}</p>
    </div>
  );
}
