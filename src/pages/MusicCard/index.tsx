import { useEffect, useState } from 'react';
import { SongType } from '../../types';
import checkedHeart from '../../images/checked_heart.png';
import emptyHeart from '../../images/empty_heart.png';
import './MusicCard.css';
import { addSong, removeSong } from '../../services/favoriteSongsAPI';

function MusicCard({ trackName, previewUrl, trackId }: SongType) {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (isChecked) {
      addSong({ trackName, previewUrl, trackId });
    } else {
      removeSong({ trackName, previewUrl, trackId });
    }
  }, [isChecked]);

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
      <label
        htmlFor={ trackId.toString() }
        data-testid={ `checkbox-music-${trackId}` }
      >
        <img src={ isChecked ? checkedHeart : emptyHeart } alt="favorite" />

      </label>
      <input
        type="checkbox"
        id={ trackId.toString() }
        className="checkbox"
        onClick={ () => setIsChecked(!isChecked) }
      />
    </div>
  );
}

export default MusicCard;
