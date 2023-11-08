/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { useEffect, useState } from 'react';
import { calculateValues } from '../utils/formula';
import wineDataSet from '../data/wineDataSet';
import MainTable from './MainTable';

function FlavanoidsTable() {
    
  const uniqueAlcohol = [...new Set(wineDataSet.map((item) => item.Alcohol))];// Extract unique "Alcohol" values and store them in uniqueAlcohol array 
  
  const [data, setData] = useState<any>([]);
  
  useEffect(() => {
    // Map over uniqueAlcohol array to process data for each unique "Alcohol" value
      const filterData = uniqueAlcohol.map((alcohol) => {
        const arrData = wineDataSet
          .filter((item) => item.Alcohol === alcohol) // Filter data by matching "Alcohol" value
          .map((item) => Number(item.Flavanoids)); // Extract and convert "Flavanoids" to a number

          return calculateValues(arrData);   // Calculate values based on the filtered "Flavanoids" data and return the result 
        }
      );
      setData(filterData); // Store the calculated data in the data state
    }, []);

  return (
    // Render the MainTable component, passing unique "Alcohol" values and processed data
      <MainTable alcoholClass={uniqueAlcohol} data={data} tableName="Flavanoids" />
  )
}

export default FlavanoidsTable