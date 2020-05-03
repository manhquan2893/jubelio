import React, { useState,useEffect } from 'react'
import {connect} from 'react-redux'
import { Input } from 'antd'
import SaleItemList from '../SaleItemList/SaleItemList'
import api from 'services/api'
import './style.scss'
import { GET_LOCATION_ITEMS } from 'constants/actionTypes'

const { Search } = Input;
function useDebounce(text, delay) {
  delay = delay || 500;
  const [debounced, setDebounced] = useState(text);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounced(text);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [text, delay]);

  return debounced;
}
const SaleMainContent = (props)=> {
  const [val, setVal] = useState('');
  const debouncedVal = useDebounce(val);
  useEffect(() => {
    if (debouncedVal) {
      let locationItemsPromise = api.sale.getLocationItemsByQuery(debouncedVal);
      props.getLocationItemsByQuery(locationItemsPromise)
    }
  });
    return (
      <div className="saleMainContent">
        <Search
          placeholder="input search text"
          onSearch={value => console.log(value)}
          onChange={e => setVal(e.target.value)}
          className='searchQueryInput'
        />
        <SaleItemList />
      </div>
    )
}
const mapDispatchToProps = dispatch =>{
  return {
    getLocationItemsByQuery: (payload)=>{
      dispatch({type:GET_LOCATION_ITEMS, payload})
    }
  }
}
export default connect(null,mapDispatchToProps)(SaleMainContent)
