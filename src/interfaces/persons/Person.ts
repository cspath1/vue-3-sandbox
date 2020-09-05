import { BaseEntity } from "@/interfaces/BaseEntity";

interface Person extends BaseEntity {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
}

export { Person }
