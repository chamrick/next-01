'use client';
import React, { useState, useEffect } from 'react';
import styles from './AlbumsDisplay.module.scss';

type Album = {
  id: number;
  userId: number;
  title: string;
};

const AlbumsDisplay = () => {
  const initialAlbums: Album[] = [];
  const [albumsData, setAlbumsData] = useState(initialAlbums);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then((response) => response.json())
    .then((json) => {
      setAlbumsData(json);
      setIsLoading(false);
      console.log(json);
    })
    .catch((err) => {
      setIsError(true);
      console.log(err);
    });

    return () => {
      console.log('Finished!');
    };
  }, [albumsData, isLoading, isError]);

  return (
    <>
    { isLoading ? <div>Loading...</div> : (
      isError ? <div>Error loading albums data!</div> : (
        <table className={styles.albumsTable}>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {albumsData.map(album => {
              return <tr key={album.id}>
                <td>{album.userId}</td>
                <td>{album.title}</td>
              </tr>;
            })}
          </tbody>
        </table>
      )
    ) }
    </>
  );
};

export default AlbumsDisplay;

