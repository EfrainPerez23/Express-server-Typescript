
export default interface Response<T> {
    success: boolean;
    message: string;
    data: T | null;
}