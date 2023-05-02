import ContentLoader from 'react-content-loader';

const Skeleton = (props: object) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="0" y="296" rx="5" ry="5" width="280" height="32" />
    <circle cx="120" cy="120" r="120" />
    <rect x="0" y="345" rx="5" ry="5" width="280" height="77" />
    <rect x="0" y="447" rx="5" ry="5" width="95" height="30" />
    <rect x="125" y="446" rx="20" ry="20" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;
