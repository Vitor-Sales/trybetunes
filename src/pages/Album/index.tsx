import { useLocation, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import getMusics from '../../services/musicsAPI';
import { TrackType } from '../../types';
import MusicCard from '../MusicCard';

function Album() {
  const [loading, setLoading] = useState(true);
  const [tracks, setTracks] = useState<TrackType>([]);
  const location = useLocation();
  console.log(location, 'location');

  const { albumId, artistName, albumName } = location.state;

  useEffect(() => {
    setLoading(true);
    getMusics(albumId.toString())
      .then((data) => setTracks(data))
      .then(() => setLoading(false));
  }, []);

  return (
    <>
      <h1>Album</h1>
      {loading && <p>Carregando...</p>}
      {!loading && (
        <>
          <h3 data-testid="artist-name">{artistName}</h3>
          <p data-testid="album-name">{albumName}</p>
          <ul>
            {tracks.map((track) => (<MusicCard
              key={ track.trackId }
              trackName={ track.trackName }
              previewUrl={ track.previewUrl }
            />))}
          </ul>
        </>
      )}
    </>
  );
}

export default Album;
