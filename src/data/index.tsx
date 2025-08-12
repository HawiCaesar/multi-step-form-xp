import { PersonalInfo } from '../components/PersonalInfo';
import { TypeOfPlan } from '../components/TypeOfPlan';
import { AddOns } from '../components/AddOns';
import { Summary } from '../components/Summary';
import { ThankYou } from '../components/ThankYou';

export const steps = [
    {
      id: 0,
      title: 'Personal info',
      subTitle: 'Your Info',
      description: 'Please provide your name, email address, and phone number.',
      Component: <PersonalInfo />,
    },
    {
      id: 1,
      title: 'Select your plan',
      subTitle: 'Select Plan',
      description: 'You have the option of monthly or yearly billing.',
      Component: <TypeOfPlan />
    },
    {
      id: 2,
      title: 'Pick add-ons',
      subTitle: 'Add-ons',
      description: 'Add-ons help enhance your gaming experience.',
      Component: <AddOns />
    },
    {
      id: 3,
      title: 'Finishing up',
      subTitle: 'Summary',
      description: 'Double-check everything looks OK before confirming.',
      Component: <Summary />
    },
    {
      id: 4,
      Component: <ThankYou />
    }
  ];