/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getDetectiveCertification = /* GraphQL */ `query GetDetectiveCertification($id: ID!) {
  getDetectiveCertification(id: $id) {
    id
    BusinessRegistration
    DetectiveCertification
    LocalGovernmentCertification
    TaxCertification
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetDetectiveCertificationQueryVariables,
  APITypes.GetDetectiveCertificationQuery
>;
export const listDetectiveCertifications = /* GraphQL */ `query ListDetectiveCertifications(
  $filter: ModelDetectiveCertificationFilterInput
  $limit: Int
  $nextToken: String
) {
  listDetectiveCertifications(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      BusinessRegistration
      DetectiveCertification
      LocalGovernmentCertification
      TaxCertification
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDetectiveCertificationsQueryVariables,
  APITypes.ListDetectiveCertificationsQuery
>;
export const getDetectiveProfile = /* GraphQL */ `query GetDetectiveProfile($id: ID!) {
  getDetectiveProfile(id: $id) {
    id
    CompanyName
    RepresentativeName
    CompanyAddress
    Contact
    Field
    Area
    DetailCareer
    Intro
    DetectiveCertificationInDetectiveProfile {
      id
      BusinessRegistration
      DetectiveCertification
      LocalGovernmentCertification
      TaxCertification
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    detectiveProfileDetectiveCertificationInDetectiveProfileId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetDetectiveProfileQueryVariables,
  APITypes.GetDetectiveProfileQuery
>;
export const listDetectiveProfiles = /* GraphQL */ `query ListDetectiveProfiles(
  $filter: ModelDetectiveProfileFilterInput
  $limit: Int
  $nextToken: String
) {
  listDetectiveProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      CompanyName
      RepresentativeName
      CompanyAddress
      Contact
      Field
      Area
      DetailCareer
      Intro
      createdAt
      updatedAt
      detectiveProfileDetectiveCertificationInDetectiveProfileId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDetectiveProfilesQueryVariables,
  APITypes.ListDetectiveProfilesQuery
>;
export const getContract = /* GraphQL */ `query GetContract($id: ID!) {
  getContract(id: $id) {
    id
    Date
    Client
    Field
    Purpose
    Option
    Advance
    Fee
    Refund
    Total
    DetectiveSign
    ClientSign
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetContractQueryVariables,
  APITypes.GetContractQuery
>;
export const listContracts = /* GraphQL */ `query ListContracts(
  $filter: ModelContractFilterInput
  $limit: Int
  $nextToken: String
) {
  listContracts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      Date
      Client
      Field
      Purpose
      Option
      Advance
      Fee
      Refund
      Total
      DetectiveSign
      ClientSign
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListContractsQueryVariables,
  APITypes.ListContractsQuery
>;
export const getProgressReport = /* GraphQL */ `query GetProgressReport($id: ID!) {
  getProgressReport(id: $id) {
    id
    Date
    Content
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetProgressReportQueryVariables,
  APITypes.GetProgressReportQuery
>;
export const listProgressReports = /* GraphQL */ `query ListProgressReports(
  $filter: ModelProgressReportFilterInput
  $limit: Int
  $nextToken: String
) {
  listProgressReports(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      Date
      Content
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProgressReportsQueryVariables,
  APITypes.ListProgressReportsQuery
>;
export const getSupportingData = /* GraphQL */ `query GetSupportingData($id: ID!) {
  getSupportingData(id: $id) {
    id
    Content
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetSupportingDataQueryVariables,
  APITypes.GetSupportingDataQuery
>;
export const listSupportingData = /* GraphQL */ `query ListSupportingData(
  $filter: ModelSupportingDataFilterInput
  $limit: Int
  $nextToken: String
) {
  listSupportingData(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      Content
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSupportingDataQueryVariables,
  APITypes.ListSupportingDataQuery
>;
export const getApplication = /* GraphQL */ `query GetApplication($id: ID!) {
  getApplication(id: $id) {
    id
    Date
    Client
    Field
    Purpose
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetApplicationQueryVariables,
  APITypes.GetApplicationQuery
>;
export const listApplications = /* GraphQL */ `query ListApplications(
  $filter: ModelApplicationFilterInput
  $limit: Int
  $nextToken: String
) {
  listApplications(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      Date
      Client
      Field
      Purpose
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListApplicationsQueryVariables,
  APITypes.ListApplicationsQuery
>;
export const getContractDetail = /* GraphQL */ `query GetContractDetail($id: ID!) {
  getContractDetail(id: $id) {
    id
    status
    ContractID
    Contract {
      id
      Date
      Client
      Field
      Purpose
      Option
      Advance
      Fee
      Refund
      Total
      DetectiveSign
      ClientSign
      createdAt
      updatedAt
      __typename
    }
    ApplicationID
    Application {
      id
      Date
      Client
      Field
      Purpose
      createdAt
      updatedAt
      __typename
    }
    ProgressReportID
    ProgressReport {
      id
      Date
      Content
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetContractDetailQueryVariables,
  APITypes.GetContractDetailQuery
>;
export const listContractDetails = /* GraphQL */ `query ListContractDetails(
  $filter: ModelContractDetailFilterInput
  $limit: Int
  $nextToken: String
) {
  listContractDetails(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      status
      ContractID
      ApplicationID
      ProgressReportID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListContractDetailsQueryVariables,
  APITypes.ListContractDetailsQuery
>;
