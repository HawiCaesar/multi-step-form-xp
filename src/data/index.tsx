import { PersonalInfo } from '../components/PersonalInfo';
import { TypeOfPlan } from '../components/TypeOfPlan';
import { AddOns } from '../components/AddOns';
import { Summary } from '../components/Summary';
import { ThankYou } from '../components/ThankYou';

import iconArcade from '../assets/images/icon-arcade.svg';
import iconAdvanced from '../assets/images/icon-advanced.svg';
import iconPro from '../assets/images/icon-pro.svg';

export const steps = [
  {
    id: 0,
    title: 'Personal info',
    subTitle: 'Your Info',
    description: 'Please provide your name, email address, and phone number.',
    Component: PersonalInfo
  },
  {
    id: 1,
    title: 'Select your plan',
    subTitle: 'Select Plan',
    description: 'You have the option of monthly or yearly billing.',
    Component: TypeOfPlan
  },
  {
    id: 2,
    title: 'Pick add-ons',
    subTitle: 'Add-ons',
    description: 'Add-ons help enhance your gaming experience.',
    Component: AddOns
  },
  {
    id: 3,
    title: 'Finishing up',
    subTitle: 'Summary',
    description: 'Double-check everything looks OK before confirming.',
    Component: Summary
  },
  {
    id: 4,
    Component: ThankYou
  }
];

export const plans = [
  {
    id: 1,
    name: 'Arcade',
    monthlyPrice: 9,
    yearlyPrice: 90,
    icon: iconArcade
  },
  {
    id: 2,
    name: 'Advanced',
    monthlyPrice: 12,
    yearlyPrice: 120,
    icon: iconAdvanced
  },
  {
    id: 3,
    name: 'Pro',
    monthlyPrice: 15,
    yearlyPrice: 150,
    icon: iconPro
  }
];

export const addOns = [
  {
    id: 1,
    name: 'Online service',
    slug: 'online-service',
    description: 'Access to multiplayer games',
    monthlyPrice: 1,
    yearlyPrice: 10
  },
  {
    id: 2,
    name: 'Larger storage',
    slug: 'larger-storage',
    description: 'Extra 1TB of cloud save',
    monthlyPrice: 2,
    yearlyPrice: 20
  },
  {
    id: 3,
    name: 'Customizable profile',
    slug: 'customizable-profile',
    description: 'Custom theme on your profile',
    monthlyPrice: 2,
    yearlyPrice: 20
  }
];
