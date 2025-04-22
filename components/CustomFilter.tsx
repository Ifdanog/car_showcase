import React from 'react';

type CustomFilterProps = {
  title: string;
};

const CustomFilter = ({ title }: CustomFilterProps) => {
  return (
    <div>
      <label className="text-sm font-medium text-gray-700">{title}</label>
      {/* You can add a dropdown or filter UI here */}
    </div>
  );
};

export default CustomFilter;
