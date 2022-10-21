export class UserAlreadyExistsException extends Error {
	constructor() {
		super('El usuario ya existe')
	}
}
