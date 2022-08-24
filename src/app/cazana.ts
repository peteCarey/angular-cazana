export class Cazana {
  constructor(
    public id: number,
    public vrm: string,
    public make: string,
    public model: string,
    public registrationDate: string,
    public dateAdvertised: string,
    public price: number,
    public mileageAdvertised: number,
    public durationFromReg: number,
    public averageMileage: number,
    public dateOfMot: string,
    public result: string,
    public mileageMot: number,
    public dateOfChange: string,
    public fromVRM: string,
    public toVRM: string
  ) {}
}