import Response from "../DataAccessLayer/Models/response";

export default class Res {

    public static RES<T>(success: boolean, data: T | null, message: string): Response<T> {
        return { success, message, data };
    }
}