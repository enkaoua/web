import React from 'react'
import './Categories.css'
import SdStorageIcon from '@mui/icons-material/SdStorage';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';

const Categories = () => {

    const categories = [
        {id: 1, name: 'Electronics', icon: <SdStorageIcon />},
        {id: 2, name: 'Clothing', icon: <CheckroomIcon />},
        {id: 3, name: 'Books', icon: <ImportContactsIcon />},
    ]

    
    const renderCategories = () => {
        return categories.map(category => (
            <div className='category-item' key={category.id}>
                <div>{category.name}</div>
                <div>{category.icon}</div>
            </div>
        ));
    };

  return (
    <div>
        <div className='categories-container'>
        {renderCategories()}
        </div>
    </div>
  )
}


export default Categories