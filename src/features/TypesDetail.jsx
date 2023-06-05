import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTypes } from '../reducers/typesSlice';
import { Typography } from '@mui/material';
const TypesDetail = () => {
  const dispatch = useDispatch();
  const typesList = useSelector((state) => state.types.typesList)
  const status = useSelector((state) => state.types.status)
  const error = useSelector((state) => state.types.error)
  
  useEffect(() => {
    dispatch(fetchTypes())
  }, [dispatch])
  
  if(status === 'loading') return <Typography variant='h4'>Loading...</Typography>

  if(status === 'failed') return <Typography variant='h4'>Error: {error}</Typography>
  return (
    <div>
      <h1>Pokemon Types</h1>
      {console.log(typesList)}
      {typesList.map((type) => (
        <p key={type.name}>{type.name}</p>
      ))}
    </div>
  )
}

export default TypesDetail