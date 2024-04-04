/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateDetectiveCertificationInput = {
  id?: string | null,
  BusinessRegistration?: string | null,
  DetectiveCertification?: string | null,
  LocalGovernmentCertification?: string | null,
  TaxCertification?: string | null,
};

export type ModelDetectiveCertificationConditionInput = {
  BusinessRegistration?: ModelStringInput | null,
  DetectiveCertification?: ModelStringInput | null,
  LocalGovernmentCertification?: ModelStringInput | null,
  TaxCertification?: ModelStringInput | null,
  and?: Array< ModelDetectiveCertificationConditionInput | null > | null,
  or?: Array< ModelDetectiveCertificationConditionInput | null > | null,
  not?: ModelDetectiveCertificationConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type DetectiveCertification = {
  __typename: "DetectiveCertification",
  id: string,
  BusinessRegistration?: string | null,
  DetectiveCertification?: string | null,
  LocalGovernmentCertification?: string | null,
  TaxCertification?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateDetectiveCertificationInput = {
  id: string,
  BusinessRegistration?: string | null,
  DetectiveCertification?: string | null,
  LocalGovernmentCertification?: string | null,
  TaxCertification?: string | null,
};

export type DeleteDetectiveCertificationInput = {
  id: string,
};

export type CreateDetectiveProfileInput = {
  id?: string | null,
  CompanyName?: string | null,
  RepresentativeName?: string | null,
  CompanyAddress?: string | null,
  Contact?: string | null,
  Field?: string | null,
  Area?: string | null,
  DetailCareer?: string | null,
  Intro?: string | null,
  detectiveProfileDetectiveCertificationInDetectiveProfileId?: string | null,
};

export type ModelDetectiveProfileConditionInput = {
  CompanyName?: ModelStringInput | null,
  RepresentativeName?: ModelStringInput | null,
  CompanyAddress?: ModelStringInput | null,
  Contact?: ModelStringInput | null,
  Field?: ModelStringInput | null,
  Area?: ModelStringInput | null,
  DetailCareer?: ModelStringInput | null,
  Intro?: ModelStringInput | null,
  and?: Array< ModelDetectiveProfileConditionInput | null > | null,
  or?: Array< ModelDetectiveProfileConditionInput | null > | null,
  not?: ModelDetectiveProfileConditionInput | null,
  detectiveProfileDetectiveCertificationInDetectiveProfileId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type DetectiveProfile = {
  __typename: "DetectiveProfile",
  id: string,
  CompanyName?: string | null,
  RepresentativeName?: string | null,
  CompanyAddress?: string | null,
  Contact?: string | null,
  Field?: string | null,
  Area?: string | null,
  DetailCareer?: string | null,
  Intro?: string | null,
  DetectiveCertificationInDetectiveProfile?: DetectiveCertification | null,
  createdAt: string,
  updatedAt: string,
  detectiveProfileDetectiveCertificationInDetectiveProfileId?: string | null,
};

export type UpdateDetectiveProfileInput = {
  id: string,
  CompanyName?: string | null,
  RepresentativeName?: string | null,
  CompanyAddress?: string | null,
  Contact?: string | null,
  Field?: string | null,
  Area?: string | null,
  DetailCareer?: string | null,
  Intro?: string | null,
  detectiveProfileDetectiveCertificationInDetectiveProfileId?: string | null,
};

export type DeleteDetectiveProfileInput = {
  id: string,
};

export type CreateContractInput = {
  id?: string | null,
  Date?: string | null,
  Client?: string | null,
  Field?: string | null,
  Purpose?: string | null,
  Option?: string | null,
  Advance?: string | null,
  Fee?: string | null,
  Refund?: string | null,
  Total?: string | null,
  DetectiveSign?: string | null,
  ClientSign?: string | null,
};

export type ModelContractConditionInput = {
  Date?: ModelStringInput | null,
  Client?: ModelStringInput | null,
  Field?: ModelStringInput | null,
  Purpose?: ModelStringInput | null,
  Option?: ModelStringInput | null,
  Advance?: ModelStringInput | null,
  Fee?: ModelStringInput | null,
  Refund?: ModelStringInput | null,
  Total?: ModelStringInput | null,
  DetectiveSign?: ModelStringInput | null,
  ClientSign?: ModelStringInput | null,
  and?: Array< ModelContractConditionInput | null > | null,
  or?: Array< ModelContractConditionInput | null > | null,
  not?: ModelContractConditionInput | null,
};

export type Contract = {
  __typename: "Contract",
  id: string,
  Date?: string | null,
  Client?: string | null,
  Field?: string | null,
  Purpose?: string | null,
  Option?: string | null,
  Advance?: string | null,
  Fee?: string | null,
  Refund?: string | null,
  Total?: string | null,
  DetectiveSign?: string | null,
  ClientSign?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateContractInput = {
  id: string,
  Date?: string | null,
  Client?: string | null,
  Field?: string | null,
  Purpose?: string | null,
  Option?: string | null,
  Advance?: string | null,
  Fee?: string | null,
  Refund?: string | null,
  Total?: string | null,
  DetectiveSign?: string | null,
  ClientSign?: string | null,
};

export type DeleteContractInput = {
  id: string,
};

export type CreateProgressReportInput = {
  id?: string | null,
  Date?: string | null,
  Content?: string | null,
};

export type ModelProgressReportConditionInput = {
  Date?: ModelStringInput | null,
  Content?: ModelStringInput | null,
  and?: Array< ModelProgressReportConditionInput | null > | null,
  or?: Array< ModelProgressReportConditionInput | null > | null,
  not?: ModelProgressReportConditionInput | null,
};

export type ProgressReport = {
  __typename: "ProgressReport",
  id: string,
  Date?: string | null,
  Content?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateProgressReportInput = {
  id: string,
  Date?: string | null,
  Content?: string | null,
};

export type DeleteProgressReportInput = {
  id: string,
};

export type CreateSupportingDataInput = {
  id?: string | null,
  Content?: string | null,
};

export type ModelSupportingDataConditionInput = {
  Content?: ModelStringInput | null,
  and?: Array< ModelSupportingDataConditionInput | null > | null,
  or?: Array< ModelSupportingDataConditionInput | null > | null,
  not?: ModelSupportingDataConditionInput | null,
};

export type SupportingData = {
  __typename: "SupportingData",
  id: string,
  Content?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSupportingDataInput = {
  id: string,
  Content?: string | null,
};

export type DeleteSupportingDataInput = {
  id: string,
};

export type CreateApplicationInput = {
  id?: string | null,
  Date?: string | null,
  Client?: string | null,
  Field?: string | null,
  Purpose?: string | null,
};

export type ModelApplicationConditionInput = {
  Date?: ModelStringInput | null,
  Client?: ModelStringInput | null,
  Field?: ModelStringInput | null,
  Purpose?: ModelStringInput | null,
  and?: Array< ModelApplicationConditionInput | null > | null,
  or?: Array< ModelApplicationConditionInput | null > | null,
  not?: ModelApplicationConditionInput | null,
};

export type Application = {
  __typename: "Application",
  id: string,
  Date?: string | null,
  Client?: string | null,
  Field?: string | null,
  Purpose?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateApplicationInput = {
  id: string,
  Date?: string | null,
  Client?: string | null,
  Field?: string | null,
  Purpose?: string | null,
};

export type DeleteApplicationInput = {
  id: string,
};

export type CreateContractDetailInput = {
  id?: string | null,
  status?: string | null,
  ContractID?: string | null,
  ApplicationID?: string | null,
  ProgressReportID?: string | null,
};

export type ModelContractDetailConditionInput = {
  status?: ModelStringInput | null,
  ContractID?: ModelIDInput | null,
  ApplicationID?: ModelIDInput | null,
  ProgressReportID?: ModelIDInput | null,
  and?: Array< ModelContractDetailConditionInput | null > | null,
  or?: Array< ModelContractDetailConditionInput | null > | null,
  not?: ModelContractDetailConditionInput | null,
};

export type ContractDetail = {
  __typename: "ContractDetail",
  id: string,
  status?: string | null,
  ContractID?: string | null,
  Contract?: Contract | null,
  ApplicationID?: string | null,
  Application?: Application | null,
  ProgressReportID?: string | null,
  ProgressReport?: ProgressReport | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateContractDetailInput = {
  id: string,
  status?: string | null,
  ContractID?: string | null,
  ApplicationID?: string | null,
  ProgressReportID?: string | null,
};

export type DeleteContractDetailInput = {
  id: string,
};

export type ModelDetectiveCertificationFilterInput = {
  id?: ModelIDInput | null,
  BusinessRegistration?: ModelStringInput | null,
  DetectiveCertification?: ModelStringInput | null,
  LocalGovernmentCertification?: ModelStringInput | null,
  TaxCertification?: ModelStringInput | null,
  and?: Array< ModelDetectiveCertificationFilterInput | null > | null,
  or?: Array< ModelDetectiveCertificationFilterInput | null > | null,
  not?: ModelDetectiveCertificationFilterInput | null,
};

export type ModelDetectiveCertificationConnection = {
  __typename: "ModelDetectiveCertificationConnection",
  items:  Array<DetectiveCertification | null >,
  nextToken?: string | null,
};

export type ModelDetectiveProfileFilterInput = {
  id?: ModelIDInput | null,
  CompanyName?: ModelStringInput | null,
  RepresentativeName?: ModelStringInput | null,
  CompanyAddress?: ModelStringInput | null,
  Contact?: ModelStringInput | null,
  Field?: ModelStringInput | null,
  Area?: ModelStringInput | null,
  DetailCareer?: ModelStringInput | null,
  Intro?: ModelStringInput | null,
  and?: Array< ModelDetectiveProfileFilterInput | null > | null,
  or?: Array< ModelDetectiveProfileFilterInput | null > | null,
  not?: ModelDetectiveProfileFilterInput | null,
  detectiveProfileDetectiveCertificationInDetectiveProfileId?: ModelIDInput | null,
};

export type ModelDetectiveProfileConnection = {
  __typename: "ModelDetectiveProfileConnection",
  items:  Array<DetectiveProfile | null >,
  nextToken?: string | null,
};

export type ModelContractFilterInput = {
  id?: ModelIDInput | null,
  Date?: ModelStringInput | null,
  Client?: ModelStringInput | null,
  Field?: ModelStringInput | null,
  Purpose?: ModelStringInput | null,
  Option?: ModelStringInput | null,
  Advance?: ModelStringInput | null,
  Fee?: ModelStringInput | null,
  Refund?: ModelStringInput | null,
  Total?: ModelStringInput | null,
  DetectiveSign?: ModelStringInput | null,
  ClientSign?: ModelStringInput | null,
  and?: Array< ModelContractFilterInput | null > | null,
  or?: Array< ModelContractFilterInput | null > | null,
  not?: ModelContractFilterInput | null,
};

export type ModelContractConnection = {
  __typename: "ModelContractConnection",
  items:  Array<Contract | null >,
  nextToken?: string | null,
};

export type ModelProgressReportFilterInput = {
  id?: ModelIDInput | null,
  Date?: ModelStringInput | null,
  Content?: ModelStringInput | null,
  and?: Array< ModelProgressReportFilterInput | null > | null,
  or?: Array< ModelProgressReportFilterInput | null > | null,
  not?: ModelProgressReportFilterInput | null,
};

export type ModelProgressReportConnection = {
  __typename: "ModelProgressReportConnection",
  items:  Array<ProgressReport | null >,
  nextToken?: string | null,
};

export type ModelSupportingDataFilterInput = {
  id?: ModelIDInput | null,
  Content?: ModelStringInput | null,
  and?: Array< ModelSupportingDataFilterInput | null > | null,
  or?: Array< ModelSupportingDataFilterInput | null > | null,
  not?: ModelSupportingDataFilterInput | null,
};

export type ModelSupportingDataConnection = {
  __typename: "ModelSupportingDataConnection",
  items:  Array<SupportingData | null >,
  nextToken?: string | null,
};

export type ModelApplicationFilterInput = {
  id?: ModelIDInput | null,
  Date?: ModelStringInput | null,
  Client?: ModelStringInput | null,
  Field?: ModelStringInput | null,
  Purpose?: ModelStringInput | null,
  and?: Array< ModelApplicationFilterInput | null > | null,
  or?: Array< ModelApplicationFilterInput | null > | null,
  not?: ModelApplicationFilterInput | null,
};

export type ModelApplicationConnection = {
  __typename: "ModelApplicationConnection",
  items:  Array<Application | null >,
  nextToken?: string | null,
};

export type ModelContractDetailFilterInput = {
  id?: ModelIDInput | null,
  status?: ModelStringInput | null,
  ContractID?: ModelIDInput | null,
  ApplicationID?: ModelIDInput | null,
  ProgressReportID?: ModelIDInput | null,
  and?: Array< ModelContractDetailFilterInput | null > | null,
  or?: Array< ModelContractDetailFilterInput | null > | null,
  not?: ModelContractDetailFilterInput | null,
};

export type ModelContractDetailConnection = {
  __typename: "ModelContractDetailConnection",
  items:  Array<ContractDetail | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionDetectiveCertificationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  BusinessRegistration?: ModelSubscriptionStringInput | null,
  DetectiveCertification?: ModelSubscriptionStringInput | null,
  LocalGovernmentCertification?: ModelSubscriptionStringInput | null,
  TaxCertification?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionDetectiveCertificationFilterInput | null > | null,
  or?: Array< ModelSubscriptionDetectiveCertificationFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionDetectiveProfileFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  CompanyName?: ModelSubscriptionStringInput | null,
  RepresentativeName?: ModelSubscriptionStringInput | null,
  CompanyAddress?: ModelSubscriptionStringInput | null,
  Contact?: ModelSubscriptionStringInput | null,
  Field?: ModelSubscriptionStringInput | null,
  Area?: ModelSubscriptionStringInput | null,
  DetailCareer?: ModelSubscriptionStringInput | null,
  Intro?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionDetectiveProfileFilterInput | null > | null,
  or?: Array< ModelSubscriptionDetectiveProfileFilterInput | null > | null,
};

export type ModelSubscriptionContractFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  Date?: ModelSubscriptionStringInput | null,
  Client?: ModelSubscriptionStringInput | null,
  Field?: ModelSubscriptionStringInput | null,
  Purpose?: ModelSubscriptionStringInput | null,
  Option?: ModelSubscriptionStringInput | null,
  Advance?: ModelSubscriptionStringInput | null,
  Fee?: ModelSubscriptionStringInput | null,
  Refund?: ModelSubscriptionStringInput | null,
  Total?: ModelSubscriptionStringInput | null,
  DetectiveSign?: ModelSubscriptionStringInput | null,
  ClientSign?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionContractFilterInput | null > | null,
  or?: Array< ModelSubscriptionContractFilterInput | null > | null,
};

export type ModelSubscriptionProgressReportFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  Date?: ModelSubscriptionStringInput | null,
  Content?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProgressReportFilterInput | null > | null,
  or?: Array< ModelSubscriptionProgressReportFilterInput | null > | null,
};

export type ModelSubscriptionSupportingDataFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  Content?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSupportingDataFilterInput | null > | null,
  or?: Array< ModelSubscriptionSupportingDataFilterInput | null > | null,
};

export type ModelSubscriptionApplicationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  Date?: ModelSubscriptionStringInput | null,
  Client?: ModelSubscriptionStringInput | null,
  Field?: ModelSubscriptionStringInput | null,
  Purpose?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionApplicationFilterInput | null > | null,
  or?: Array< ModelSubscriptionApplicationFilterInput | null > | null,
};

export type ModelSubscriptionContractDetailFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  status?: ModelSubscriptionStringInput | null,
  ContractID?: ModelSubscriptionIDInput | null,
  ApplicationID?: ModelSubscriptionIDInput | null,
  ProgressReportID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionContractDetailFilterInput | null > | null,
  or?: Array< ModelSubscriptionContractDetailFilterInput | null > | null,
};

export type CreateDetectiveCertificationMutationVariables = {
  input: CreateDetectiveCertificationInput,
  condition?: ModelDetectiveCertificationConditionInput | null,
};

export type CreateDetectiveCertificationMutation = {
  createDetectiveCertification?:  {
    __typename: "DetectiveCertification",
    id: string,
    BusinessRegistration?: string | null,
    DetectiveCertification?: string | null,
    LocalGovernmentCertification?: string | null,
    TaxCertification?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateDetectiveCertificationMutationVariables = {
  input: UpdateDetectiveCertificationInput,
  condition?: ModelDetectiveCertificationConditionInput | null,
};

export type UpdateDetectiveCertificationMutation = {
  updateDetectiveCertification?:  {
    __typename: "DetectiveCertification",
    id: string,
    BusinessRegistration?: string | null,
    DetectiveCertification?: string | null,
    LocalGovernmentCertification?: string | null,
    TaxCertification?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteDetectiveCertificationMutationVariables = {
  input: DeleteDetectiveCertificationInput,
  condition?: ModelDetectiveCertificationConditionInput | null,
};

export type DeleteDetectiveCertificationMutation = {
  deleteDetectiveCertification?:  {
    __typename: "DetectiveCertification",
    id: string,
    BusinessRegistration?: string | null,
    DetectiveCertification?: string | null,
    LocalGovernmentCertification?: string | null,
    TaxCertification?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateDetectiveProfileMutationVariables = {
  input: CreateDetectiveProfileInput,
  condition?: ModelDetectiveProfileConditionInput | null,
};

export type CreateDetectiveProfileMutation = {
  createDetectiveProfile?:  {
    __typename: "DetectiveProfile",
    id: string,
    CompanyName?: string | null,
    RepresentativeName?: string | null,
    CompanyAddress?: string | null,
    Contact?: string | null,
    Field?: string | null,
    Area?: string | null,
    DetailCareer?: string | null,
    Intro?: string | null,
    DetectiveCertificationInDetectiveProfile?:  {
      __typename: "DetectiveCertification",
      id: string,
      BusinessRegistration?: string | null,
      DetectiveCertification?: string | null,
      LocalGovernmentCertification?: string | null,
      TaxCertification?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    detectiveProfileDetectiveCertificationInDetectiveProfileId?: string | null,
  } | null,
};

export type UpdateDetectiveProfileMutationVariables = {
  input: UpdateDetectiveProfileInput,
  condition?: ModelDetectiveProfileConditionInput | null,
};

export type UpdateDetectiveProfileMutation = {
  updateDetectiveProfile?:  {
    __typename: "DetectiveProfile",
    id: string,
    CompanyName?: string | null,
    RepresentativeName?: string | null,
    CompanyAddress?: string | null,
    Contact?: string | null,
    Field?: string | null,
    Area?: string | null,
    DetailCareer?: string | null,
    Intro?: string | null,
    DetectiveCertificationInDetectiveProfile?:  {
      __typename: "DetectiveCertification",
      id: string,
      BusinessRegistration?: string | null,
      DetectiveCertification?: string | null,
      LocalGovernmentCertification?: string | null,
      TaxCertification?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    detectiveProfileDetectiveCertificationInDetectiveProfileId?: string | null,
  } | null,
};

export type DeleteDetectiveProfileMutationVariables = {
  input: DeleteDetectiveProfileInput,
  condition?: ModelDetectiveProfileConditionInput | null,
};

export type DeleteDetectiveProfileMutation = {
  deleteDetectiveProfile?:  {
    __typename: "DetectiveProfile",
    id: string,
    CompanyName?: string | null,
    RepresentativeName?: string | null,
    CompanyAddress?: string | null,
    Contact?: string | null,
    Field?: string | null,
    Area?: string | null,
    DetailCareer?: string | null,
    Intro?: string | null,
    DetectiveCertificationInDetectiveProfile?:  {
      __typename: "DetectiveCertification",
      id: string,
      BusinessRegistration?: string | null,
      DetectiveCertification?: string | null,
      LocalGovernmentCertification?: string | null,
      TaxCertification?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    detectiveProfileDetectiveCertificationInDetectiveProfileId?: string | null,
  } | null,
};

export type CreateContractMutationVariables = {
  input: CreateContractInput,
  condition?: ModelContractConditionInput | null,
};

export type CreateContractMutation = {
  createContract?:  {
    __typename: "Contract",
    id: string,
    Date?: string | null,
    Client?: string | null,
    Field?: string | null,
    Purpose?: string | null,
    Option?: string | null,
    Advance?: string | null,
    Fee?: string | null,
    Refund?: string | null,
    Total?: string | null,
    DetectiveSign?: string | null,
    ClientSign?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateContractMutationVariables = {
  input: UpdateContractInput,
  condition?: ModelContractConditionInput | null,
};

export type UpdateContractMutation = {
  updateContract?:  {
    __typename: "Contract",
    id: string,
    Date?: string | null,
    Client?: string | null,
    Field?: string | null,
    Purpose?: string | null,
    Option?: string | null,
    Advance?: string | null,
    Fee?: string | null,
    Refund?: string | null,
    Total?: string | null,
    DetectiveSign?: string | null,
    ClientSign?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteContractMutationVariables = {
  input: DeleteContractInput,
  condition?: ModelContractConditionInput | null,
};

export type DeleteContractMutation = {
  deleteContract?:  {
    __typename: "Contract",
    id: string,
    Date?: string | null,
    Client?: string | null,
    Field?: string | null,
    Purpose?: string | null,
    Option?: string | null,
    Advance?: string | null,
    Fee?: string | null,
    Refund?: string | null,
    Total?: string | null,
    DetectiveSign?: string | null,
    ClientSign?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProgressReportMutationVariables = {
  input: CreateProgressReportInput,
  condition?: ModelProgressReportConditionInput | null,
};

export type CreateProgressReportMutation = {
  createProgressReport?:  {
    __typename: "ProgressReport",
    id: string,
    Date?: string | null,
    Content?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProgressReportMutationVariables = {
  input: UpdateProgressReportInput,
  condition?: ModelProgressReportConditionInput | null,
};

export type UpdateProgressReportMutation = {
  updateProgressReport?:  {
    __typename: "ProgressReport",
    id: string,
    Date?: string | null,
    Content?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProgressReportMutationVariables = {
  input: DeleteProgressReportInput,
  condition?: ModelProgressReportConditionInput | null,
};

export type DeleteProgressReportMutation = {
  deleteProgressReport?:  {
    __typename: "ProgressReport",
    id: string,
    Date?: string | null,
    Content?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSupportingDataMutationVariables = {
  input: CreateSupportingDataInput,
  condition?: ModelSupportingDataConditionInput | null,
};

export type CreateSupportingDataMutation = {
  createSupportingData?:  {
    __typename: "SupportingData",
    id: string,
    Content?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSupportingDataMutationVariables = {
  input: UpdateSupportingDataInput,
  condition?: ModelSupportingDataConditionInput | null,
};

export type UpdateSupportingDataMutation = {
  updateSupportingData?:  {
    __typename: "SupportingData",
    id: string,
    Content?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSupportingDataMutationVariables = {
  input: DeleteSupportingDataInput,
  condition?: ModelSupportingDataConditionInput | null,
};

export type DeleteSupportingDataMutation = {
  deleteSupportingData?:  {
    __typename: "SupportingData",
    id: string,
    Content?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateApplicationMutationVariables = {
  input: CreateApplicationInput,
  condition?: ModelApplicationConditionInput | null,
};

export type CreateApplicationMutation = {
  createApplication?:  {
    __typename: "Application",
    id: string,
    Date?: string | null,
    Client?: string | null,
    Field?: string | null,
    Purpose?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateApplicationMutationVariables = {
  input: UpdateApplicationInput,
  condition?: ModelApplicationConditionInput | null,
};

export type UpdateApplicationMutation = {
  updateApplication?:  {
    __typename: "Application",
    id: string,
    Date?: string | null,
    Client?: string | null,
    Field?: string | null,
    Purpose?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteApplicationMutationVariables = {
  input: DeleteApplicationInput,
  condition?: ModelApplicationConditionInput | null,
};

export type DeleteApplicationMutation = {
  deleteApplication?:  {
    __typename: "Application",
    id: string,
    Date?: string | null,
    Client?: string | null,
    Field?: string | null,
    Purpose?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateContractDetailMutationVariables = {
  input: CreateContractDetailInput,
  condition?: ModelContractDetailConditionInput | null,
};

export type CreateContractDetailMutation = {
  createContractDetail?:  {
    __typename: "ContractDetail",
    id: string,
    status?: string | null,
    ContractID?: string | null,
    Contract?:  {
      __typename: "Contract",
      id: string,
      Date?: string | null,
      Client?: string | null,
      Field?: string | null,
      Purpose?: string | null,
      Option?: string | null,
      Advance?: string | null,
      Fee?: string | null,
      Refund?: string | null,
      Total?: string | null,
      DetectiveSign?: string | null,
      ClientSign?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    ApplicationID?: string | null,
    Application?:  {
      __typename: "Application",
      id: string,
      Date?: string | null,
      Client?: string | null,
      Field?: string | null,
      Purpose?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    ProgressReportID?: string | null,
    ProgressReport?:  {
      __typename: "ProgressReport",
      id: string,
      Date?: string | null,
      Content?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateContractDetailMutationVariables = {
  input: UpdateContractDetailInput,
  condition?: ModelContractDetailConditionInput | null,
};

export type UpdateContractDetailMutation = {
  updateContractDetail?:  {
    __typename: "ContractDetail",
    id: string,
    status?: string | null,
    ContractID?: string | null,
    Contract?:  {
      __typename: "Contract",
      id: string,
      Date?: string | null,
      Client?: string | null,
      Field?: string | null,
      Purpose?: string | null,
      Option?: string | null,
      Advance?: string | null,
      Fee?: string | null,
      Refund?: string | null,
      Total?: string | null,
      DetectiveSign?: string | null,
      ClientSign?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    ApplicationID?: string | null,
    Application?:  {
      __typename: "Application",
      id: string,
      Date?: string | null,
      Client?: string | null,
      Field?: string | null,
      Purpose?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    ProgressReportID?: string | null,
    ProgressReport?:  {
      __typename: "ProgressReport",
      id: string,
      Date?: string | null,
      Content?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteContractDetailMutationVariables = {
  input: DeleteContractDetailInput,
  condition?: ModelContractDetailConditionInput | null,
};

export type DeleteContractDetailMutation = {
  deleteContractDetail?:  {
    __typename: "ContractDetail",
    id: string,
    status?: string | null,
    ContractID?: string | null,
    Contract?:  {
      __typename: "Contract",
      id: string,
      Date?: string | null,
      Client?: string | null,
      Field?: string | null,
      Purpose?: string | null,
      Option?: string | null,
      Advance?: string | null,
      Fee?: string | null,
      Refund?: string | null,
      Total?: string | null,
      DetectiveSign?: string | null,
      ClientSign?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    ApplicationID?: string | null,
    Application?:  {
      __typename: "Application",
      id: string,
      Date?: string | null,
      Client?: string | null,
      Field?: string | null,
      Purpose?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    ProgressReportID?: string | null,
    ProgressReport?:  {
      __typename: "ProgressReport",
      id: string,
      Date?: string | null,
      Content?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetDetectiveCertificationQueryVariables = {
  id: string,
};

export type GetDetectiveCertificationQuery = {
  getDetectiveCertification?:  {
    __typename: "DetectiveCertification",
    id: string,
    BusinessRegistration?: string | null,
    DetectiveCertification?: string | null,
    LocalGovernmentCertification?: string | null,
    TaxCertification?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListDetectiveCertificationsQueryVariables = {
  filter?: ModelDetectiveCertificationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDetectiveCertificationsQuery = {
  listDetectiveCertifications?:  {
    __typename: "ModelDetectiveCertificationConnection",
    items:  Array< {
      __typename: "DetectiveCertification",
      id: string,
      BusinessRegistration?: string | null,
      DetectiveCertification?: string | null,
      LocalGovernmentCertification?: string | null,
      TaxCertification?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetDetectiveProfileQueryVariables = {
  id: string,
};

export type GetDetectiveProfileQuery = {
  getDetectiveProfile?:  {
    __typename: "DetectiveProfile",
    id: string,
    CompanyName?: string | null,
    RepresentativeName?: string | null,
    CompanyAddress?: string | null,
    Contact?: string | null,
    Field?: string | null,
    Area?: string | null,
    DetailCareer?: string | null,
    Intro?: string | null,
    DetectiveCertificationInDetectiveProfile?:  {
      __typename: "DetectiveCertification",
      id: string,
      BusinessRegistration?: string | null,
      DetectiveCertification?: string | null,
      LocalGovernmentCertification?: string | null,
      TaxCertification?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    detectiveProfileDetectiveCertificationInDetectiveProfileId?: string | null,
  } | null,
};

export type ListDetectiveProfilesQueryVariables = {
  filter?: ModelDetectiveProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDetectiveProfilesQuery = {
  listDetectiveProfiles?:  {
    __typename: "ModelDetectiveProfileConnection",
    items:  Array< {
      __typename: "DetectiveProfile",
      id: string,
      CompanyName?: string | null,
      RepresentativeName?: string | null,
      CompanyAddress?: string | null,
      Contact?: string | null,
      Field?: string | null,
      Area?: string | null,
      DetailCareer?: string | null,
      Intro?: string | null,
      createdAt: string,
      updatedAt: string,
      detectiveProfileDetectiveCertificationInDetectiveProfileId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetContractQueryVariables = {
  id: string,
};

export type GetContractQuery = {
  getContract?:  {
    __typename: "Contract",
    id: string,
    Date?: string | null,
    Client?: string | null,
    Field?: string | null,
    Purpose?: string | null,
    Option?: string | null,
    Advance?: string | null,
    Fee?: string | null,
    Refund?: string | null,
    Total?: string | null,
    DetectiveSign?: string | null,
    ClientSign?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListContractsQueryVariables = {
  filter?: ModelContractFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListContractsQuery = {
  listContracts?:  {
    __typename: "ModelContractConnection",
    items:  Array< {
      __typename: "Contract",
      id: string,
      Date?: string | null,
      Client?: string | null,
      Field?: string | null,
      Purpose?: string | null,
      Option?: string | null,
      Advance?: string | null,
      Fee?: string | null,
      Refund?: string | null,
      Total?: string | null,
      DetectiveSign?: string | null,
      ClientSign?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProgressReportQueryVariables = {
  id: string,
};

export type GetProgressReportQuery = {
  getProgressReport?:  {
    __typename: "ProgressReport",
    id: string,
    Date?: string | null,
    Content?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProgressReportsQueryVariables = {
  filter?: ModelProgressReportFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProgressReportsQuery = {
  listProgressReports?:  {
    __typename: "ModelProgressReportConnection",
    items:  Array< {
      __typename: "ProgressReport",
      id: string,
      Date?: string | null,
      Content?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSupportingDataQueryVariables = {
  id: string,
};

export type GetSupportingDataQuery = {
  getSupportingData?:  {
    __typename: "SupportingData",
    id: string,
    Content?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSupportingDataQueryVariables = {
  filter?: ModelSupportingDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSupportingDataQuery = {
  listSupportingData?:  {
    __typename: "ModelSupportingDataConnection",
    items:  Array< {
      __typename: "SupportingData",
      id: string,
      Content?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetApplicationQueryVariables = {
  id: string,
};

export type GetApplicationQuery = {
  getApplication?:  {
    __typename: "Application",
    id: string,
    Date?: string | null,
    Client?: string | null,
    Field?: string | null,
    Purpose?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListApplicationsQueryVariables = {
  filter?: ModelApplicationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListApplicationsQuery = {
  listApplications?:  {
    __typename: "ModelApplicationConnection",
    items:  Array< {
      __typename: "Application",
      id: string,
      Date?: string | null,
      Client?: string | null,
      Field?: string | null,
      Purpose?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetContractDetailQueryVariables = {
  id: string,
};

export type GetContractDetailQuery = {
  getContractDetail?:  {
    __typename: "ContractDetail",
    id: string,
    status?: string | null,
    ContractID?: string | null,
    Contract?:  {
      __typename: "Contract",
      id: string,
      Date?: string | null,
      Client?: string | null,
      Field?: string | null,
      Purpose?: string | null,
      Option?: string | null,
      Advance?: string | null,
      Fee?: string | null,
      Refund?: string | null,
      Total?: string | null,
      DetectiveSign?: string | null,
      ClientSign?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    ApplicationID?: string | null,
    Application?:  {
      __typename: "Application",
      id: string,
      Date?: string | null,
      Client?: string | null,
      Field?: string | null,
      Purpose?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    ProgressReportID?: string | null,
    ProgressReport?:  {
      __typename: "ProgressReport",
      id: string,
      Date?: string | null,
      Content?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListContractDetailsQueryVariables = {
  filter?: ModelContractDetailFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListContractDetailsQuery = {
  listContractDetails?:  {
    __typename: "ModelContractDetailConnection",
    items:  Array< {
      __typename: "ContractDetail",
      id: string,
      status?: string | null,
      ContractID?: string | null,
      ApplicationID?: string | null,
      ProgressReportID?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateDetectiveCertificationSubscriptionVariables = {
  filter?: ModelSubscriptionDetectiveCertificationFilterInput | null,
};

export type OnCreateDetectiveCertificationSubscription = {
  onCreateDetectiveCertification?:  {
    __typename: "DetectiveCertification",
    id: string,
    BusinessRegistration?: string | null,
    DetectiveCertification?: string | null,
    LocalGovernmentCertification?: string | null,
    TaxCertification?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateDetectiveCertificationSubscriptionVariables = {
  filter?: ModelSubscriptionDetectiveCertificationFilterInput | null,
};

export type OnUpdateDetectiveCertificationSubscription = {
  onUpdateDetectiveCertification?:  {
    __typename: "DetectiveCertification",
    id: string,
    BusinessRegistration?: string | null,
    DetectiveCertification?: string | null,
    LocalGovernmentCertification?: string | null,
    TaxCertification?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteDetectiveCertificationSubscriptionVariables = {
  filter?: ModelSubscriptionDetectiveCertificationFilterInput | null,
};

export type OnDeleteDetectiveCertificationSubscription = {
  onDeleteDetectiveCertification?:  {
    __typename: "DetectiveCertification",
    id: string,
    BusinessRegistration?: string | null,
    DetectiveCertification?: string | null,
    LocalGovernmentCertification?: string | null,
    TaxCertification?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateDetectiveProfileSubscriptionVariables = {
  filter?: ModelSubscriptionDetectiveProfileFilterInput | null,
};

export type OnCreateDetectiveProfileSubscription = {
  onCreateDetectiveProfile?:  {
    __typename: "DetectiveProfile",
    id: string,
    CompanyName?: string | null,
    RepresentativeName?: string | null,
    CompanyAddress?: string | null,
    Contact?: string | null,
    Field?: string | null,
    Area?: string | null,
    DetailCareer?: string | null,
    Intro?: string | null,
    DetectiveCertificationInDetectiveProfile?:  {
      __typename: "DetectiveCertification",
      id: string,
      BusinessRegistration?: string | null,
      DetectiveCertification?: string | null,
      LocalGovernmentCertification?: string | null,
      TaxCertification?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    detectiveProfileDetectiveCertificationInDetectiveProfileId?: string | null,
  } | null,
};

export type OnUpdateDetectiveProfileSubscriptionVariables = {
  filter?: ModelSubscriptionDetectiveProfileFilterInput | null,
};

export type OnUpdateDetectiveProfileSubscription = {
  onUpdateDetectiveProfile?:  {
    __typename: "DetectiveProfile",
    id: string,
    CompanyName?: string | null,
    RepresentativeName?: string | null,
    CompanyAddress?: string | null,
    Contact?: string | null,
    Field?: string | null,
    Area?: string | null,
    DetailCareer?: string | null,
    Intro?: string | null,
    DetectiveCertificationInDetectiveProfile?:  {
      __typename: "DetectiveCertification",
      id: string,
      BusinessRegistration?: string | null,
      DetectiveCertification?: string | null,
      LocalGovernmentCertification?: string | null,
      TaxCertification?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    detectiveProfileDetectiveCertificationInDetectiveProfileId?: string | null,
  } | null,
};

export type OnDeleteDetectiveProfileSubscriptionVariables = {
  filter?: ModelSubscriptionDetectiveProfileFilterInput | null,
};

export type OnDeleteDetectiveProfileSubscription = {
  onDeleteDetectiveProfile?:  {
    __typename: "DetectiveProfile",
    id: string,
    CompanyName?: string | null,
    RepresentativeName?: string | null,
    CompanyAddress?: string | null,
    Contact?: string | null,
    Field?: string | null,
    Area?: string | null,
    DetailCareer?: string | null,
    Intro?: string | null,
    DetectiveCertificationInDetectiveProfile?:  {
      __typename: "DetectiveCertification",
      id: string,
      BusinessRegistration?: string | null,
      DetectiveCertification?: string | null,
      LocalGovernmentCertification?: string | null,
      TaxCertification?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    detectiveProfileDetectiveCertificationInDetectiveProfileId?: string | null,
  } | null,
};

export type OnCreateContractSubscriptionVariables = {
  filter?: ModelSubscriptionContractFilterInput | null,
};

export type OnCreateContractSubscription = {
  onCreateContract?:  {
    __typename: "Contract",
    id: string,
    Date?: string | null,
    Client?: string | null,
    Field?: string | null,
    Purpose?: string | null,
    Option?: string | null,
    Advance?: string | null,
    Fee?: string | null,
    Refund?: string | null,
    Total?: string | null,
    DetectiveSign?: string | null,
    ClientSign?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateContractSubscriptionVariables = {
  filter?: ModelSubscriptionContractFilterInput | null,
};

export type OnUpdateContractSubscription = {
  onUpdateContract?:  {
    __typename: "Contract",
    id: string,
    Date?: string | null,
    Client?: string | null,
    Field?: string | null,
    Purpose?: string | null,
    Option?: string | null,
    Advance?: string | null,
    Fee?: string | null,
    Refund?: string | null,
    Total?: string | null,
    DetectiveSign?: string | null,
    ClientSign?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteContractSubscriptionVariables = {
  filter?: ModelSubscriptionContractFilterInput | null,
};

export type OnDeleteContractSubscription = {
  onDeleteContract?:  {
    __typename: "Contract",
    id: string,
    Date?: string | null,
    Client?: string | null,
    Field?: string | null,
    Purpose?: string | null,
    Option?: string | null,
    Advance?: string | null,
    Fee?: string | null,
    Refund?: string | null,
    Total?: string | null,
    DetectiveSign?: string | null,
    ClientSign?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProgressReportSubscriptionVariables = {
  filter?: ModelSubscriptionProgressReportFilterInput | null,
};

export type OnCreateProgressReportSubscription = {
  onCreateProgressReport?:  {
    __typename: "ProgressReport",
    id: string,
    Date?: string | null,
    Content?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProgressReportSubscriptionVariables = {
  filter?: ModelSubscriptionProgressReportFilterInput | null,
};

export type OnUpdateProgressReportSubscription = {
  onUpdateProgressReport?:  {
    __typename: "ProgressReport",
    id: string,
    Date?: string | null,
    Content?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProgressReportSubscriptionVariables = {
  filter?: ModelSubscriptionProgressReportFilterInput | null,
};

export type OnDeleteProgressReportSubscription = {
  onDeleteProgressReport?:  {
    __typename: "ProgressReport",
    id: string,
    Date?: string | null,
    Content?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSupportingDataSubscriptionVariables = {
  filter?: ModelSubscriptionSupportingDataFilterInput | null,
};

export type OnCreateSupportingDataSubscription = {
  onCreateSupportingData?:  {
    __typename: "SupportingData",
    id: string,
    Content?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSupportingDataSubscriptionVariables = {
  filter?: ModelSubscriptionSupportingDataFilterInput | null,
};

export type OnUpdateSupportingDataSubscription = {
  onUpdateSupportingData?:  {
    __typename: "SupportingData",
    id: string,
    Content?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSupportingDataSubscriptionVariables = {
  filter?: ModelSubscriptionSupportingDataFilterInput | null,
};

export type OnDeleteSupportingDataSubscription = {
  onDeleteSupportingData?:  {
    __typename: "SupportingData",
    id: string,
    Content?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateApplicationSubscriptionVariables = {
  filter?: ModelSubscriptionApplicationFilterInput | null,
};

export type OnCreateApplicationSubscription = {
  onCreateApplication?:  {
    __typename: "Application",
    id: string,
    Date?: string | null,
    Client?: string | null,
    Field?: string | null,
    Purpose?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateApplicationSubscriptionVariables = {
  filter?: ModelSubscriptionApplicationFilterInput | null,
};

export type OnUpdateApplicationSubscription = {
  onUpdateApplication?:  {
    __typename: "Application",
    id: string,
    Date?: string | null,
    Client?: string | null,
    Field?: string | null,
    Purpose?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteApplicationSubscriptionVariables = {
  filter?: ModelSubscriptionApplicationFilterInput | null,
};

export type OnDeleteApplicationSubscription = {
  onDeleteApplication?:  {
    __typename: "Application",
    id: string,
    Date?: string | null,
    Client?: string | null,
    Field?: string | null,
    Purpose?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateContractDetailSubscriptionVariables = {
  filter?: ModelSubscriptionContractDetailFilterInput | null,
};

export type OnCreateContractDetailSubscription = {
  onCreateContractDetail?:  {
    __typename: "ContractDetail",
    id: string,
    status?: string | null,
    ContractID?: string | null,
    Contract?:  {
      __typename: "Contract",
      id: string,
      Date?: string | null,
      Client?: string | null,
      Field?: string | null,
      Purpose?: string | null,
      Option?: string | null,
      Advance?: string | null,
      Fee?: string | null,
      Refund?: string | null,
      Total?: string | null,
      DetectiveSign?: string | null,
      ClientSign?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    ApplicationID?: string | null,
    Application?:  {
      __typename: "Application",
      id: string,
      Date?: string | null,
      Client?: string | null,
      Field?: string | null,
      Purpose?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    ProgressReportID?: string | null,
    ProgressReport?:  {
      __typename: "ProgressReport",
      id: string,
      Date?: string | null,
      Content?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateContractDetailSubscriptionVariables = {
  filter?: ModelSubscriptionContractDetailFilterInput | null,
};

export type OnUpdateContractDetailSubscription = {
  onUpdateContractDetail?:  {
    __typename: "ContractDetail",
    id: string,
    status?: string | null,
    ContractID?: string | null,
    Contract?:  {
      __typename: "Contract",
      id: string,
      Date?: string | null,
      Client?: string | null,
      Field?: string | null,
      Purpose?: string | null,
      Option?: string | null,
      Advance?: string | null,
      Fee?: string | null,
      Refund?: string | null,
      Total?: string | null,
      DetectiveSign?: string | null,
      ClientSign?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    ApplicationID?: string | null,
    Application?:  {
      __typename: "Application",
      id: string,
      Date?: string | null,
      Client?: string | null,
      Field?: string | null,
      Purpose?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    ProgressReportID?: string | null,
    ProgressReport?:  {
      __typename: "ProgressReport",
      id: string,
      Date?: string | null,
      Content?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteContractDetailSubscriptionVariables = {
  filter?: ModelSubscriptionContractDetailFilterInput | null,
};

export type OnDeleteContractDetailSubscription = {
  onDeleteContractDetail?:  {
    __typename: "ContractDetail",
    id: string,
    status?: string | null,
    ContractID?: string | null,
    Contract?:  {
      __typename: "Contract",
      id: string,
      Date?: string | null,
      Client?: string | null,
      Field?: string | null,
      Purpose?: string | null,
      Option?: string | null,
      Advance?: string | null,
      Fee?: string | null,
      Refund?: string | null,
      Total?: string | null,
      DetectiveSign?: string | null,
      ClientSign?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    ApplicationID?: string | null,
    Application?:  {
      __typename: "Application",
      id: string,
      Date?: string | null,
      Client?: string | null,
      Field?: string | null,
      Purpose?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    ProgressReportID?: string | null,
    ProgressReport?:  {
      __typename: "ProgressReport",
      id: string,
      Date?: string | null,
      Content?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
