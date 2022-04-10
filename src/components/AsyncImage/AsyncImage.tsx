import { useCallback, useContext, useEffect, useState } from 'react';
import { IAsyncImageProps } from './types';
import styles from './AsyncImage.module.css';
import imagePlaceholder from '../../assets/placeholder-image.png';
import { AppContext } from '../../app/context';

export function AsyncImage(props: IAsyncImageProps) {
  const { state, dispatch } = useContext(AppContext);

  const [loadedSrc, setLoadedSrc] = useState<string | null>(null);
  const [loadingError, setLoadingError] = useState<boolean>(false);

  const handleLoad = useCallback(
    async (imageBlob: Blob) => {
      setLoadedSrc(URL.createObjectURL(imageBlob));
    },
    [],
  )

  const handleError = useCallback(
    () => {
      setLoadingError(true)
    }, []
  )

  const fetchImage = useCallback(
    async () => {
      if (state.images.has(props.src)) {
        setLoadedSrc(state.images.get(props.src)!);
      }
      else {
        try {
          const response = await fetch(props.src);
          if (!response.ok) {
            handleError();
          }
          else {
            const imageBlob = await response.blob();
            handleLoad(imageBlob);
          }
        } catch (error) {
          handleError();
        }
      }
    },
    [handleError, handleLoad, props.src, state.images]
  )

  useEffect(() => {
    setLoadedSrc(null);
    if (props.src) {
      fetchImage();
    }
  }, [handleError, handleLoad, props.src]);

  useEffect(() => {
    if (loadedSrc) {
      dispatch({ type: 'setImage', payload: { key: props.src, value: loadedSrc } })
    }
  }, [dispatch, loadedSrc, props.src])

  if (loadedSrc) {
    return (
      <img
        src={loadedSrc}
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
