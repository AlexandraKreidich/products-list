import React, { useCallback, useEffect, useState } from 'react';
import { IAsyncImageProps } from './types';
import styles from './AsyncImage.module.css';
import imagePlaceholder from '../../assets/placeholder-image.png';

export function AsyncImage(props: IAsyncImageProps) {
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null);
  const [loadingError, setLoadingError] = useState<boolean>(false);

  const handleLoad = useCallback(
    () => {
      setLoadedSrc(props.src);
    },
    [props.src],
  )

  const handleError = useCallback(
    () => {
      setLoadingError(true)
    }, []
  )

  useEffect(() => {
    setLoadedSrc(null);
    if (props.src) {
      const image = new Image();
      image.addEventListener('load', handleLoad);
      image.addEventListener('error', handleError);
      image.src = props.src;
      return () => {
        image.removeEventListener('load', handleLoad);
        image.removeEventListener('error', handleError);
      };
    }
  }, [handleError, handleLoad, props.src]);

  if (loadedSrc === props.src) {
    return (
      <img
        src={props.src}
        alt='item'
        className={`img-thumbnail ${props.isAdditionalImage ? styles.additionalImage : ''}`}></img>
    );
  }
  if (loadingError) {
    return (
      <img
        src={imagePlaceholder}
        alt='item'
        className={`img-thumbnail ${props.isAdditionalImage ? styles.additionalImage : ''}`}></img>
    );
  }
  return null;
};
