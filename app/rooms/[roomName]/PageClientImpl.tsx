<main data-lk-theme="default" style={{ height: '100%' }}>
  <CustomVideoGrid /> {/* ⬅ вставка отладочного компонента */}

  {connectionDetails === undefined || preJoinChoices === undefined ? (
    <div style={{ display: 'grid', placeItems: 'center', height: '100%' }}>
      <PreJoin
        defaults={preJoinDefaults}
        onSubmit={handlePreJoinSubmit}
        onError={handlePreJoinError}
      />
    </div>
  ) : (
    <VideoConferenceComponent
      connectionDetails={connectionDetails}
      userChoices={preJoinChoices}
      options={{ codec: props.codec, hq: props.hq }}
    />
  )}
</main>
