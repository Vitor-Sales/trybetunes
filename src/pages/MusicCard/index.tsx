type MusicType = {
  trackName: string,
  previewUrl: string,
};

function MusicCard({ trackName, previewUrl }: MusicType) {
  return (
    <div className="music-card">
      <p>{trackName}</p>
      <audio data-testid="audio-component" src={ previewUrl } controls>
        <track kind="captions" />
        O seu navegador não suporta o elemento
        {' '}
        {' '}
        <code>audio</code>
        .
      </audio>

    </div>
  );
}

export default MusicCard;
