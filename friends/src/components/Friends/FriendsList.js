import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import { getFriends } from '../../actions';

import FriendCard from './FriendCard';

const FriendsList = props => {
  //useEffect(() => {
   // props.getFriends();
  // }, [props.friends]);

  console.log(props)

  return (
    <div className="friends-list-container">
      <h1 className="friends-list-title">Friends List</h1>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {/*<button onClick={props.getFriends()}>Get Friends</button>*/}
          {props.getFriends()}
          {props.getFriendIsLoading && props.friends.map(friend => {
            return <FriendCard key={friend.id} friend={friend} />;
          })}
        </tbody>
      </Table>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    friends: state.friends,
    getFriendIsLoading: state.getFriendIsLoading
  };
};

export default connect(
  mapStateToProps,
  { getFriends },
)(FriendsList);
