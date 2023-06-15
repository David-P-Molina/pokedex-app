import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTypes } from '../reducers/typesSlice';
import { Typography } from '@mui/material';
import TypeCard from '../components/TypeCard';
import ErrorCard from '../components/ErrorCard';
import { CircularProgress } from '@mui/material'

const TypesDetail = () => {
  const dispatch = useDispatch();
  const typesList = useSelector((state) => state.types.typesList)
  const status = useSelector((state) => state.types.status)
  const typesError = useSelector((state) => state.types.error)
  
  useEffect(() => {
    dispatch(fetchTypes())
  }, [dispatch])
  
  if(status) return <CircularProgress />

  return (
    <div>
      <h1>Pokemon Types</h1>
      {typesError && <ErrorCard componentName='Types List' error={typesError}></ErrorCard>}
      {typesList.map((type) => (
        <TypeCard key={type.name} type={type}/>
      ))}
    </div>
  )
}

export default TypesDetail