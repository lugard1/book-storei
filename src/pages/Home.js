import React from 'react';

import AddNewBook from '../components/Books/AddBook';
import BookList from '../components/Books/BookList';
import Card from '../components/UI/Card';

const Home = () => (
  <section>
    <Card>
      <BookList />
      <AddNewBook />
    </Card>
  </section>
);

export default Home;
