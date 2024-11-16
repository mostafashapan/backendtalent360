import { Injectable } from '@nestjs/common';
import { User } from './models/user.model'; // User model
import { UpdateUserInput } from './dto/update-user.input'; // DTO for updating user

@Injectable()
export class UserService {
  private users: User[] = [
    {
      id: 1,
      firstName: 'John',
      fatherName: 'Michael',
      grandfatherName: 'Thomas',
      familyName: 'Doe',
      localizedFirstName: 'جون',
      localizedFatherName: 'ميخائيل',
      localizedGrandfatherName: 'توماس',
      localizedFamilyName: 'دو',
      nationalIdNumber: '123456789',
      nationalIdExpiryDate: '2025-12-31',
      title: 'Mr.',
      nationalities: ['USA', 'Canada'],
      maritalStatusId: 1,
      maritalStatusName: 'Married',
      dependants: 2,
      passportNumber: 'P1234567',   // Added passport number
      passportIssueDate: '2020-01-01',  // Added passport issue date
      passportExpiryDate: '2030-01-01'  // Added passport expiry date
    },
    {
      id: 2,
      firstName: 'Jane',
      fatherName: 'William',
      grandfatherName: 'George',
      familyName: 'Smith',
      localizedFirstName: 'جين',
      localizedFatherName: 'ويليام',
      localizedGrandfatherName: 'جورج',
      localizedFamilyName: 'سميث',
      nationalIdNumber: '987654321',
      nationalIdExpiryDate: '2026-01-15',
      title: 'Ms.',
      nationalities: ['UK', 'USA'],
      maritalStatusId: 2,
      maritalStatusName: 'Single',
      dependants: 0,
      passportNumber: 'P9876543',   // Added passport number
      passportIssueDate: '2018-06-15',  // Added passport issue date
      passportExpiryDate: '2028-06-15'  // Added passport expiry date
    },
    {
      id: 3,
      firstName: 'Alice',
      fatherName: 'Robert',
      grandfatherName: 'Edward',
      familyName: 'Johnson',
      localizedFirstName: 'أليس',
      localizedFatherName: 'روبرت',
      localizedGrandfatherName: 'إدوارد',
      localizedFamilyName: 'جونسون',
      nationalIdNumber: '345678901',
      nationalIdExpiryDate: '2027-05-20',
      title: 'Mrs.',
      nationalities: ['Canada'],
      maritalStatusId: 1,
      maritalStatusName: 'Married',
      dependants: 3,
      passportNumber: 'P3456789',   // Added passport number
      passportIssueDate: '2017-03-10',  // Added passport issue date
      passportExpiryDate: '2027-03-10'  // Added passport expiry date
    },
    {
      id: 4,
      firstName: 'Michael',
      fatherName: 'David',
      grandfatherName: 'Arthur',
      familyName: 'Williams',
      localizedFirstName: 'مايكل',
      localizedFatherName: 'ديفيد',
      localizedGrandfatherName: 'آرثر',
      localizedFamilyName: 'ويليامز',
      nationalIdNumber: '567890123',
      nationalIdExpiryDate: '2028-08-11',
      title: 'Mr.',
      nationalities: ['Australia'],
      maritalStatusId: 2,
      maritalStatusName: 'Single',
      dependants: 0,
      passportNumber: 'P5678901',   // Added passport number
      passportIssueDate: '2015-11-22',  // Added passport issue date
      passportExpiryDate: '2025-11-22'  // Added passport expiry date
    },
    {
      id: 5,
      firstName: 'Emma',
      fatherName: 'Charles',
      grandfatherName: 'Frank',
      familyName: 'Davis',
      localizedFirstName: 'إيما',
      localizedFatherName: 'تشارلز',
      localizedGrandfatherName: 'فرانك',
      localizedFamilyName: 'ديفيس',
      nationalIdNumber: '678901234',
      nationalIdExpiryDate: '2024-11-05',
      title: 'Mrs.',
      nationalities: ['Germany', 'USA'],
      maritalStatusId: 1,
      maritalStatusName: 'Married',
      dependants: 1,
      passportNumber: 'P6789012',   // Added passport number
      passportIssueDate: '2020-05-25',  // Added passport issue date
      passportExpiryDate: '2030-05-25'  // Added passport expiry date
    },
    {
      id: 6,
      firstName: 'Olivia',
      fatherName: 'Thomas',
      grandfatherName: 'Samuel',
      familyName: 'Brown',
      localizedFirstName: 'أوليفيا',
      localizedFatherName: 'توماس',
      localizedGrandfatherName: 'صموئيل',
      localizedFamilyName: 'براون',
      nationalIdNumber: '789012345',
      nationalIdExpiryDate: '2029-03-17',
      title: 'Ms.',
      nationalities: ['USA'],
      maritalStatusId: 2,
      maritalStatusName: 'Single',
      dependants: 0,
      passportNumber: 'P7890123',   // Added passport number
      passportIssueDate: '2016-07-09',  // Added passport issue date
      passportExpiryDate: '2026-07-09'  // Added passport expiry date
    },
    {
      id: 7,
      firstName: 'Sophia',
      fatherName: 'Joseph',
      grandfatherName: 'Leonard',
      familyName: 'Miller',
      localizedFirstName: 'صوفيا',
      localizedFatherName: 'جوزيف',
      localizedGrandfatherName: 'ليونارد',
      localizedFamilyName: 'ميلر',
      nationalIdNumber: '890123456',
      nationalIdExpiryDate: '2030-06-25',
      title: 'Mrs.',
      nationalities: ['Canada'],
      maritalStatusId: 1,
      maritalStatusName: 'Married',
      dependants: 2,
      passportNumber: 'P8901234',   // Added passport number
      passportIssueDate: '2019-04-14',  // Added passport issue date
      passportExpiryDate: '2029-04-14'  // Added passport expiry date
    },
    {
      id: 8,
      firstName: 'James',
      fatherName: 'Henry',
      grandfatherName: 'John',
      familyName: 'Wilson',
      localizedFirstName: 'جيمس',
      localizedFatherName: 'هنري',
      localizedGrandfatherName: 'جون',
      localizedFamilyName: 'ويلسون',
      nationalIdNumber: '901234567',
      nationalIdExpiryDate: '2023-12-31',
      title: 'Mr.',
      nationalities: ['UK'],
      maritalStatusId: 2,
      maritalStatusName: 'Single',
      dependants: 0,
      passportNumber: 'P9012345',   // Added passport number
      passportIssueDate: '2014-09-10',  // Added passport issue date
      passportExpiryDate: '2024-09-10'  // Added passport expiry date
    },
    {
      id: 9,
      firstName: 'Isabella',
      fatherName: 'George',
      grandfatherName: 'Vincent',
      familyName: 'Moore',
      localizedFirstName: 'إيزابيلا',
      localizedFatherName: 'جورج',
      localizedGrandfatherName: 'فينسنت',
      localizedFamilyName: 'مور',
      nationalIdNumber: '234567890',
      nationalIdExpiryDate: '2024-07-30',
      title: 'Mrs.',
      nationalities: ['USA', 'Canada'],
      maritalStatusId: 1,
      maritalStatusName: 'Married',
      dependants: 1,
      passportNumber: 'P2345678',   // Added passport number
      passportIssueDate: '2018-12-05',  // Added passport issue date
      passportExpiryDate: '2028-12-05'  // Added passport expiry date
    },
    {
      id: 10,
      firstName: 'Ethan',
      fatherName: 'Daniel',
      grandfatherName: 'Max',
      familyName: 'Taylor',
      localizedFirstName: 'إيثان',
      localizedFatherName: 'دانيال',
      localizedGrandfatherName: 'ماكس',
      localizedFamilyName: 'تايلور',
      nationalIdNumber: '123098765',
      nationalIdExpiryDate: '2025-01-10',
      title: 'Mr.',
      nationalities: ['Australia'],
      maritalStatusId: 2,
      maritalStatusName: 'Single',
      dependants: 0,
      passportNumber: 'P1230987',   // Added passport number
      passportIssueDate: '2015-10-25',  // Added passport issue date
      passportExpiryDate: '2025-10-25'  // Added passport expiry date
    }
  ];

  // Fetch user by ID
  async findOneById(id: number): Promise<User> {
    return this.users.find(user => user.id === id);
  }

  // Update user by ID
  async updateUser(id: number, updateUserInput: UpdateUserInput): Promise<User> {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex === -1) throw new Error('User not found');
    
    // Update user details with the input data
    const updatedUser = {
      ...this.users[userIndex],
      ...updateUserInput,
    };

    // Replace the old user with the updated one
    this.users[userIndex] = updatedUser;
    
    return updatedUser;
  }
}
