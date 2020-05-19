// import {Request, RequestBaseUrl} from '../helpers';
// import {REMOTE_URL_COMPANY} from '../constants';
// const request = new Request(RequestBaseUrl.fm);

import Companies from "../mocks/company.data";

export const CompanyService = {
  getAllCompanies,
  getCompany,
};

async function getAllCompanies() {
  // return request.get(REMOTE_URL_COMPANY);

  // TODO remove
  return {
    data: Companies,
  };
}

async function getCompany(id: string) {
  const company = Companies.find((c) => c.id === id);

  return {
    data: company,
  };
}
