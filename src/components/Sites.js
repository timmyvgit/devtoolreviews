import React from 'react';
import { useQuery, gql } from '@apollo/client';

const SITES = gql`
    {
        sites {
            id
			name
            url
            price
            rating
        }
      }
    `;

const Sites = ({ newSites }) => {
	const { loading, error, data } = useQuery(SITES);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error</p>;

	return data.sites.map(({ id, name, url, price }) => (
		<div key={id}>
			<p>
				{name} | {url} | {price} 
			</p>
		</div>
	));
};

export default Sites;