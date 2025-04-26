import React, { useState } from 'react';
import Caret from './Icon/Caret';
 // Importing the Caret component

function AdmissionUpdate() {
    const [sort, setSort] = useState({ keyToSort: 'DEPARTMENT', direction: 'asc' });

    const header = [
        { id: 1, KEY: 'DEPARTMENT', LABEL: 'Department' },
        { id: 2, KEY: 'BATCH_2018', LABEL: '2018' },
        { id: 3, KEY: 'BATCH_2019', LABEL: '2019' },
        { id: 4, KEY: 'BATCH_2020', LABEL: '2020' },
        { id: 5, KEY: 'BATCH_2021', LABEL: '2021' },
        { id: 6, KEY: 'BATCH_2022', LABEL: '2022' },
    ];

    const data = [
        { DEPARTMENT: 'CSE (OIC Partial)', BATCH_2018: 326, BATCH_2019: 321, BATCH_2020: 73, BATCH_2021: 284, BATCH_2022: 240 },
        { DEPARTMENT: 'CSE (Self Financed)', BATCH_2018: 758, BATCH_2019: 1217, BATCH_2020: 595, BATCH_2021: 1521, BATCH_2022: 1097 },
        { DEPARTMENT: 'EEE (OIC Partial)', BATCH_2018: 385, BATCH_2019: 515, BATCH_2020: 195, BATCH_2021: 574, BATCH_2022: 461 },
        { DEPARTMENT: 'EEE (Self Financed)', BATCH_2018: 1102, BATCH_2019: 1454, BATCH_2020: 933, BATCH_2021: 1935, BATCH_2022: 1423 },
        { DEPARTMENT: 'ME (OIC Partial)', BATCH_2018: 466, BATCH_2019: 598, BATCH_2020: 237, BATCH_2021: 787, BATCH_2022: 604 },
        { DEPARTMENT: 'ME (Self Financed)', BATCH_2018: 1601, BATCH_2019: 1456, BATCH_2020: 1023, BATCH_2021: 2384, BATCH_2022: 1772 },
        { DEPARTMENT: 'SWE (Self Financed)', BATCH_2018: 1320, BATCH_2019: 1428, BATCH_2020: 1199, BATCH_2021: 1940, BATCH_2022: 1636 },
        { DEPARTMENT: 'CEE (Self Financed)', BATCH_2018: 2100, BATCH_2019: 1881, BATCH_2020: 1700, BATCH_2021: 2717, BATCH_2022: 2115 },
        { DEPARTMENT: 'IPE (Self Financed)', BATCH_2019: 2100, BATCH_2020: 1973, BATCH_2021: 2945, BATCH_2022: 2347 },
        { DEPARTMENT: 'BTM (Self Financed)', BATCH_2018: 2498, BATCH_2019: 2518, BATCH_2020: 2502, BATCH_2021: 3139, BATCH_2022: 2783 }
    ];

    // Sorting logic
    function handleHeaderClick(header) {
        setSort({
            keyToSort: header.KEY,
            direction: header.KEY === sort.keyToSort ? (sort.direction === 'asc' ? 'desc' : 'asc') : 'asc'
        });
    }

    // Sort the data based on the current sorting criteria
    const sortedData = [...data].sort((a, b) => {
        const compareA = a[sort.keyToSort];
        const compareB = b[sort.keyToSort];
        if (compareA < compareB) return sort.direction === 'asc' ? -1 : 1;
        if (compareA > compareB) return sort.direction === 'asc' ? 1 : -1;
        return 0;
    });

    return (
        <div className="container mx-auto px-8 py-8 mt-20">
            <table className="w-4/5 table-auto bg-white shadow-lg mx-auto">
                {/* Caption for the table */}
                <caption className="caption-top text-xl font-semibold my-4">
                    Last merit to be admitted in each department by year
                </caption>
                <thead>
                    <tr className="bg-green-500 text-white">
                        {header.map((col, index) => (
                            <th key={index} className="px-6 py-4 text-left font-semibold uppercase tracking-wider cursor-pointer" onClick={() => handleHeaderClick(col)}>
                                {col.LABEL}
                                <Caret direction={sort.keyToSort === col.KEY ? sort.direction : 'asc'} />
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map((row, index) => (
                        <tr key={index} className={`text-gray-700 ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                            {header.map((col, colIndex) => (
                                <td key={colIndex} className="px-6 py-4 border-t">
                                    {row[col.KEY] || 'N/A'}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="mt-8 flex justify-center space-x-4">
                <a 
                    href="https://www.xe.com/currencyconverter/convert/?Amount=1&From=USD&To=BDT" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
                >
                    Check Current Dollar Rate
                </a>
                <a 
                    href="https://admission.iutoic-dhaka.edu" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
                >
                    Check IUT Admission Portal
                </a>
            </div>
        </div>

        
    );
}

export default AdmissionUpdate;
