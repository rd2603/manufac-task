// Function to calculate the mean, mode, median of an array of numbers
export function calculateValues(data: number[]) {
    // Calculate the sum of all values in the data array
    const sum = data.reduce((total: any, currentValue: any) => total + currentValue, 0);
    // Calculate the mean (average) by dividing the sum by the number of data points
    const mean = sum / data.length;

    // Sort the data array in ascending order
    data.sort((a: any, b: any) => a - b);
    // Calculate the middle value of the sorted data
    const middle = Math.floor(data.length / 2);
    let median;
    if (data.length % 2 === 0) {
        // If the data has an even number of values, take the average of the two middle values
        median = (data[middle - 1] + data[middle]) / 2;
    } else {
        // If the data has an odd number of values, the median is the middle value
        median = data[middle];
    }

    // Calculate the mode (most frequently occurring value) in the data
    const counts: { [key: number]: number } = {};
    data.forEach((value) => {
        counts[value] = (counts[value] || 0) + 1;
    });
    let mode = -1;
    let maxCount = 0;
    for (const value in counts) {
        if (counts[value] > maxCount) {
            maxCount = counts[value];
            mode = parseFloat(value);
        }
    }

    // Return the calculated mean, median, and mode values, each rounded to 3 decimal places
    return {
        mean: mean.toFixed(3),
        median: median.toFixed(3),
        mode: mode.toFixed(3),
    };
}

export function calculateGamma(data: {
    Ash: number;
    Hue: number;
    Magnesium: number;
}[]): number[] {
    return data.map((item) => (item.Ash * item.Hue) / item.Magnesium);
}