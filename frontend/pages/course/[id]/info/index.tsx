import styles from '../../course.module.scss';
import withAuth from "../../../../hoc/withAuth";
import CourseLayout from "../../../../layouts/CourseLayout";
const Course = (props: any) => {
    return (
        <div>
            <div id="chpImage">
                <div className="image">
                    <img itemProp="image" alt="A black backlit keyboard."
                         src={'/assets/card.jpg'}
                         width={'250px'}
                         height={'250px'}
                         title="A black backlit keyboard."/>
                    <div className="caption">
                        <div className="" id="parent-fieldname-image_caption_text">
                            <p>6.0001 is intended to teach basic programming concepts to students with no prior coding
                                experience. (<a
                                    href="https://www.flickr.com/photos/demietrich/8509763458/in/photolist-dXYLcC-86Daog-84ATAp-c1EJaQ-djjT1k-ayEub-amXs3H-2wegK-4cvdtW-4cvcWh-4cvdgJ-4EsFG2-5myRok-4creiD-4BcTXk-gGnScp-bpUyED-4WQp72-8ZsF7H-5dCfHE-vhBLQ9-pXC3MM-Dj9dZ-iyQwg-pXBZBt-67zzve-piiJPF-5YKZV-5Vpmh-qcMXUo-gSPV9z-6Wk31u-4eHKmi-8xYDRa-8xYC3K-b59pV-4mgGmN-8xYAVe-8y2D1j-bn7edW-9waQ2W-82iQc-9CmY3Z-c1EJAf-4Y65Zt-dhLziB-51QVc-8y2EC1-pijuye-hjqkN">Dboybaker</a>,
                                licensed CC-BY-NC-SA)</p>
                        </div>
                    </div>
                </div>
                <div id="course_info">

                    <h3 className="divide">Instructor(s)</h3>
                    <p className="ins" itemProp="author" property="cc:attributionName">Dr. Ana Bell</p>
                    <p className="ins" itemProp="author" property="cc:attributionName">Prof. Eric Grimson</p>
                    <p className="ins" itemProp="author" property="cc:attributionName">Prof. John Guttag</p>


                    <h3 className="divide">MIT Course Number</h3>
                    <p>6.0001 </p>

                    <h3>As Taught In</h3>
                    <p itemProp="startDate">Fall 2016</p>

                    <h3 className="divide">Level</h3>
                    <p itemProp="typicalAgeRange">Undergraduate</p>


                    <p className="cite" id="showCitation">
                        <a href="#">Cite This Course</a>
                    </p>
                </div>
            </div>


            <div id="course_tabs">

                <div id="tabs">

                    <h2>
                        <a href="#description">Course Description</a>
                    </h2>

                    <div id="description" itemProp="description">
                        <div><h2 className="subhead">Course Features</h2>
                            <ul className="specialfeatures">
                                <li><a
                                    href="/courses/electrical-engineering-and-computer-science/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/lecture-videos/index.htm">Video
                                    lectures</a></li>
                                <li><a
                                    href="/courses/electrical-engineering-and-computer-science/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/lecture-videos">Captions/transcript</a>
                                </li>
                                <li><a
                                    href="/courses/electrical-engineering-and-computer-science/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/in-class-questions-and-video-solutions/">Interactive
                                    assessments</a></li>
                                <li><a
                                    href="/courses/electrical-engineering-and-computer-science/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/lecture-slides-code/">Lecture
                                    notes</a></li>
                                <li><a
                                    href="/courses/electrical-engineering-and-computer-science/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/assignments/index.htm">Assignments:
                                    problem sets (no solutions)</a></li>
                                <li><a
                                    href="/courses/electrical-engineering-and-computer-science/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/assignments/">Assignments:
                                    programming with examples</a></li>
                            </ul>
                            <h2 className="subhead">Course Description</h2><p><em>6.0001 Introduction to Computer
                                Science and Programming in Python</em> is intended for students with little or no
                                programming experience. It aims to provide students with an understanding of the role
                                computation can play in solving problems and to help students, regardless of their
                                major, feel justifiably confident of their ability to write small programs that allow
                                them to accomplish useful goals. The class uses the Python 3.5 programming language.</p>
                        </div>
                    </div>


                    <h2>
                        <a href="#related">Related Content</a>
                    </h2>


                    <div id="related">
                        <div><h2 className="subhead">Course Collections</h2><p>See related courses in the following
                            collections:</p><h3 className="subsubhead">Cross-Disciplinary Lists</h3>
                            <ul>
                                <li><a href="/courses/intro-programming">Introductory Programming Courses </a></li>
                            </ul>
                            <h3 className="subsubhead">Find Courses by Topic</h3>
                            <ul>
                                <li><a href="/courses/find-by-topic/#cat=engineering&amp;subcat=computerscience">Computer
                                    Science</a></li>
                                <li><a
                                    href="/courses/find-by-topic/#cat=engineering&amp;subcat=computerscience&amp;spec=algorithmsanddatastructures">Computer
                                    Science &gt; Algorithms and Data Structures</a></li>
                                <li><a
                                    href="/courses/find-by-topic/#cat=engineering&amp;subcat=computerscience&amp;spec=programminglanguages">Computer
                                    Science &gt; Programming Languages</a></li>
                            </ul>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
Course.Layout = CourseLayout;
export default withAuth(Course);