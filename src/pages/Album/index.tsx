import { useLocation, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import getMusics from '../../services/musicsAPI';
import { TrackType, AlbumType, SongType, AlbumInfoType } from '../../types';
import MusicCard from '../MusicCard';

function Album() {
  const [loading, setLoading] = useState(true);
  const [tracks, setTracks] = useState<TrackType>([]);
  const [infoAlbum, setInfoAlbum] = useState<AlbumInfoType>();
  const [albumTracks, setAlbumTracks] = useState<(SongType)[]>([]);
  const params = useParams();

  const treatAlbum = async () => {
    setLoading(true);
    const data = await getMusics(params.id as string);
    setTracks(data);
    setLoading(false);
  };

  useEffect(() => {
    treatAlbum();
  }, []);

  return (
    <>
      <h1>Album</h1>
      {loading && <p>Carregando...</p>}
      {!loading && (
        <>
          <h3 data-testid="artist-name">{tracks[0].artistName}</h3>
          <p data-testid="album-name">{tracks[0].collectionName}</p>
          <ul>
            {tracks
              .filter((track) => Object.keys(track).includes('trackId'))
              .map((trac) => (<MusicCard
                key={ trac.trackId }
                trackName={ trac.trackName }
                previewUrl={ trac.previewUrl }
              />))}
          </ul>
        </>
      )}
    </>
  );
}

export default Album;
