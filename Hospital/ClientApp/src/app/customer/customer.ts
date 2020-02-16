export class Customer {
  id: number;
  name: string;
  lastName: string;
  email: string;
  birthday: Date;
  height: number;
  width: number;
  bloodType: string;

  constructor(id: number, name: string, lastName: string, bloodType: string) {
    id = id;
    name = name;
    lastName = lastName;
    bloodType = bloodType;
  }
}
