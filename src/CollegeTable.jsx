/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import './app.css';

const CollegeTable = ({ colleges }) => {
  const [visibleColleges, setVisibleColleges] = useState(colleges.slice(0, 10));
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState(null);

  const fetchMoreData = () => {
    if (visibleColleges.length >= colleges.length) return;
    setTimeout(() => {
      setVisibleColleges(colleges.slice(0, visibleColleges.length + 10));
    }, 1500);
  };

  const getSortedColleges = () => {
    let sortedColleges = [...colleges];
    if (sortConfig !== null) {
      sortedColleges.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortedColleges;
  };

  const sortedColleges = getSortedColleges()
    .filter(college => college.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const requestSort = key => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="table-container">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search by college name"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <div className="button-container">
          <button onClick={() => requestSort('rating')}>Sort by Rating</button>
          <button onClick={() => requestSort('fees')}>Sort by Fees</button>
          <button onClick={() => requestSort('review')}>Sort by User Review</button>
        </div>
      </div>

      <InfiniteScroll
        dataLength={visibleColleges.length}
        next={fetchMoreData}
        hasMore={visibleColleges.length < sortedColleges.length}
        loader={<h4>Loading...</h4>}
        endMessage={<p>No more colleges to show</p>}
      >
        <table>
          <thead>
            <tr>
              <th onClick={() => requestSort('name')}>College Name</th>
              <th onClick={() => requestSort('rating')}>Rating</th>
              <th onClick={() => requestSort('fees')}>Fees</th>
              <th onClick={() => requestSort('review')}>User Review</th>
              <th>Featured</th>
            </tr>
          </thead>
          <tbody>
            {visibleColleges.map((college, index) => (
              <tr key={index}>
                <td>{college.name}</td>
                <td>{college.rating}</td>
                <td>{college.fees}</td>
                <td>{college.review}</td>
                <td className="featured">{college.featured ? 'Featured' : ''}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </InfiniteScroll>
    </div>
  );
};

export default CollegeTable;
