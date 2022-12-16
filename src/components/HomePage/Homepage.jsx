import React, { useEffect, useState } from 'react';
import { Avatar, Divider, List, Skeleton } from 'antd'
import InfiniteScroll from 'react-infinite-scroll-component';
import ListItem from './../ListItem/ListItem';
import {ReactComponent as NoDataSVG} from './NoData.svg';
import { HomepageWrapper } from './Homepage.styles';


const Homepage = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    fetch('https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo')
      .then((res) => res.json())
      .then((body) => {
        setData([...data, ...body.results]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    loadMoreData();
  }, []);

  const refreshContacts = () => {setLoading(prev=> !prev)}

  return (

    <HomepageWrapper>
      {localStorage.getItem("contactList") && JSON.parse(localStorage.getItem("contactList")).length>0 ? JSON.parse(localStorage.getItem("contactList")).sort((a, b) => a.name.localeCompare(b.name)).map(item=><ListItem refreshContacts={refreshContacts} key={item.id} contactData = {item} />) :  <><span><NoDataSVG /></span><div className='no-contacts-label'>No Contacts Saved</div></>}
    </HomepageWrapper>
    

    // <div
    //   id="scrollableDiv"
    //   style={{
    //     height: 400,
    //     overflow: 'auto',
    //     padding: '0 16px',
    //     border: '1px solid rgba(140, 140, 140, 0.35)',
    //   }}
    // >
    //   <InfiniteScroll
    //     dataLength={data.length}
    //     next={loadMoreData}
    //     hasMore={data.length < 50}
    //     loader={
    //       <Skeleton
    //         avatar
    //         paragraph={{
    //           rows: 1,
    //         }}
    //         active
    //       />
    //     }
    //     endMessage={<Divider plain>Last Record Reached</Divider>}
    //     scrollableTarget="scrollableDiv"
    //   >
    //     <List
    //       dataSource={data}
    //       renderItem={(item) => (
    //         <List.Item key={item.email}>
    //           <List.Item.Meta
    //             avatar={<Avatar src={item.picture.large} />}
    //             title={<a href="https://ant.design">{item.name.last}</a>}
    //             description={item.email}
    //           />
    //           <div>Content</div>
    //         </List.Item>
    //       )}
    //     />
    //   </InfiniteScroll>
    // </div>

  );
}

export default Homepage

