import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const employees = [
    {
        "id": 1,
        "firstName": "Aarav",
        "email": "e@e.com",
        "password": "123",
        "tasks": [
            {
                "title": "Prepare Monthly Report",
                "description": "Compile sales data for the past month.",
                "date": "2025-03-20",
                "category": "Reporting",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Client Meeting",
                "description": "Discuss project timelines with clients.",
                "date": "2025-03-22",
                "category": "Meetings",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            }
        ],
        "taskNumber": {
            "active": 2,
            "newTask": 1,
            "completed": 0,
            "failed": 0
        }
    },
    {
        "id": 2,
        "firstName": "Ishaan",
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Software Update",
                "description": "Install security patches on all systems.",
                "date": "2025-03-18",
                "category": "IT",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Training Session",
                "description": "Conduct employee cybersecurity training.",
                "date": "2025-03-25",
                "category": "Training",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Database Maintenance",
                "description": "Perform routine database cleanup.",
                "date": "2025-03-29",
                "category": "Maintenance",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ],
        "taskNumber": {
            "active": 2,
            "newTask": 2,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 3,
        "firstName": "Neha",
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Product Demo",
                "description": "Showcase new features to stakeholders.",
                "date": "2025-03-21",
                "category": "Sales",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ],
        "taskNumber": {
            "active": 0,
            "newTask": 0,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 4,
        "firstName": "Riya",
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Onboard New Employees",
                "description": "Conduct orientation for new team members.",
                "date": "2025-03-15",
                "category": "HR",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Inventory Check",
                "description": "Ensure all office supplies are stocked.",
                "date": "2025-03-30",
                "category": "Inventory",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ],
        "taskNumber": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 5,
        "firstName": "Kavya",
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Prepare Presentation",
                "description": "Design slides for the upcoming conference.",
                "date": "2025-03-17",
                "category": "Marketing",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": true
            }
        ],
        "taskNumber": {
            "active": 0,
            "newTask": 1,
            "completed": 0,
            "failed": 1
        }
    }
];
const AuthProvider = ({children}) => {
  // localStorage.clear()
    const [userData, setuserData] = useState(employees)
    useEffect(() => {
      setLocalStorage(userData)  
      // const {employees} = getLocalStorage()
      // setuserData(employees)
      console.log("masood have been called by me");
    }, [userData])
    
  return (
    <div>
        <AuthContext.Provider value={[userData,setuserData]}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider