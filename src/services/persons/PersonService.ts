import { Person } from "@/interfaces/persons/Person";
import { BaseService } from "@/services/BaseService";

const ENDPOINT: string = "persons";

interface PersonDeleteParams {
    id: number
}

interface PersonGetParams {
    id: number;
}

interface PersonPutParams {
    id: number;
}

class PersonService {
    constructor() {

    }

    static delete(params: PersonDeleteParams): Promise<ServiceResponse<boolean>> {
        return BaseService.delete<boolean>(ENDPOINT + "/{id}", params);
    }

    static list(): Promise<ServiceResponse<Array<Person>>> {
        return BaseService.get<Array<Person>>(ENDPOINT)
    }

    static get(params: PersonGetParams): Promise<ServiceResponse<Person>> {
        return BaseService.get<Person>(ENDPOINT + "/{id}", params);
    }

    static post(data: Person): Promise<ServiceResponse<Person>> {
        return BaseService.post<Person>(ENDPOINT, data);
    }

    static put(data: Person, params: PersonPutParams): Promise<ServiceResponse<Person>> {
        return BaseService.put<Person>(ENDPOINT + "/{id}", data, params);
    }
}

export {
    PersonDeleteParams,
    PersonGetParams,
    PersonPutParams,
    PersonService
}
