/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { useEffect, useState } from 'react';
import { calculateGamma, calculateValues } from '../utils/formula';
import wineDataSet from '../data/wineDataSet';
import MainTable from './MainTable';

function GammaTable() {
    
    const uniqueAlcohol = [...new Set(wineDataSet.map((item) => item.Alcohol))]; // Extract unique "Alcohol" values and store them in uniqueAlcohol array 
    const [data, setData] = useState<any>([]);
    
    useEffect(() => {
        // Map over uniqueAlcohol array to process data for each unique "Alcohol" value
        const filterData = uniqueAlcohol.map((alcohol) => {
            const arrData = wineDataSet
                .filter((item) => item.Alcohol === alcohol) // Filter data by matching "Alcohol" value and extract the "Ash," "Hue," and "Magnesium" values from those data points.
                .map((item) => {
                    return {
                        Ash: parseFloat(item.Ash),
                        Hue: parseFloat(item.Hue),
                        Magnesium: parseFloat(item.Magnesium),
                    }
                }
            );

            const gammaList = calculateGamma(arrData); // Calculate values based on the gamma values and return the result

            return calculateValues(gammaList);     // Store the calculated data in the data state

        });
        setData(filterData);
    }, []);
    return (
        // Render the MainTable component, passing unique "Alcohol" values and processed data
        <MainTable alcoholClass={uniqueAlcohol} data={data} tableName="Gamma" />
    )
}

export default GammaTable