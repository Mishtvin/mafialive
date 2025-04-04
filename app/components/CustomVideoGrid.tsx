'use client';

import React from 'react';
import { useParticipants, VideoTile } from '@livekit/components-react'; // убедитесь, что VideoTile доступен или создайте свой

export default function CustomVideoGrid() {
  const participants = useParticipants();
  const totalSlots = 12;
  
  // Создаем массив из 12 элементов
  const slots = Array.from({ length: totalSlots }, (_, index) => {
    const participant = participants[index];
    if (participant) {
      return (
        <div key={participant.sid} className="video-slot">
          {/* VideoTile — компонент для отображения видео участника */}
          <VideoTile participant={participant} />
        </div>
      );
    }
    return (
      <div key={`placeholder-${index}`} className="video-slot placeholder">
        <div className="placeholder-content">Ожидание...</div>
      </div>
    );
  });

  return <div className="video-grid">{slots}</div>;
}
