import React from 'react';
import 'boxicons';

const obj = [
  {
    name: 'savings',
    color: '#f9c74f',
  },
  {
    name: 'Investment',
    color: '#f9c74f',
  },
  {
    name: 'Expenses',
    color: 'rgb(54,162,235',
  },
];

const List = () => {
  return (
    <div className="flex flex-col py-6 gap-3">
      <h1 className="py-4 font-bold text-xl">History</h1>
      {obj.map((item, index) => {
        return <Transaction key={index} category={item} />;
      })}
    </div>
  );
};

export default List;

function Transaction({ category }) {
  if (!category) return <></>;
  return (
    <div
      className="item flex justify-center bg-gray-50 py-2 rounded-r"
      style={{ borderRight: `8px solid ${category.color ?? '#e5e5e5'}` }}
    >
      <button className="px-3">
        <box-icon
          name="trash"
          size="24px"
          color={`${category.color ?? '#e5e5e5'}`}
        ></box-icon>
      </button>
      <span className="block w-full">{category.name ?? ''}</span>
    </div>
  );
}
