// @flow
import React from 'react';
import { connect } from 'react-redux';
import Post from '../component/Post';
import loc from 'infra/service/location';
import Loading from 'infra/component/Loading';
import Pagination from 'infra/component/Pagination';

const mapStateToProps = state => ({
  loading: state.group.loading,
  feeds: state.group.feeds,
});

const GroupFeed = props => {
  const { loading, feeds } = props;

  if (!loading && feeds.length < 1) loc.push('/welcome');

  return !loading ? (
    <div className="row">
      <div className="col-12" style={{ marginRight: '-45px' }}>
        <h1 className="h3">Group Feed</h1>
        <Pagination list={feeds} ChildNode={Post} />
      </div>
    </div>
  ) : <Loading />;
};

export default connect(mapStateToProps)(GroupFeed);
