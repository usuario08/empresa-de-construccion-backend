import { User } from "../../../domain/entities/User";
import { UserRepository } from "../../../domain/repositories/UserRepository";
import { UserGetterById } from "../../../domain/services/UserGetterById";

export class UserDeleterUseCase {

    private readonly _userRepository: UserRepository
    private readonly _userGetterById: UserGetterById

    constructor(userRepository: UserRepository) {
        this._userRepository = userRepository
        this._userGetterById=new UserGetterById(userRepository)
    }
    async run(id: string): Promise<User> {

        const userToDelete: User = await this._userGetterById.run(id)

        await this._userRepository.delete(userToDelete)
        return userToDelete
    }
}