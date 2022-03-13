let BACK_URL : string;

if (process.env.NEXT_PUBLIC_ENV === 'development') {
    BACK_URL = 'http://localhost:8080/'
}
export { BACK_URL };

