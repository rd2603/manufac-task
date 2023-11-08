/* eslint-disable @typescript-eslint/no-unused-vars */
// src/components/StatisticsTable.tsx
import React from "react";
import './style.css'

interface props {
  data: any[];
  tableName: string;
  alcoholClass: any;
}

const MainTable = ({ data, tableName, alcoholClass} : props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Measure</th>
          {alcoholClass.map((item: any) => (
            <th key={item}>Class {item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{tableName} Mean</td>
          {Object.keys(data).map((item: any) => (
            <td key={item}>{data[item]?.mean}</td>
          ))}
        </tr>
        <tr>
          <td>{tableName} Median</td>
          {Object.keys(data).map((item: any) => (
            <td key={item}>{data[item]?.median}</td>
          ))}
        </tr>
        <tr>
          <td>{tableName} Mode</td>
          {Object.keys(data).map((item: any) => (
            <td key={item}>{data[item]?.mode}</td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default MainTable;
