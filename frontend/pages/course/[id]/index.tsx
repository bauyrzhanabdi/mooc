import {useEffect} from "react";
import {useRouter} from "next/router";
import styles from '../course.module.scss';
import * as React from "react";
import Link from "next/link";
import Image from "../../../components/Image";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {TreeItem, TreeView} from "@material-ui/lab";
import SpaceBlock from "../../../components/SpaceBlock";
import CourseLayout from "../../../layouts/CourseLayout";
import withAuth from "../../../hoc/withAuth";
// profile page
const Id = () => {
    const router = useRouter();
    const {id} = router.query;
    return (
        <>
            <div className={''}>
                <div className={styles.banner}>
                    <div className={styles.nehuinya}>
                        <div className={styles.dflex}>
                            <div className={styles.content}>
                                <section className={styles.course__head}>
                                    <div className={styles.dflex}>
                                        <div>
                                            <h1 className={styles.course__header}>CSCI 151. Intro</h1>
                                            <p className={styles.course__summary}>Description</p>
                                        </div>
                                        <aside className={styles.aside__head}>
                                            <div className={styles.review_summary}>

                                                <div>
                                                    Stars
                                                </div>
                                                <div>
                                                    Viewers
                                                </div>
                                                <div>
                                                    Reviews
                                                </div>
                                            </div>
                                        </aside>
                                    </div>
                                </section>
                                <section className={styles.course__main}>
                                    <div className={styles.page_fragment}>
                                        <article className={styles.course__main_article}>
                                            <div className={styles.course__author_list}>
                                                <span className={styles.user_avatar}>
                                                    <Image src={'/assets/human.jpg'} wh={20}/>
                                                    &nbsp;&nbsp;
                                                    <Link href={'/'}>
                                                        <span className="user-avatar__name">  Jurn Park</span>
                                                    </Link>
                                                </span>
                                            </div>
                                            <section className={styles.course__content_block}>
                                                <h2>About this course</h2>
                                                <p>
                                                    Welcome to interactive CSCI 151
                                                </p>
                                                <p>&nbsp;</p>
                                                <p>&nbsp;</p>
                                            </section>
                                            {/* Instructor info */}
                                            <section className={styles.course__content_block}>
                                                <h2>Meet the Instructors</h2>
                                                <div className={styles.about__instructor}>
                                                    <div className={styles.widget__avatar}>
                                                        <Image src={'/assets/human.jpg'} wh={82} borderRadius={6}/>
                                                    </div>
                                                    <div className={styles.widget__content}>
                                                        <p className={styles.profName}>
                                                            Adalbert Gerald Soosai Raj
                                                        </p>
                                                        <p className={styles.school}>
                                                            Assistant Teaching Professor, Computer Science and
                                                            Engineering, University of California, San Diego.
                                                        </p>
                                                        <p className={styles.description}>
                                                            I study effective, equitable, and inclusive ways to teach
                                                            computing to a diverse set of learners. Specifically, I
                                                            focus on understanding the barriers that non-native English
                                                            speakers face while learning programming, reducing these
                                                            barriers by designing
                                                        </p>
                                                    </div>
                                                </div>
                                            </section>
                                            {/* Content */}
                                            <section className={styles.course__content_block}>
                                                <h2 id="toc">Course content</h2>
                                                <div className={styles.course_toc}>
                                                    <div className={styles.toc_section}>
                                                        <div>
                                                            <TreeView
                                                                defaultCollapseIcon={<ExpandMoreIcon />}
                                                                defaultExpandIcon={<ChevronRightIcon />}>
                                                                <TreeItem className={styles.toc_section_title}
                                                                          nodeId={'10'}
                                                                          label={'Python: Expressions and Functions'}>
                                                                    {[1,2,3,4,5].map((el, idx) => (
                                                                        <TreeItem
                                                                            nodeId={idx + ''}
                                                                            label={idx + 1 + '.' + 'Lesson'}>
                                                                        </TreeItem>
                                                                    ))}
                                                                </TreeItem>
                                                                <SpaceBlock height={'25px'}/>
                                                                <TreeItem className={styles.toc_section_title}
                                                                          nodeId={'11'}
                                                                          label={'Booleans, If, Elses'}>
                                                                    {[1,2,3,4,5].map((el, idx) => (
                                                                        <TreeItem
                                                                            nodeId={idx + ''}
                                                                            label={idx + 1 + '.' + 'Lesson'}>
                                                                        </TreeItem>
                                                                    ))}
                                                                </TreeItem>
                                                                <SpaceBlock height={'25px'}/>
                                                                <TreeItem className={styles.toc_section_title}
                                                                          nodeId={'12'}
                                                                          label={'For Loops'}>
                                                                    {[1,2,3,4,5].map((el, idx) => (
                                                                        <TreeItem
                                                                            nodeId={idx + ''}
                                                                            label={idx + 1 + '.' + 'Lesson'}>
                                                                        </TreeItem>
                                                                    ))}
                                                                </TreeItem>
                                                            </TreeView>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                            {/* REviews */}
                                            <section className={styles.course__content_block}>
                                            </section>
                                            {/* Join button*/}
                                            <section className={styles.course__content_block}>
                                            </section>
                                            {/* Share buttons*/}
                                            <section className={styles.course__content_block}>
                                            </section>
                                        </article>
                                        <aside className={styles.course__main_aside}>
                                            <div className={styles.course__aside_sticky_wrapper}>
                                                <div className={styles.enrollment}>
                                                    <span>
                                                        Free
                                                    </span>
                                                    <div className={styles.enrollment_action}>
                                                        <div className={styles.join}>
                                                            <Link href={'/course/' + `${id}/info`}><a className={styles.join_button}>
                                                                Join the course
                                                            </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={styles.includes}>
                                                    <h4>This course includes</h4>
                                                    <ul>
                                                        <li>
                                                            <b>43</b> lessons
                                                        </li>
                                                        <li><b>115</b> quizzes</li>
                                                        <li><b>87</b> interactive challenges</li>
                                                    </ul>
                                                    <a>Course content</a>
                                                    <div className={styles.dates}>Last updates 08/01/2021</div>
                                                </div>
                                            </div>
                                        </aside>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default withAuth(Id);