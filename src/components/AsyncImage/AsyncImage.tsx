import React, { useCallback } from 'react';
import { IAsyncImageProps } from './types';
import styles from './AsyncImage.module.css';

export function AsyncImage(props: IAsyncImageProps) {
  const [loadedSrc, setLoadedSrc] = React.useState<string | null>(null);

  const handleLoad = useCallback(
    () => {
      setLoadedSrc(props.src);
    },
    [props.src],
  )

  React.useEffect(() => {
    setLoadedSrc(null);
    if (props.src) {
      const image = new Image();
      image.addEventListener('load', handleLoad);
      image.src = props.src;
      return () => {
        image.removeEventListener('load', handleLoad);
      };
    }
  }, [handleLoad, props.src]);

  if (loadedSrc === props.src) {
    return (
      <img
        src={props.src}
        alt='item'
        className={`img-thumbnail ${props.isAdditionalImage ? styles.additionalImage : ''}`}></img>
    );
  }
  return null;
};
