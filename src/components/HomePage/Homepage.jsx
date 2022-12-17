import React, { useState } from 'react';
import ListItem from './../ListItem/ListItem';
import {ReactComponent as NoDataSVG} from './NoData.svg';
import { HomepageWrapper } from './Homepage.styles';


const Homepage = () => {
  const [loading, setLoading] = useState(false);

  const refreshContacts = () => {setLoading(prev=> !prev)}

  return (

    <HomepageWrapper>
      {localStorage.getItem("contactList") && JSON.parse(localStorage.getItem("contactList")).length>0 ? JSON.parse(localStorage.getItem("contactList")).sort((a, b) => a.name.localeCompare(b.name)).map(item=><ListItem refreshContacts={refreshContacts} key={item.id} contactData = {item} />) :  <><span><NoDataSVG /></span><div className='no-contacts-label'>No Contacts Saved</div></>}
    </HomepageWrapper>
    
  );
}

export default Homepage

