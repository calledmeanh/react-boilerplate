class CompanyModel {
    id: string;
    name: string;
  
    constructor(input: CompanyModel) {
      this.id = input.id;
      this.name = input.name;
      return this;
    }
  }
  
  export default CompanyModel;
  