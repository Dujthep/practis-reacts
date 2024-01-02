import React from 'react';

type OptionA = {
  id: number;
  name: string;
  description: string;
};

type OptionB = {
  id: number;
  no: number;
  type: string;
};

type OptionC = OptionA & OptionB;
type OptionD = OptionA | OptionB;

type Person = {
  name: string;
  tel: string;
};

type Employee = Person & {
  id: number;
};

interface User {
  name: string;
  tel: string;
}

interface User {
  id: number;
}

interface Animal {
  type: string;
}

interface Cat extends Animal {
  Meow(): void;
}

interface Dog extends Animal {
  Bark(): void;
}

type ResponseStatus<T> = (
  | { status: 'success'; data: T }
  | { status: 'fail'; error: string }
) & {
  statusCode: string;
};

const display = (person: Person | Employee) => {
  if ('id' in person) {
    console.log(person.id);
  } else {
    console.log(person.tel);
  }

  if (isEmp(person)) {
    return (
      <>
        Employee Name: {person.name}, Id: {person.id}
      </>
    );
  } else {
    return (
      <>
        Person Name: {person.name}, Tel: {person.tel}{' '}
      </>
    );
  }
};

function isCat(animal: Animal): animal is Cat {
  return animal.type === 'CAT';
}

const animalAction = (animal: Animal) => {
  if (isCat(animal)) {
    (animal as Cat).Meow();
    // animal.Meow();
  } else {
    (animal as Dog).Bark();
  }

  switch (animal.type) {
    case 'CAT': {
      (animal as Cat).Meow();
      break;
    }
    case 'DOG': {
      (animal as Dog).Bark();
      break;
    }
  }
};

export const Dashboard: React.FC = () => {
  const optionC: OptionC = {
    id: 0,
    name: 'n',
    description: 'd',
    no: 1,
    type: 't',
  };

  const optionD1: OptionD = {
    id: 0,
    name: 'n',
    description: 'd',
  };

  const optionD2: OptionD = {
    id: 0,
    no: 0,
    type: 't',
    // name: 'n',
    // description: 'd'
  };

  const tmp: ResponseStatus<string>[] = [
    { status: 'success', data: 'test', statusCode: 'code' },
    { status: 'fail', error: 'test error', statusCode: 'code' },
  ];

  const p: Person = { name: 'A', tel: '12345' };
  const e: Employee = { name: 'A', tel: '1234', id: 1 };
  const u: User = { name: 'C', tel: '1234', id: 5 };

  return (
    <>
      {display(p)}
      {display(e)}
    </>
  );
};

const isEmp = (person: Person | Employee): person is Employee => 'id' in person;
