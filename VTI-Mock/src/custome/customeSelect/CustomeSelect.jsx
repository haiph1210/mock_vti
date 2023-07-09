import React from 'react'
import Select from 'react-select'

const CustomeSelect = ({data,options,value }) => (
    <> 
    <label>{data}</label>
        <Select options={options} value={value} />
    </>
)

export default CustomeSelect;