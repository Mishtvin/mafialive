'use client';

import { useEffect } from 'react';

export default function MediaOverride() {
  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      const originalGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
      navigator.mediaDevices.getUserMedia = async (constraints) => {
        if (constraints && constraints.audio) {
          // Принудительно отключаем аудио
          constraints.audio = false;
        }
        return originalGetUserMedia(constraints);
      };
    }
  }, []);

  return null;
}
