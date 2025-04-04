'use client';

import React from 'react';
import { useParticipants, useTracks, ParticipantTile, TrackReferenceOrPlaceholder, TrackReference } from '@livekit/components-react';
import { Track } from 'livekit-client';

export default function CustomVideoGrid() {
  const participants = useParticipants();
  const totalSlots = 12;

  // Получаем все видео треки участников
  const videoTracks = useTracks([Track.Source.Camera])
    .filter((trackRef: TrackReference) => trackRef.publication.isSubscribed && trackRef.publication.trackName === 'camera');

  // Создаем массив из 12 элементов: реальные участники + плейсхолдеры
  const slots = Array.from({ length: totalSlots }, (_, index) => {
    const trackRef = videoTracks[index];
    return (
      <div key={index} className="video-slot">
        {trackRef ? (
          <ParticipantTile trackRef={trackRef as TrackReferenceOrPlaceholder} />
        ) : (
          <div className="placeholder-tile">Ожидание участника...</div>
        )}
      </div>
    );
  });

  return <div className="video-grid-custom">{slots}</div>;
}