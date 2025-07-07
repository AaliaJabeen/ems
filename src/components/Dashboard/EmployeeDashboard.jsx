import React from 'react'
import Header from '../others/Header'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../TaskList/TaskList'

// const EmployeeDashboard = ({props}) => {
//   console.log(loggedInUserData); // Check if data is available

//   return (
//     <div className='p-10 bg-[#1c1c1c] h-screen'>
        
//         <Header changeUser={props.changeUser} data={props.data}/>
//         <TaskListNumber data={props.data}/>
//         <TaskList data={props.data}/>
//     </div>
//   )
// }

// export default EmployeeDashboard

const EmployeeDashboard = ({ changeUser, data }) => {
  //console.log(data); // This should now print the data if it's being passed correctly

  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
        <Header changeUser={changeUser} data={data} />
        <TaskListNumber data={data} />
        <TaskList data={data} />
    </div>
  );
};

export default EmployeeDashboard;
