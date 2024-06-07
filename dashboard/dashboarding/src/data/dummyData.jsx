import React from 'react';
import avatar from '../assets/avatar.jpg';
import avatar2 from '../assets/avatar2.jpg';
import avatar3 from '../assets/avatar3.png';
import avatar4 from '../assets/avatar4.jpg';

export const tasksData = [
  { task: "Design Landing Page", deadline: "2024-06-15", status: "Completed" },
  { task: "Implement Login Functionality", deadline: "2024-06-20", status: "In Progress" },
  { task: "Database Optimization", deadline: "2024-06-25", status: "Pending" },
  { task: "Fix Bug #1024", deadline: "2024-06-10", status: "Completed" },
  { task: "Write Unit Tests", deadline: "2024-06-30", status: "Pending" },

  { task: "Implement Dark Mode", deadline: "2024-07-15", status: "Pending" },
  { task: "Integrate Payment Gateway", deadline: "2024-07-20", status: "In Progress" },
  { task: "Create Marketing Strategy", deadline: "2024-07-25", status: "Pending" },  
];

export const lineChartData = [
  [
    { x: new Date(2019, 0, 1), y: 21 },
    { x: new Date(2020, 0, 1), y: 24 },
    { x: new Date(2021, 0, 1), y: 36 },
    { x: new Date(2022, 0, 1), y: 38 },
    { x: new Date(2023, 0, 1), y: 54 },
    { x: new Date(2024, 0, 1), y: 70 },
  ],
  [
    { x: new Date(2019, 0, 1), y: 28 },
    { x: new Date(2020, 0, 1), y: 44 },
    { x: new Date(2021, 0, 1), y: 48 },
    { x: new Date(2022, 0, 1), y: 50 },
    { x: new Date(2023, 0, 1), y: 66 },
    { x: new Date(2024, 0, 1), y: 78 },
  ],

  [
    { x: new Date(2019, 0, 1), y: 10 },
    { x: new Date(2020, 0, 1), y: 20 },
    { x: new Date(2021, 0, 1), y: 30 },
    { x: new Date(2022, 0, 1), y: 39 },
    { x: new Date(2023, 0, 1), y: 50 },
    { x: new Date(2024, 0, 1), y: 70 },
  ],
];

