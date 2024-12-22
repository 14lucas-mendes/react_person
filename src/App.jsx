import React from 'react';
import './App.scss';
import { Person } from './components/Person/Person';

export const misha = {
  name: 'Misha',
  age: 37,
  sex: 'm',
  isMarried: true,
  partnerName: 'Natasha',
};

export const olya = {
  name: 'Olya',
  sex: 'f',
  isMarried: true,
  partnerName: 'Maksym',
};

export const alex = {
  name: 'Alex',
  age: 25,
  sex: 'm',
  isMarried: false,
};

export const App = () => (
  <>
    <Person
      person={{
        name: 'My name is Misha',
        age: 'I am 37',
        partner: 'Natasha is my wife',
      }}
    />
    <Person
      person={{ name: 'My name is Olya', partner: 'Maksym is my husband' }}
    />
    <Person
      person={{
        name: 'My name is Alex',
        age: 'I am 25',
        partner: 'I am not married',
      }}
    />
  </>
);
