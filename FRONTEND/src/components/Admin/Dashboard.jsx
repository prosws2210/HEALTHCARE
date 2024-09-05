import React, { useState } from 'react';
import Papa from 'papaparse';
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, ArcElement, Title, Tooltip, Legend);

const Dashboard = () => {
    const [chartData, setChartData] = useState({});
    const [file, setFile] = useState(null);

    // Handle file input change
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    // Parse CSV file
    const handleFileUpload = () => {
        if (!file) return;
        Papa.parse(file, {
        header: true,
        complete: (result) => {
            processCSVData(result.data);
        },
        });
    };

    // Process CSV Data to format for Chart.js
    const processCSVData = (data) => {
        // Prepare arrays for different data
        const diseases = [];
        const countsByDisease = {};
        const ageGroups = { '0-18': 0, '19-35': 0, '36-50': 0, '51+': 0 };
        const genderCounts = { Male: 0, Female: 0, Other: 0 };
        const cities = [];
        const cityCounts = {};

        // Group data by relevant fields
        data.forEach((row) => {
        // Disease count
        const disease = row.Disease;
        if (disease) {
            if (!countsByDisease[disease]) {
            countsByDisease[disease] = 0;
            diseases.push(disease);
            }
            countsByDisease[disease]++;
        }

        // Age group distribution
        const age = parseInt(row['Patient Age']);
        if (age <= 18) ageGroups['0-18']++;
        else if (age <= 35) ageGroups['19-35']++;
        else if (age <= 50) ageGroups['36-50']++;
        else ageGroups['51+']++;

        // Gender distribution
        const gender = row.Gender;
        if (gender) {
            if (!genderCounts[gender]) {
            genderCounts[gender] = 0;
            }
            genderCounts[gender]++;
        }

        // City count
        const city = row.City;
        if (city) {
            if (!cityCounts[city]) {
            cityCounts[city] = 0;
            cities.push(city);
            }
            cityCounts[city]++;
        }
        });

        // Prepare chart data
        setChartData({
        diseaseData: {
            labels: diseases,
            datasets: [
            {
                label: 'Number of Patients by Disease',
                data: diseases.map((disease) => countsByDisease[disease]),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
            ],
        },
        ageGroupData: {
            labels: Object.keys(ageGroups),
            datasets: [
            {
                label: 'Number of Patients by Age Group',
                data: Object.values(ageGroups),
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
            ],
        },
        genderData: {
            labels: Object.keys(genderCounts),
            datasets: [
            {
                label: 'Number of Patients by Gender',
                data: Object.values(genderCounts),
                backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
                borderWidth: 1,
            },
            ],
        },
        cityData: {
            labels: cities,
            datasets: [
            {
                label: 'Number of Patients by City',
                data: cities.map((city) => cityCounts[city]),
                backgroundColor: 'rgba(153, 102, 255, 0.6)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1,
            },
            ],
        },
        });
    };

    
    return (
        <div className="flex flex-col items-center px-20 py-12">
        <h1 className="text-2xl font-bold mb-8">Healthcare Data Dashboard</h1>
    
        {/* File input and Upload Button */}
        <input type="file" accept=".csv" onChange={handleFileChange} className="mb-4" />
        <button onClick={handleFileUpload} className="bg-blue-500 text-white px-4 py-2 rounded">
            Upload and Process CSV
        </button>
    
        {/* Graphs Grid */}
        <div className="w-full mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Graph 1: Bar chart for disease distribution */}
            <div>
            {chartData.diseaseData && (
                <Bar
                data={chartData.diseaseData}
                options={{
                    responsive: true,
                    plugins: {
                    legend: { position: 'top' },
                    title: { display: true, text: 'Number of Patients by Disease' },
                    },
                }}
                />
            )}
            </div>
    
            {/* Graph 2: Pie chart for gender distribution */}
            <div>
            {chartData.genderData && (
                <Pie
                data={chartData.genderData}
                options={{
                    responsive: true,
                    plugins: {
                    legend: { position: 'top' },
                    title: { display: true, text: 'Gender Distribution' },
                    },
                }}
                />
            )}
            </div>
    
            {/* Graph 3: Bar chart for age group distribution */}
            <div>
            {chartData.ageGroupData && (
                <Bar
                data={chartData.ageGroupData}
                options={{
                    responsive: true,
                    plugins: {
                    legend: { position: 'top' },
                    title: { display: true, text: 'Age Group Distribution' },
                    },
                }}
                />
            )}
            </div>
    
            {/* Graph 4: Doughnut chart for city distribution */}
            <div>
            {chartData.cityData && (
                <Doughnut
                data={chartData.cityData}
                options={{
                    responsive: true,
                    plugins: {
                    legend: { position: 'top' },
                    title: { display: true, text: 'Number of Patients by City' },
                    },
                }}
                />
            )}
            </div>
    
            {/* Add more graphs */}
            {/* Example Graph 5: Line chart for patient admissions over time */}
            <div>
            {chartData.admissionData && (
                <Line
                data={chartData.admissionData}
                options={{
                    responsive: true,
                    plugins: {
                    legend: { position: 'top' },
                    title: { display: true, text: 'Patient Admissions Over Time' },
                    },
                }}
                />
            )}
            </div>
    
            {/* Example Graph 6: Doughnut chart for discharge rates */}
            <div>
            {chartData.dischargeData && (
                <Doughnut
                data={chartData.dischargeData}
                options={{
                    responsive: true,
                    plugins: {
                    legend: { position: 'top' },
                    title: { display: true, text: 'Discharge Rate' },
                    },
                }}
                />
            )}
            </div>
    
            {/* Example Graph 7: Pie chart for disease severity */}
            <div>
            {chartData.severityData && (
                <Pie
                data={chartData.severityData}
                options={{
                    responsive: true,
                    plugins: {
                    legend: { position: 'top' },
                    title: { display: true, text: 'Disease Severity Distribution' },
                    },
                }}
                />
            )}
            </div>
    
            {/* Example Graph 8: Line chart for hospital bed usage */}
            <div>
            {chartData.bedUsageData && (
                <Line
                data={chartData.bedUsageData}
                options={{
                    responsive: true,
                    plugins: {
                    legend: { position: 'top' },
                    title: { display: true, text: 'Hospital Bed Usage Over Time' },
                    },
                }}
                />
            )}
            </div>
    
            {/* Example Graph 9: Bar chart for patient length of stay */}
            <div>
            {chartData.lengthOfStayData && (
                <Bar
                data={chartData.lengthOfStayData}
                options={{
                    responsive: true,
                    plugins: {
                    legend: { position: 'top' },
                    title: { display: true, text: 'Average Length of Stay by Disease' },
                    },
                }}
                />
            )}
            </div>
    
            {/* Example Graph 10: Pie chart for treatment type distribution */}
            <div>
            {chartData.treatmentTypeData && (
                <Pie
                data={chartData.treatmentTypeData}
                options={{
                    responsive: true,
                    plugins: {
                    legend: { position: 'top' },
                    title: { display: true, text: 'Treatment Type Distribution' },
                    },
                }}
                />
            )}
            </div>
        </div>
        </div>
    );
  
};

export default Dashboard;
