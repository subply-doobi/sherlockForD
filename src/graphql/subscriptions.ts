/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateDetectiveCertification = /* GraphQL */ `subscription OnCreateDetectiveCertification(
  $filter: ModelSubscriptionDetectiveCertificationFilterInput
) {
  onCreateDetectiveCertification(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateDetectiveCertificationSubscriptionVariables,
  APITypes.OnCreateDetectiveCertificationSubscription
>;
export const onUpdateDetectiveCertification = /* GraphQL */ `subscription OnUpdateDetectiveCertification(
  $filter: ModelSubscriptionDetectiveCertificationFilterInput
) {
  onUpdateDetectiveCertification(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateDetectiveCertificationSubscriptionVariables,
  APITypes.OnUpdateDetectiveCertificationSubscription
>;
export const onDeleteDetectiveCertification = /* GraphQL */ `subscription OnDeleteDetectiveCertification(
  $filter: ModelSubscriptionDetectiveCertificationFilterInput
) {
  onDeleteDetectiveCertification(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteDetectiveCertificationSubscriptionVariables,
  APITypes.OnDeleteDetectiveCertificationSubscription
>;
export const onCreateDetectiveProfile = /* GraphQL */ `subscription OnCreateDetectiveProfile(
  $filter: ModelSubscriptionDetectiveProfileFilterInput
) {
  onCreateDetectiveProfile(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateDetectiveProfileSubscriptionVariables,
  APITypes.OnCreateDetectiveProfileSubscription
>;
export const onUpdateDetectiveProfile = /* GraphQL */ `subscription OnUpdateDetectiveProfile(
  $filter: ModelSubscriptionDetectiveProfileFilterInput
) {
  onUpdateDetectiveProfile(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateDetectiveProfileSubscriptionVariables,
  APITypes.OnUpdateDetectiveProfileSubscription
>;
export const onDeleteDetectiveProfile = /* GraphQL */ `subscription OnDeleteDetectiveProfile(
  $filter: ModelSubscriptionDetectiveProfileFilterInput
) {
  onDeleteDetectiveProfile(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteDetectiveProfileSubscriptionVariables,
  APITypes.OnDeleteDetectiveProfileSubscription
>;
export const onCreateContract = /* GraphQL */ `subscription OnCreateContract($filter: ModelSubscriptionContractFilterInput) {
  onCreateContract(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateContractSubscriptionVariables,
  APITypes.OnCreateContractSubscription
>;
export const onUpdateContract = /* GraphQL */ `subscription OnUpdateContract($filter: ModelSubscriptionContractFilterInput) {
  onUpdateContract(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateContractSubscriptionVariables,
  APITypes.OnUpdateContractSubscription
>;
export const onDeleteContract = /* GraphQL */ `subscription OnDeleteContract($filter: ModelSubscriptionContractFilterInput) {
  onDeleteContract(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteContractSubscriptionVariables,
  APITypes.OnDeleteContractSubscription
>;
export const onCreateProgressReport = /* GraphQL */ `subscription OnCreateProgressReport(
  $filter: ModelSubscriptionProgressReportFilterInput
) {
  onCreateProgressReport(filter: $filter) {
    id
    Date
    Content
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateProgressReportSubscriptionVariables,
  APITypes.OnCreateProgressReportSubscription
>;
export const onUpdateProgressReport = /* GraphQL */ `subscription OnUpdateProgressReport(
  $filter: ModelSubscriptionProgressReportFilterInput
) {
  onUpdateProgressReport(filter: $filter) {
    id
    Date
    Content
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateProgressReportSubscriptionVariables,
  APITypes.OnUpdateProgressReportSubscription
>;
export const onDeleteProgressReport = /* GraphQL */ `subscription OnDeleteProgressReport(
  $filter: ModelSubscriptionProgressReportFilterInput
) {
  onDeleteProgressReport(filter: $filter) {
    id
    Date
    Content
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteProgressReportSubscriptionVariables,
  APITypes.OnDeleteProgressReportSubscription
>;
export const onCreateSupportingData = /* GraphQL */ `subscription OnCreateSupportingData(
  $filter: ModelSubscriptionSupportingDataFilterInput
) {
  onCreateSupportingData(filter: $filter) {
    id
    Content
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateSupportingDataSubscriptionVariables,
  APITypes.OnCreateSupportingDataSubscription
>;
export const onUpdateSupportingData = /* GraphQL */ `subscription OnUpdateSupportingData(
  $filter: ModelSubscriptionSupportingDataFilterInput
) {
  onUpdateSupportingData(filter: $filter) {
    id
    Content
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateSupportingDataSubscriptionVariables,
  APITypes.OnUpdateSupportingDataSubscription
>;
export const onDeleteSupportingData = /* GraphQL */ `subscription OnDeleteSupportingData(
  $filter: ModelSubscriptionSupportingDataFilterInput
) {
  onDeleteSupportingData(filter: $filter) {
    id
    Content
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSupportingDataSubscriptionVariables,
  APITypes.OnDeleteSupportingDataSubscription
>;
export const onCreateApplication = /* GraphQL */ `subscription OnCreateApplication(
  $filter: ModelSubscriptionApplicationFilterInput
) {
  onCreateApplication(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateApplicationSubscriptionVariables,
  APITypes.OnCreateApplicationSubscription
>;
export const onUpdateApplication = /* GraphQL */ `subscription OnUpdateApplication(
  $filter: ModelSubscriptionApplicationFilterInput
) {
  onUpdateApplication(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateApplicationSubscriptionVariables,
  APITypes.OnUpdateApplicationSubscription
>;
export const onDeleteApplication = /* GraphQL */ `subscription OnDeleteApplication(
  $filter: ModelSubscriptionApplicationFilterInput
) {
  onDeleteApplication(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteApplicationSubscriptionVariables,
  APITypes.OnDeleteApplicationSubscription
>;
export const onCreateContractDetail = /* GraphQL */ `subscription OnCreateContractDetail(
  $filter: ModelSubscriptionContractDetailFilterInput
) {
  onCreateContractDetail(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateContractDetailSubscriptionVariables,
  APITypes.OnCreateContractDetailSubscription
>;
export const onUpdateContractDetail = /* GraphQL */ `subscription OnUpdateContractDetail(
  $filter: ModelSubscriptionContractDetailFilterInput
) {
  onUpdateContractDetail(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateContractDetailSubscriptionVariables,
  APITypes.OnUpdateContractDetailSubscription
>;
export const onDeleteContractDetail = /* GraphQL */ `subscription OnDeleteContractDetail(
  $filter: ModelSubscriptionContractDetailFilterInput
) {
  onDeleteContractDetail(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteContractDetailSubscriptionVariables,
  APITypes.OnDeleteContractDetailSubscription
>;
