'use client';

import React, { useRef, useEffect } from 'react';
import { useParticipants } from '@livekit/components-react';

export default function CustomVideoGrid() {
  const participants = useParticipants();
  const totalSlots = 12;

  const slots = Array.from({ length: totalSlots }, (_, index) => {
    const participant = participants[index];
    return (
      <div
        key={participant ? participant.sid : `placeholder-${index}`}
        className={`video-slot ${participant ? '' : 'placeholder'}`}
      >
        {participant ? (
          <ParticipantVideo participant={participant} />
        ) : (
          <div className="placeholder-content">Ожидание...</div>
        )}
      </div>
    );
  });

  return <div className="video-grid">{slots}</div>;
}

function ParticipantVideo({ participant }: { participant: any }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Попытаемся найти первый видео-трек, который подписан и доступен
  const videoPublication = participant.videoTracks.find(
    (pub: any) => pub.isSubscribed && pub.track,
  );
  const videoTrack = videoPublication ? videoPublication.track : undefined;

  useEffect(() => {
    if (videoTrack && videoRef.current) {
      videoTrack.attach(videoRef.current);
      return () => {
        videoTrack.detach(videoRef.current);
      };
    }
  }, [videoTrack]);

  return (
    <div className="participant-video">
      {videoTrack ? (
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      ) : (
        <div style={{ width: '100%', height: '100%', background: '#444' }} />
      )}
      <p>{participant.identity}</p>
    </div>
  );
}
