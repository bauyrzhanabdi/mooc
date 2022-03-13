// import './sidebar.css';
import Link from "next/link";
import {useRouter} from "next/router";
const InstructorSideBar = () => {
    const router = useRouter();
    const path = router.basePath + '/instructor/';
 return (
     <aside className={''}>
         <div className="sidebar left ml-1">
             <div className="user-panel">
                 <div className="pull-left image">
                     <img src="http://via.placeholder.com/160x160" className="rounded-circle" alt="User Image"/>
                 </div>
                 <div className="pull-left info">
                     <p>Nursultan Nazarbayev</p>
                     <Link href={path + '/profile'}><a><i className="fa fa-circle text-success"></i> Online</a></Link>
                 </div>
             </div>
             <ul className="list-sidebar bg-defoult">
                 <li><Link href={path + '/courses'}><a><i className="fa fa-pie-chart"></i> <span className="nav-label">Dashboard</span></a></Link></li>
                 <li><Link href={path + "/profile"}><a><i className="fa fa-files-o"></i> <span className="nav-label">My profile</span></a></Link>
                 </li>
                 <li><Link href={path + "/courses"}><a><i className="fa fa-files-o"></i> <span className="nav-label">My courses</span></a></Link>
                 </li>
                 <li><Link href={path + "/qa"}><a><i className="fa fa-files-o"></i> <span className="nav-label">Q & A</span></a></Link>
                 </li>
                 <li><Link href={path + ""}><a><i className="fa fa-files-o"></i> <span className="nav-label">Logout</span></a></Link>
                 </li>
             </ul>
         </div>
     </aside>
 )
}
export default InstructorSideBar;