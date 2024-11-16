import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
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

  // Localized Name (nested fields)
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

  // Nationalities (list of countries and country IDs)
  @Field(type => [String])
  nationalities: string[]; // Here, you can store country names or country codes

  // Marital Status fields
  @Field(type => Int)
  maritalStatusId: number;

  @Field()
  maritalStatusName: string;

  // Dependants (number of dependents)
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
