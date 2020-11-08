import React from 'react';
import Loading from 'components/Loading';

type ContentCompoentProps = {
  key?: string;
  componentPath: string;
};

function ContentCompoent({ componentPath }: ContentCompoentProps) {
  const LazyComponent = React.lazy(() => import(`../../${componentPath}`));

  return (
    <>
      <React.Suspense fallback={<Loading />}>
        <LazyComponent />
      </React.Suspense>
    </>
  );
}

export default ContentCompoent;
