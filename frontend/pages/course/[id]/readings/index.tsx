import withAuth from "../../../../hoc/withAuth";
import CourseLayout from "../../../../layouts/CourseLayout";
const Component = () => {
    return (
        <div>
            <h2 className="subhead">Textbook</h2> <p>The textbook is Guttag, John. <em>Introduction to
            Computation and Programming Using Python: With Application to Understanding Data Second Edition</em>. MIT
            Press,
            2016. ISBN: 9780262529624. The book and the course lectures parallel each other, though there is more detail
            in
            the book about some topics. It is available both in hard copy and as an e-book.</p>
            <div className="maintabletemplate">
                <table className="tablewidth100" summary="See table caption for summary.">
                    <caption className="invisible">Course readings.</caption>
                    <thead>
                    <tr>
                        <th scope="col">SES&nbsp;#</th>
                        <th scope="col">TOPICS</th>
                        <th scope="col">READINGS</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="row">
                        <td>1</td>
                        <td>What is computation?</td>
                        <td>Chapters 1 and 2.1</td>
                    </tr>
                    <tr className="alt-row">
                        <td>2</td>
                        <td>Branching and Iteration</td>
                        <td>Chapters 2.2, 2.3.1, 2.4, and 3.2</td>
                    </tr>
                    <tr className="row">
                        <td>3</td>
                        <td>String Manipulation, Guess and Check, Approximations, Bisection</td>
                        <td>Chapters 3.1 and 3.3–3.5</td>
                    </tr>
                    <tr className="alt-row">
                        <td>4</td>
                        <td>Decomposition, Abstractions, Functions</td>
                        <td>Chapters 4.1–4.2 and 4.4–4.6</td>
                    </tr>
                    <tr className="row">
                        <td>5</td>
                        <td>Tuples, Lists, Aliasing, Mutability, Cloning</td>
                        <td>Chapters 5.1–5.3.1 and 5.4–5.5</td>
                    </tr>
                    <tr className="alt-row">
                        <td>6</td>
                        <td>Recursion, Dictionaries</td>
                        <td>Chapters 4.3 and 5.6</td>
                    </tr>
                    <tr className="row">
                        <td>7</td>
                        <td>Testing, Debugging, Exceptions, Assertions</td>
                        <td>Chapters 6 and 7</td>
                    </tr>
                    <tr className="alt-row">
                        <td>8</td>
                        <td>Object Oriented Programming</td>
                        <td>Chapter 8.1</td>
                    </tr>
                    <tr className="row">
                        <td>9</td>
                        <td>Python Classes and Inheritance</td>
                        <td>Chapter 8.2</td>
                    </tr>
                    <tr className="alt-row">
                        <td>10</td>
                        <td>Understanding Program Efficiency, Part 1</td>
                        <td>Chapters 9.1–9.3.1, 9.3.3, and 9.3.5</td>
                    </tr>
                    <tr className="row">
                        <td>11</td>
                        <td>Understanding Program Efficiency, Part 1 (Cont.)</td>
                        <td>Chapters 9.3.2, 9.3.4, 9.3.6, and 9.3.7</td>
                    </tr>
                    <tr className="alt-row">
                        <td>12</td>
                        <td>Searching and Sorting algorithms</td>
                        <td>Chapters 10.1–10.2</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
Component.Layout = CourseLayout;
export default withAuth(Component);