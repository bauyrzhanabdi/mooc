import Link from 'next/link';

const NotFound = () => {
    return (
        <div>
            <h1>Page can not be found</h1>
            <p>Go back to <Link href='/'><a>Home</a></Link></p>
        </div>
    )
}
export default NotFound;