export const clients = [
{
  "client_id": 1,
  "client_name": "Acme Corporation",
  "contact_person": "John Doe",
  "email": "john.doe@acme.com",
  "phone": "555-1234",
  "project_name": "Acme CRM System",
  "project_start_date": "2023-01-15",
  "project_end_date": "2023-06-30",
  "status": "Completed",
  "budget": 50000,
  "image": avatar
},
{
  "client_id": 2,
  "client_name": "Globex Inc.",
  "contact_person": "Jane Smith",
  "email": "jane.smith@globex.com",
  "phone": "555-5678",
  "project_name": "Globex E-Commerce Platform",
  "project_start_date": "2023-03-01",
  "project_end_date": "2023-12-31",
  "status": "In Progress",
  "budget": 100000,
  "image": avatar2
},
{
  "client_id": 3,
  "client_name": "Initech",
  "contact_person": "Bob Porter",
  "email": "bob.porter@initech.com",
  "phone": "555-8765",
  "project_name": "Initech Payroll System",
  "project_start_date": "2023-05-15",
  "project_end_date": "2023-11-15",
  "status": "In Progress",
  "budget": 75000,
  "image": avatar3
},
{
  "client_id": 4,
  "client_name": "Umbrella Corp",
  "contact_person": "Alice Johnson",
  "email": "alice.johnson@umbrella.com",
  "phone": "555-4321",
  "project_name": "Umbrella Inventory Management",
  "project_start_date": "2023-02-20",
  "project_end_date": "2023-07-20",
  "status": "Completed",
  "budget": 60000,
  "image": avatar4
},
{
  "client_id": 5,
  "client_name": "Hooli",
  "contact_person": "Richard Hendricks",
  "email": "richard.hendricks@hooli.com",
  "phone": "555-3456",
  "project_name": "Hooli Video Streaming Service",
  "project_start_date": "2023-04-10",
  "project_end_date": "2024-03-31",
  "status": "In Progress",
  "budget": 150000,
  "image": avatar
},
{
  "client_id": 6,
  "client_name": "Stark Industries",
  "contact_person": "Tony Stark",
  "email": "tony.stark@stark.com",
  "phone": "555-6789",
  "project_name": "Iron Man Suit Development",
  "project_start_date": "2023-08-15",
  "project_end_date": "2024-05-31",
  "status": "In Progress",
  "budget": 200000,
  "image": avatar3
},
{
  "client_id": 7,
  "client_name": "Wayne Enterprises",
  "contact_person": "Bruce Wayne",
  "email": "bruce.wayne@waynepr.com",
  "phone": "555-9876",
  "project_name": "Gotham City Crime Reduction Initiative",
  "project_start_date": "2023-09-20",
  "project_end_date": "2024-08-31",
  "status": "Pending",
  "budget": 300000,
  "image": avatar4 
},
{
  "client_id": 8,
  "client_name": "LexCorp",
  "contact_person": "Lex Luthor",
  "email": "lex.luthor@lexcorp.com",
  "phone": "555-5432",
  "project_name": "Metropolis Real Estate Development",
  "project_start_date": "2023-10-10",
  "project_end_date": "2024-12-31",
  "status": "Pending",
  "budget": 250000,
  "image": avatar2
},
{
  "client_id": 9,
  "client_name": "Weyland-Yutani Corporation",
  "contact_person": "Meredith Vickers",
  "email": "meredith.vickers@weyland-yutani.com",
  "phone": "555-1122",
  "project_name": "Alien Colonization Project",
  "project_start_date": "2023-11-05",
  "project_end_date": "2024-09-30",
  "status": "In Progress",
  "budget": 400000,
  "image": avatar4
},
{
  "client_id": 10,
  "client_name": "Tyrell Corporation",
  "contact_person": "Eldon Tyrell",
  "email": "eldon.tyrell@tyrellcorp.com",
  "phone": "555-3344",
  "project_name": "Replicant Development Program",
  "project_start_date": "2023-12-01",
  "project_end_date": "2024-10-31",
  "status": "Pending",
  "budget": 350000,
  "image": avatar2
},
{
  "client_id": 11,
  "client_name": "Spacely Sprockets",
  "contact_person": "Cosmo G. Spacely",
  "email": "cosmo.spacely@spacelysprockets.com",
  "phone": "555-7788",
  "project_name": "Sprocket Production Automation",
  "project_start_date": "2024-01-15",
  "project_end_date": "2024-11-30",
  "status": "In Progress",
  "budget": 280000,
  "image": avatar3
},
{
  "client_id": 12,
  "client_name": "Monsters, Inc.",
  "contact_person": "James P. Sullivan",
  "email": "james.sullivan@monstersinc.com",
  "phone": "555-8899",
  "project_name": "Scare Floor Improvement",
  "project_start_date": "2024-02-10",
  "project_end_date": "2025-01-31",
  "status": "Pending",
  "budget": 320000,
  "image": avatar3
},
{
  "client_id": 13,
  "client_name": "Soylent Corporation",
  "contact_person": "Henry F. Turner",
  "email": "henry.turner@soylentcorp.com",
  "phone": "555-4455",
  "project_name": "Food Production Enhancement",
  "project_start_date": "2024-03-05",
  "project_end_date": "2025-02-28",
  "status": "In Progress",
  "budget": 270000,
  "image": avatar2
},
{
  "client_id": 14,
  "client_name": "Acme Corporation",
  "contact_person": "Wile E. Coyote",
  "email": "wile.coyote@acme.com",
  "phone": "555-5566",
  "project_name": "Road Runner Capture Device",
  "project_start_date": "2024-04-01",
  "project_end_date": "2025-03-31",
  "status": "Pending",
  "budget": 300000,
  "image": avatar4
},
{
  "client_id": 15,
  "client_name": "Oscorp Industries",
  "contact_person": "Norman Osborn",
  "email": "norman.osborn@oscorp.com",
  "phone": "555-6677",
  "project_name": "Goblin Glider Development",
  "project_start_date": "2024-05-15",
  "project_end_date": "2025-04-30",
  "status": "In Progress",
  "budget": 350000,
  "image": avatar2
},
// {
//   "client_id": 16,
//   "client_name": "Strickland Propane",
//   "contact_person": "Hank Hill",
//   "email": "hank.hill@stricklandpropane.com",
//   "phone": "555-7878",
//   "project_name": "Propane Sales Optimization",
//   "project_start_date": "2024-06-10",
//   "project_end_date": "2025-05-31",
//   "status": "Pending",
//   "budget": 280000,
//   "image": avatar2
// },
// {
//   "client_id": 17,
//   "client_name": "Umbrella Corporation",
//   "contact_person": "Albert Wesker",
//   "email": "albert.wesker@umbrellacorp.com",
//   "phone": "555-2222",
//   "project_name": "Bio-Organic Weapons Research",
//   "project_start_date": "2024-07-01",
//   "project_end_date": "2025-06-30",
//   "status": "In Progress",
//   "budget": 400000,
//   "image": avatar2
// },
// {
//   "client_id": 18,
//   "client_name": "Bluth Company",
//   "contact_person": "Michael Bluth",
//   "email": "michael.bluth@bluthcompany.com",
//   "phone": "555-9999",
//   "project_name": "Real Estate Development",
//   "project_start_date": "2024-08-15",
//   "project_end_date": "2025-07-31",
//   "status": "Pending",
//   "budget": 320000,
//   "image": avatar2
// },
// {
//   "client_id": 19,
//   "client_name": "Cyberdyne Systems",
//   "contact_person": "Miles Dyson",
//   "email": "miles.dyson@cyberdyne.com",
//   "phone": "555-6666",
//   "project_name": "Skynet AI Development",
//   "project_start_date": "2024-09-01",
//   "project_end_date": "2025-08-31",
//   "status": "In Progress",
//   "budget": 500000,
//   "image": avatar2
// },
// {
//   "client_id": 20,
//   "client_name": "Spinal Tap",
//   "contact_person": "Nigel Tufnel",
//   "email": "nigel.tufnel@spinaltap.com",
//   "phone": "555-1111",
//   "project_name": "Rockumentary Production",
//   "project_start_date": "2024-10-10",
//   "project_end_date": "2025-09-30",
//   "status": "Pending",
//   "budget": 300000,
//   "image": avatar2
// },
];

export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];

export const modeColor = [
  {
    name: 'light-mode',
    color: '#F7F7F7',
    },
    {
    name: 'dark-mode',
    color: '#333',
  }
]

const dummyData = () => {

  
  return (
    <div>dummyData</div>
  )
}

export default dummyData;

