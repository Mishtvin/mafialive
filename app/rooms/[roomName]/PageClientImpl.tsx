'use client';

import React from 'react';
import CustomVideoGrid from '../../components/CustomVideoGrid'; // ✅ убедись, что путь правильный!

export function PageClientImpl() {
  return (
    <main data-lk-theme="default" style={{ height: '100%' }}>
      <CustomVideoGrid /> {/* ✅ теперь найден, так как импортирован выше */}
    </main>
  );
}
