import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Гра i логiка',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Як працює iгровий цикл, стан гри та обробка спроб у `useHangman`.
      </>
    ),
  },
  {
    title: 'Ентропiя та аналiтика',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Розрахунок iнформацiйної ентропiї лiтер i порiвняння кандидатiв.
      </>
    ),
  },
  {
    title: 'Данi та згода',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        LocalStorage, cookie consent, GDPR i політика конфiденцiйностi.
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
        <Heading as="h3">{title}</Heading>
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
