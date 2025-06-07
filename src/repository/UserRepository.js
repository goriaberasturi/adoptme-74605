
import GenericRepository from "./GenericRepository.js";

export default class UserRepository extends GenericRepository {
    constructor(dao) {
        super(dao);
    }

    createUser = (data) => {
        return this.create(data);
    }

    getUserByEmail = (email) => {
        return this.getBy({ email });
    }
    getUserById = (id) => {
        return this.getBy({ _id: id })
    }

}