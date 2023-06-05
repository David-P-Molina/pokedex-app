import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTypes } from './typesSlice';

const TypesDetail = () => {
  const dispatch = useDispatch();
  const typesList = useSelector((state) => state.types.typesList);
  const status = useSelector((state) => state.types.status);
  const error = useSelector((state) => state.types.error);
  return (
    <div>TypesDetail</div>
  )
}

export default TypesDetail