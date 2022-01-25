import React, {useState} from 'react'
import { Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

import styled from 'styled-components'
// import { makeStyles } from '@material-ui/styles'

const StyleMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  input {
     height: 44px;
     border: 1px solid #DAD8CE;
     border-radius: 5px;
     width: 50%;
  }
`
function SearchInput (props) {
  const [keyword, setKeyword] = useState()
  const { searchAction } = props
  const searchOnChange = (e) => {
    const value  = e.target.value
    console.log(value)
    setKeyword(value)
  }
  // 富文本
  return (
    <StyleMain>
      <input placeholder='Search for new products in 961K stores' onChange={searchOnChange}/>
      <Button  onClick={() => {
        // 将输入框中的内容传回去
        searchAction && searchAction(keyword)
      }} variant=""><SearchIcon /></Button>
    </StyleMain>
  );
}

export default SearchInput;
