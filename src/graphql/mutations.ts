/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createDetectiveCertification = /* GraphQL */ `mutation CreateDetectiveCertification(
  $input: CreateDetectiveCertificationInput!
  $condition: ModelDetectiveCertificationConditionInput
) {
  createDetectiveCertification(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateDetectiveCertificationMutationVariables,
  APITypes.CreateDetectiveCertificationMutation
>;
export const updateDetectiveCertification = /* GraphQL */ `mutation UpdateDetectiveCertification(
  $input: UpdateDetectiveCertificationInput!
  $condition: ModelDetectiveCertificationConditionInput
) {
  updateDetectiveCertification(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateDetectiveCertificationMutationVariables,
  APITypes.UpdateDetectiveCertificationMutation
>;
export const deleteDetectiveCertification = /* GraphQL */ `mutation DeleteDetectiveCertification(
  $input: DeleteDetectiveCertificationInput!
  $condition: ModelDetectiveCertificationConditionInput
) {
  deleteDetectiveCertification(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteDetectiveCertificationMutationVariables,
  APITypes.DeleteDetectiveCertificationMutation
>;
export const createDetectiveProfile = /* GraphQL */ `mutation CreateDetectiveProfile(
  $input: CreateDetectiveProfileInput!
  $condition: ModelDetectiveProfileConditionInput
) {
  createDetectiveProfile(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateDetectiveProfileMutationVariables,
  APITypes.CreateDetectiveProfileMutation
>;
export const updateDetectiveProfile = /* GraphQL */ `mutation UpdateDetectiveProfile(
  $input: UpdateDetectiveProfileInput!
  $condition: ModelDetectiveProfileConditionInput
) {
  updateDetectiveProfile(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateDetectiveProfileMutationVariables,
  APITypes.UpdateDetectiveProfileMutation
>;
export const deleteDetectiveProfile = /* GraphQL */ `mutation DeleteDetectiveProfile(
  $input: DeleteDetectiveProfileInput!
  $condition: ModelDetectiveProfileConditionInput
) {
  deleteDetectiveProfile(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteDetectiveProfileMutationVariables,
  APITypes.DeleteDetectiveProfileMutation
>;
export const createContract = /* GraphQL */ `mutation CreateContract(
  $input: CreateContractInput!
  $condition: ModelContractConditionInput
) {
  createContract(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateContractMutationVariables,
  APITypes.CreateContractMutation
>;
export const updateContract = /* GraphQL */ `mutation UpdateContract(
  $input: UpdateContractInput!
  $condition: ModelContractConditionInput
) {
  updateContract(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateContractMutationVariables,
  APITypes.UpdateContractMutation
>;
export const deleteContract = /* GraphQL */ `mutation DeleteContract(
  $input: DeleteContractInput!
  $condition: ModelContractConditionInput
) {
  deleteContract(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteContractMutationVariables,
  APITypes.DeleteContractMutation
>;
export const createProgressReport = /* GraphQL */ `mutation CreateProgressReport(
  $input: CreateProgressReportInput!
  $condition: ModelProgressReportConditionInput
) {
  createProgressReport(input: $input, condition: $condition) {
    id
    Date
    Content
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateProgressReportMutationVariables,
  APITypes.CreateProgressReportMutation
>;
export const updateProgressReport = /* GraphQL */ `mutation UpdateProgressReport(
  $input: UpdateProgressReportInput!
  $condition: ModelProgressReportConditionInput
) {
  updateProgressReport(input: $input, condition: $condition) {
    id
    Date
    Content
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateProgressReportMutationVariables,
  APITypes.UpdateProgressReportMutation
>;
export const deleteProgressReport = /* GraphQL */ `mutation DeleteProgressReport(
  $input: DeleteProgressReportInput!
  $condition: ModelProgressReportConditionInput
) {
  deleteProgressReport(input: $input, condition: $condition) {
    id
    Date
    Content
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteProgressReportMutationVariables,
  APITypes.DeleteProgressReportMutation
>;
export const createSupportingData = /* GraphQL */ `mutation CreateSupportingData(
  $input: CreateSupportingDataInput!
  $condition: ModelSupportingDataConditionInput
) {
  createSupportingData(input: $input, condition: $condition) {
    id
    Content
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateSupportingDataMutationVariables,
  APITypes.CreateSupportingDataMutation
>;
export const updateSupportingData = /* GraphQL */ `mutation UpdateSupportingData(
  $input: UpdateSupportingDataInput!
  $condition: ModelSupportingDataConditionInput
) {
  updateSupportingData(input: $input, condition: $condition) {
    id
    Content
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateSupportingDataMutationVariables,
  APITypes.UpdateSupportingDataMutation
>;
export const deleteSupportingData = /* GraphQL */ `mutation DeleteSupportingData(
  $input: DeleteSupportingDataInput!
  $condition: ModelSupportingDataConditionInput
) {
  deleteSupportingData(input: $input, condition: $condition) {
    id
    Content
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteSupportingDataMutationVariables,
  APITypes.DeleteSupportingDataMutation
>;
export const createApplication = /* GraphQL */ `mutation CreateApplication(
  $input: CreateApplicationInput!
  $condition: ModelApplicationConditionInput
) {
  createApplication(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateApplicationMutationVariables,
  APITypes.CreateApplicationMutation
>;
export const updateApplication = /* GraphQL */ `mutation UpdateApplication(
  $input: UpdateApplicationInput!
  $condition: ModelApplicationConditionInput
) {
  updateApplication(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateApplicationMutationVariables,
  APITypes.UpdateApplicationMutation
>;
export const deleteApplication = /* GraphQL */ `mutation DeleteApplication(
  $input: DeleteApplicationInput!
  $condition: ModelApplicationConditionInput
) {
  deleteApplication(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteApplicationMutationVariables,
  APITypes.DeleteApplicationMutation
>;
export const createContractDetail = /* GraphQL */ `mutation CreateContractDetail(
  $input: CreateContractDetailInput!
  $condition: ModelContractDetailConditionInput
) {
  createContractDetail(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateContractDetailMutationVariables,
  APITypes.CreateContractDetailMutation
>;
export const updateContractDetail = /* GraphQL */ `mutation UpdateContractDetail(
  $input: UpdateContractDetailInput!
  $condition: ModelContractDetailConditionInput
) {
  updateContractDetail(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateContractDetailMutationVariables,
  APITypes.UpdateContractDetailMutation
>;
export const deleteContractDetail = /* GraphQL */ `mutation DeleteContractDetail(
  $input: DeleteContractDetailInput!
  $condition: ModelContractDetailConditionInput
) {
  deleteContractDetail(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteContractDetailMutationVariables,
  APITypes.DeleteContractDetailMutation
>;
