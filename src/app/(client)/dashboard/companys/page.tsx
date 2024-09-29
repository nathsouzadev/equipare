import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  MapPinIcon,
  GlobeIcon,
  UsersIcon,
  CalendarIcon,
} from 'lucide-react';

// Mock data for multiple companies
const companiesInfo = [
  {
    id: 1,
    name: 'TechInnovate Solutions',
    description:
      'TechInnovate Solutions is a cutting-edge technology company specializing in artificial intelligence and machine learning solutions. We develop innovative products that help businesses optimize their operations and make data-driven decisions.',
    city: 'São Paulo',
    jobModel: 'Híbrido',
    founded: '2015',
    employees: '250+',
    website: 'www.techinnovatesolutions.com',
  },
  {
    id: 2,
    name: 'GreenEco Systems',
    description:
      'GreenEco Systems is a sustainable energy company focused on developing eco-friendly power solutions.',
    city: 'São Paulo',
    jobModel: 'Remoto',
    founded: '2010',
    employees: '500+',
    website: 'www.greenecosystems.com',
  },
  {
    id: 3,
    name: 'HealthTech Innovations',
    description:
      'HealthTech Innovations is at the forefront of digital healthcare. We create advanced telemedicine platforms and AI-driven diagnostic tools to improve patient care and streamline healthcare delivery worldwide.',
    city: 'São Paulo',
    jobModel: 'Presencial',
    founded: '2018',
    employees: '150+',
    website: 'www.healthtechinnovations.com',
  },
  {
    id: 4,
    name: 'DataSphere Analytics',
    description:
      'DataSphere Analytics is a leading big data analytics firm. We provide powerful insights and predictive modeling services to help businesses across various sectors make informed strategic decisions.',
    city: 'São Paulo',
    jobModel: 'Híbrido',
    founded: '2012',
    employees: '300+',
    website: 'www.datasphereanaly tics.com',
  },
  {
    id: 5,
    name: 'CyberShield Security',
    description:
      'CyberShield Security is dedicated to protecting businesses and individuals from cyber threats. Our advanced cybersecurity solutions and services ensure robust protection against evolving digital risks and vulnerabilities.',
    city: 'São Paulo',
    jobModel: 'Remoto',
    founded: '2016',
    employees: '200+',
    website: 'www.cybershieldsecurity.com',
  },
];

export default function CompanyListPage () {
  return (
    <main className='flex-1 p-4 md:p-6 lg:p-8 overflow-auto'>
      <h1 className='text-3xl font-bold'>Empresas auditadas</h1>
      <p className=' mb-6'>
        Confira a lista das empresas comprometidas com a equidade salarial no
        Brasil
      </p>
      <div className='space-y-6'>
        {companiesInfo.map((company) => (
          <Card key={company.id}>
            <CardHeader>
              <CardTitle className='text-2xl font-bold'>
                {company.name}
              </CardTitle>
              <div className='flex items-center mt-2 space-x-2'>
                <MapPinIcon className='h-4 w-4 text-gray-500' />
                <span className='text-sm text-gray-500'>{company.city}</span>
                <Badge variant='secondary'>{company.jobModel}</Badge>
              </div>
            </CardHeader>
            <CardContent className='space-y-4'>
              <p className='text-gray-700'>{company.description}</p>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='flex items-center'>
                  <CalendarIcon className='h-5 w-5 mr-2 text-gray-500' />
                  <div>
                    <h3 className='font-semibold'>Ano de fundação</h3>
                    <p>{company.founded}</p>
                  </div>
                </div>
                <div className='flex items-center'>
                  <UsersIcon className='h-5 w-5 mr-2 text-gray-500' />
                  <div>
                    <h3 className='font-semibold'>Colaboradores</h3>
                    <p>{company.employees}</p>
                  </div>
                </div>
                <div className='flex items-center md:col-span-2'>
                  <GlobeIcon className='h-5 w-5 mr-2 text-gray-500' />
                  <div>
                    <h3 className='font-semibold'>Website</h3>
                    <a
                      href={`https://${company.website}`}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-blue-600 hover:underline'
                    >
                      {company.website}
                    </a>
                  </div>
                </div>
              </div>
              <Button className='w-full mt-4'>View Jobs</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
