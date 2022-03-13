import Link from 'next/link';
import Image from 'next/image';
import './syllabus.module.css';
import withAuth from "../../../../hoc/withAuth";
import CourseLayout from "../../../../layouts/CourseLayout";
import Syllabus from "../../../../components/Syllabus";

const Component = () => {
    return (
        <div>
            <Syllabus />
        </div>
    )
}
Component.Layout = CourseLayout;
export default withAuth(Component);