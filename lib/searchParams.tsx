import { createLoader, parseAsStringLiteral } from 'nuqs/server';

export const sortBy = ['asc', 'desc'];
// Describe your search params, and reuse this in useQueryStates / createSerializer:
export const globalSearchParams = {
  sort: parseAsStringLiteral(sortBy).withDefault('asc'),
};

export const loadSearchParams = createLoader(globalSearchParams);
