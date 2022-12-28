import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Disability Interactions',
    Svg: require('@site/static/img/undraw_dog_re_63j1(1).svg').default,
    description: (
      <>
        Disability Interactions (DIX) is a design framework which uses elements of co-design and innovation to ensure ideas for disabled people get used.
        
      </>
    ),
  },
  {
    title: 'ALS/MND Handbook',
    Svg: require('@site/static/img/undraw_new_year_2023_g4rf(1).svg').default,
    description: (
      <>
        The handbook is being created between Jan and April 23 by students and staff of the Disabilty Interaction module at UCL.
        <p> After this we will make it editable by others too </p>
      </>
    ),
  },
  {
    title: 'Powered by people',
    Svg: require('@site/static/img/undraw_appreciation_3e2v(1).svg').default,
    description: (
      <>
        Our blog documents the process and includes contributions by guset lecturers and experts of living wiht ALS/MND.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
