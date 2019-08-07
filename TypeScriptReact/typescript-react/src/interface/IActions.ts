import { FormEvent } from "react";

export default interface IActions {
    changeTab(id: string): void;
    handleEmployeeIdSearchInputChange(e: FormEvent): void;
    searchEmployeeById(e: FormEvent): void;
}