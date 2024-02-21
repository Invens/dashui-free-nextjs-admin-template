import {
	Briefcase,
    ListTask,
    People,
    Bullseye
} from 'react-bootstrap-icons';

export const ProjectsStats = [
    {
       id:1,
       title : "Products",
       value : 18,
       icon: <Briefcase size={18}/>,
       statInfo: '' 
    },
    {
        id:2,
        title : "Active Treks",
        value : 12,
        icon: <ListTask size={18}/>,
        statInfo: '' 
     },
     {
        id:3,
        title : "Upcomming Trek",
        value : 2,
        icon: <People size={18}/>,
        statInfo: ' ' 
     },
     {
        id:4,
        title : "Completed",
        value : '1200+',
        icon: <Bullseye size={18}/>,
        statInfo: '' 
     }
];
export default ProjectsStats;
