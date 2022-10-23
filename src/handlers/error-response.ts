class ErrorResponse extends Error {
	constructor(public message: string, public status = 400, public errors: any[]) {
		super(message);
	}
}

export default ErrorResponse;
