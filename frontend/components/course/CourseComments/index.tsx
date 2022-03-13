import styles from './CourseComments.module.scss'
const CourseComments = () => {
    const comments = [
        {
            name: 'John',
            comment: 'Nice course',
            like: 123,
            dislike: 12,
        },
        {
            name: 'Hulio',
            comment: 'Good course',
            like: 12,
            dislike: 12,
        },
        {
            name: 'Gone',
            comment: 'Bad course',
            like: 12,
            dislike: 123,
        },
    ]
    return (
        <>
            <input
            placeholder={'add comment'}
            />
            <div>
                <h4>Comments on course (2342)</h4>
                <div>
                    {comments.map((comment, idx) => (
                        <div className={styles.comment__container}>
                        <div className={styles.comment}>
                            <div>
                                <b>{comment.name}</b>
                                <p>{comment.comment}</p>
                            </div>
                            <div>
                                <div><i className="fa fa-thumbs-up"></i>&nbsp;{comment.like}</div>
                                <div><i className="fa fa-thumbs-down"></i>&nbsp;&nbsp;-{comment.dislike}</div>
                            </div>
                        </div>
                            <hr />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default CourseComments;