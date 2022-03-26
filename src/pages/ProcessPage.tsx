import React from 'react';


// components
import ContentList from '../components/ContentList';

// hooks
import useProcessSoclet from '../hooks/useProcessSoclet';

const Process = () => {
	const [data] = useProcessSoclet();

	console.log("process data",data)

	return <ContentList data={data.process ?? []} />
}

export default Process;
