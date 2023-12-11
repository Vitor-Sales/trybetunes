import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import getMusics from '../../services/musicsAPI';
import { SongType, AlbumInfoType } from '../../types';
import MusicCard from '../MusicCard';

function Album() {
  const [loading, setLoading] = useState(true);
  const [infoAlbum, setInfoAlbum] = useState<AlbumInfoType>();
  const [albumTracks, setAlbumTracks] = useState<(SongType)[]>([]);
  const params = useParams();

  const treatAlbum = async () => {
    setLoading(true);
    const [album, ...tracks] = await getMusics(params.id as string);
    setInfoAlbum(album);
    setAlbumTracks(tracks);
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
          <h3 data-testid="artist-name">{infoAlbum?.artistName}</h3>
          <p data-testid="album-name">{infoAlbum?.collectionName}</p>
          <ul>
            {albumTracks
              .filter((track) => Object.keys(track).includes('trackId'))
              .map((trac) => (<MusicCard
                key={ trac.trackId }
                trackName={ trac.trackName }
                previewUrl={ trac.previewUrl }
                trackId={ trac.trackId }
              />))}
          </ul>
        </>
      )}
    </>
  );
}

export default Album;
