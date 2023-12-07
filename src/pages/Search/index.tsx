import { useState } from 'react';
import { Link } from 'react-router-dom';
import searchAlbumsAPI from '../../services/searchAlbumsAPI';
import { AlbumType } from '../../types';

function Search() {
  const [artistValue, setArtistValue] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [albums, setAlbums] = useState<AlbumType[]>([]);
  const [lastArtist, setLastArtist] = useState('');

  const handleClick = (e: any) => {
    e.preventDefault();
    setLoading(true);
    searchAlbumsAPI(artistValue)
      .then((data) => setAlbums(data))
      .then(() => {
        setLastArtist(artistValue);
        setArtistValue('');
        setLoading(false);
      });
  };

  return (
    <>
      <h1>Search</h1>
      {loading ? <p>Carregando...</p> : (
        <form>
          <label htmlFor="artist-name">Banda ou Artista</label>
          <input
            type="text"
            id="artist-name"
            data-testid="search-artist-input"
            value={ artistValue }
            onChange={ (e) => setArtistValue(e.target.value) }
          />
          <button
            data-testid="search-artist-button"
            disabled={ artistValue.length < 2 }
            onClick={ handleClick }
          >
            Pesquisar
          </button>
        </form>
      )}
      {albums.length > 0
        ? (
          <div>
            <p>
              {`Resultado de álbuns de: ${lastArtist}`}
            </p>
            {albums.map((album) => (
              <div key={ album.collectionId }>
                <Link
                  to={ `/album/${album.collectionId}` }
                  data-testid={ `link-to-album-${album.collectionId}` }
                >
                  {album.collectionName}
                </Link>
              </div>
            ))}
          </div>

        ) : <p>Nenhum álbum foi encontrado</p>}
    </>
  );
}

export default Search;
