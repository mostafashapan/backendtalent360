import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput {
  @Field(type => Int)
  id: number;

  @Field()
  firstName: string;

  @Field()
  fatherName: string;

  @Field()
  grandfatherName: string;

  @Field()
  familyName: string;

  // Localized Name fields
  @Field()
  localizedFirstName: string;

  @Field()
  localizedFatherName: string;

  @Field()
  localizedGrandfatherName: string;

  @Field()
  localizedFamilyName: string;

  // National ID fields
  @Field()
  nationalIdNumber: string;

  @Field()
  nationalIdExpiryDate: string;

  @Field()
  title: string;

  // Nationalities (array of strings)
  @Field(type => [String])
  nationalities: string[];

  // Marital Status fields
  @Field(type => Int)
  maritalStatusId: number;

  @Field()
  maritalStatusName: string;

  // Dependants field
  @Field(type => Int)
  dependants: number;

  // Passport fields
  @Field()
  passportNumber: string;

  @Field()
  passportIssueDate: string;

  @Field()
  passportExpiryDate: string;
}
